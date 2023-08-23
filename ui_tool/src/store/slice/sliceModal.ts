import { createSlice } from '@reduxjs/toolkit';

interface State { }
const initialState = {
  id: 0,
  title: '',
  url: '',
  duplTitle: '',
  duplUrl: '',
  blankOption: false,
};
const sliceModal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    initalize: (state, action) => {
      return action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setUrl: (state, action) => {
      state.url = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    clearModalState: () => {
      return initialState;
    },
    setDuplTitle: (state, action) => {
      state.duplTitle = action.payload;
    },
    setDuplUrl: (state, action) => {
      state.duplUrl = action.payload;
    },
    setBlankOption: (state) => {
      state.blankOption = !state.blankOption;
    },
    deletePageData: (state) => {
      state = initialState;
    }
  },
});

export const {
  initalize,
  setTitle,
  setUrl,
  setId,
  clearModalState, setBlankOption, deletePageData,
  setDuplTitle,
  setDuplUrl,
} = sliceModal.actions;
export default sliceModal;
