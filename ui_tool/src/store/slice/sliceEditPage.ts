import { createSlice } from '@reduxjs/toolkit';

interface PageInfoTypes {
  id: number;
  title: string;
  path: string;
  date: string;
  category: string;
}

interface PageTypes {
  type: string;
  contentLayout: number;
  src: SrcTypes[];
  link: LinkTypes[];
  childrenContainerClassName: string;
  children: PageChildrenTypes[];
}

interface SrcTypes {
  srcIndex?: number;
  imageId?: string;
  src?: string;
}

interface LinkTypes {
  linkIndex?: number;
  link?: string;
}

interface PageChildrenTypes {
  type: string;
  contentLayout: number;
  className: string[];
  src: SrcTypes[];
  link: LinkTypes[];
}

interface EditPageTypes {
  pageInfo: PageInfoTypes;
  page: PageTypes[];
}
const initialState: EditPageTypes = {
  pageInfo: {
    id: 0,
    title: '',
    path: '',
    date: '',
    category: '',
  },
  page: [
    {
      type: 'initial',
      contentLayout: 0,
      src: [{}],
      link: [{}],
      childrenContainerClassName: '',
      children: [],
    },
  ],
};

const sliceEditPage = createSlice({
  name: 'editpage',
  initialState: initialState,
  reducers: {
    setInitialState: (state, action) => {
      state.pageInfo = action.payload.pageInfo;
      if (action.payload.page.length !== 0) {
        state.page = action.payload.page; //빈페이지 아닐 경우
      } else {
        state.page = initialState.page;
      }
      //빈페이지 일 경우 자동으로 초기값 들어감
    },
    filteringInitialState: (state) => {
      //저장 전 initial이 있으면 모두 삭제
      const filteredPage = state.page.filter((item) => item.type !== 'initial');
      state.page = filteredPage;
    },

    updateTypeAndContentLayout: (state, action) => {
      const {
        index,
        type,
        contentLayout,
        numberOfLayouts,
        childrenContainerClassName,
        childrenClassName,
        childrenBlockIndex,
      } = action.payload;
      if (index >= 0 && index < state.page.length) {
        if (numberOfLayouts) {
          //중첩 레이아웃 구조 처음 선택시
          state.page[index].childrenContainerClassName =
            childrenContainerClassName;
          state.page[index].children = Array.from(
            { length: numberOfLayouts },
            (_, index) => ({
              type: 'initial',
              className: childrenClassName[index],
              contentLayout: 0,
              src: [{}],
              link: [{}],
            })
          );
        }
        if (state.page[index].type === 'layout' && childrenBlockIndex >= 0) {
          //레이아웃 구조에서 선택시

          state.page[index].children[childrenBlockIndex].type = type;
          state.page[index].children[childrenBlockIndex].contentLayout =
            contentLayout;
          state.page[index].children[childrenBlockIndex].src = [{}];
          state.page[index].children[childrenBlockIndex].link = [{}];
        } else {
          //기존구조

          state.page[index].type = type;
          state.page[index].contentLayout = contentLayout;
          state.page[index].src = [{}];
          state.page[index].link = [{}];
        }
      }
    },
    updateSrc: (state, action) => {
      const { index, src, childrenBlockIndex } = action.payload;
      if (state.page[index].type === 'layout') {
        //타입 레이아웃 구조일 경우
        const srcIndex = src.srcIndex;
        const existingData =
          state.page[index].children[childrenBlockIndex].src[srcIndex];
        state.page[index].children[childrenBlockIndex].src[srcIndex] = {
          ...existingData,
          ...src,
        };
      } else {
        const srcIndex = src.srcIndex;
        const existingData = state.page[index].src[srcIndex];
        state.page[index].src[srcIndex] = { ...existingData, ...src };
      }
    },
    updateLink: (state, action) => {
      const { index, link, childrenBlockIndex } = action.payload;
      if (state.page[index].type === 'layout') {
        //타입 레이아웃 구조일 경우
        const linkIndex = link.linkIndex;
        const existingData =
          state.page[index].children[childrenBlockIndex].link[linkIndex];
        state.page[index].children[childrenBlockIndex].link[linkIndex] = {
          ...existingData,
          ...link,
        };
      } else {
        const linkIndex = link.linkIndex;
        const existingData = state.page[index].link[linkIndex];
        state.page[index].link[linkIndex] = { ...existingData, ...link };
      }
    },
    pushEmptyObjToSrcAndLink: (state, action) => {
      const { index, childrenBlockIndex } = action.payload;
      if (childrenBlockIndex !== undefined) {
        state.page[index].children[childrenBlockIndex].src.push({});
        state.page[index].children[childrenBlockIndex].link.push({});
      } else {
        state.page[index].src.push({});
        state.page[index].link.push({});
      }
    },
    deleteSrcAndLink: (state, action) => {
      const { index, boxIndex } = action.payload;
      const filteredSrc = state.page[index].src.filter(
        (_, idx) => idx !== boxIndex
      );
      const filteredLink = state.page[index].link.filter(
        (_, idx) => idx !== boxIndex
      );
      state.page[index].src = filteredSrc;
      state.page[index].link = filteredLink;
    },
    moveUpBlock: (state, action) => {
      const { index } = action.payload;
      if (index <= 0) return;
      const pageCopy = [...state.page];
      const temp = pageCopy[index];
      pageCopy[index] = pageCopy[index - 1];
      pageCopy[index - 1] = temp;
      state.page = pageCopy;
    },

    moveDownBlock: (state, action) => {
      const { index } = action.payload;
      if (index >= state.page.length - 1) return;
      const pageCopy = [...state.page];
      const temp = pageCopy[index];
      pageCopy[index] = pageCopy[index + 1];
      pageCopy[index + 1] = temp;
      state.page = pageCopy;
    },

    deleteBlock: (state, action) => {
      const { index } = action.payload;
      if (state.page.length === 0) return state;
      const filteredPage = state.page.filter((_, idx) => idx !== index);
      state.page = filteredPage;
    },
    setToInitialBlock: (state, action) => {
      const { index } = action.payload;
      state.page[index] = {
        type: 'initial',
        contentLayout: 0,
        src: [{}],
        link: [{}],
        childrenContainerClassName: '',
        children: [],
      };
    },
    putNewBlockTop: (state, action) => {
      const { index } = action.payload;
      if (index < 0 || index >= state.page.length) return state;
      state.page.splice(index, 0, {
        type: 'initial',
        contentLayout: 0,
        src: [{}],
        link: [{}],
        childrenContainerClassName: '',
        children: [],
      });
    },
    putNewBlockBottom: (state, action) => {
      const { index } = action.payload;
      if (index < 0 || index >= state.page.length) return state;
      state.page.splice(index + 1, 0, {
        type: 'initial',
        contentLayout: 0,
        src: [{}],
        link: [{}],
        childrenContainerClassName: '',
        children: [],
      });
    },
  },
});

export const {
  setInitialState,
  filteringInitialState,
  updateTypeAndContentLayout,
  updateLink,
  updateSrc,
  pushEmptyObjToSrcAndLink,
  deleteSrcAndLink,
  moveUpBlock,
  moveDownBlock,
  deleteBlock,
  putNewBlockTop,
  putNewBlockBottom,
  setToInitialBlock,
} = sliceEditPage.actions;
export default sliceEditPage;
