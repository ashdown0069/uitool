import { createSlice } from '@reduxjs/toolkit';

const sliceModalToggle = createSlice({
  name: 'modalToggle',
  initialState: {
    modalState: false,
    commonModalState: null,
    modalDetailState: null,
    modalDuplState: null,
    selectedBlockIndex: null,
    selectedchildrenBlockIndex: null,
  },
  reducers: {
    blockModalToggle: (state) => {
      state.modalState = !state.modalState;
    },
    commonModalToggle: (state, action) => {
      state.commonModalState = action.payload;
    },
    ModalDetailOpen: (state, action) => {
      state.modalDetailState = action.payload;
    },
    ModalDuplOpen: (state, action) => {
      state.modalDuplState = action.payload;
    },
    closeAll: (state) => {
      state.modalState = false;
      state.commonModalState = null;
      state.modalDetailState = null;
      state.modalDuplState = null;
    },
    selectBlockIndex: (state, action) => {
      state.selectedBlockIndex = action.payload;
    },
    selectchildrenBlockIndex: (state, action) => {
      state.selectedchildrenBlockIndex = action.payload;
    },
    clearIndex: (state) => {
      state.selectedBlockIndex = null;
      state.selectedchildrenBlockIndex = null;
    },
  },
});

export const {
  blockModalToggle,
  selectBlockIndex,
  selectchildrenBlockIndex,
  commonModalToggle,
  ModalDetailOpen,
  ModalDuplOpen,
  closeAll,
  clearIndex,
} = sliceModalToggle.actions;
export default sliceModalToggle;
