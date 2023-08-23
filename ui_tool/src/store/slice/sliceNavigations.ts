import { createSlice } from '@reduxjs/toolkit';

interface State {
  category: {
    id: number;
    name: string;
    path: string;
    isParent: boolean;
    date: string;
    children: {
      id: number;
      idx: number;
      name: string;
      path: string;
      isParent: boolean;
    }[];
  };
}
const initialState: State[] = [];
const sliceNavigations = createSlice({
  name: 'navigations',
  initialState,
  reducers: {
    initalizeNavigations: (state, action) => {
      return action.payload;
    },
    setTitle: (state, action) => {
      const isParent = action.payload.isParent;
      const id = action.payload.id;
      const idx = action.payload.idx;
      console.log(isParent, id, idx, action.payload, 'isParent, id, idx')
      if (state && id >= 0 && id < state.length) {
        if (isParent) {
          state[id].category.name = action.payload.title;
        } else {
          state[id].category.children[idx].name = action.payload.title;
        }
      }
    },
    setUrl: (state, action) => {
      const isParent = action.payload.isParent;
      const id = action.payload.id;
      const idx = action.payload.idx;
      if (state && id >= 0 && id < state.length) {
        if (isParent) {
          state[id].category.children[0].path = action.payload.path;
        } else {
          state[id].category.children[idx].path = action.payload.path;
        }
      }
    },
    setBlankOption: (state) => {
      //checkbox true or false -> true => _blank & false => _self
      console.log(state, 'state')


    }
  },
});

export const { initalizeNavigations, setTitle, setUrl, setBlankOption } = sliceNavigations.actions;
export default sliceNavigations;
