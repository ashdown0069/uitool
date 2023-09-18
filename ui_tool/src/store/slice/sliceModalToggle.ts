import { createSlice } from '@reduxjs/toolkit';

interface modalToggleTypes {
  modalState: boolean;
  commonModalState: Index | null;
  modalDetailState: number | null;
  modalDuplState: number | null;
  selectedBlockIndex: number | null;
  selectedchildrenBlockIndex: number | null;
}

interface Index {
  blockIndex: number;
  boxIndex?: number;
  childrenBlockIndex?: number;
}

const initialState: modalToggleTypes = {
  modalState: false,
  commonModalState: null,
  modalDetailState: null,
  modalDuplState: null,
  selectedBlockIndex: null,
  selectedchildrenBlockIndex: null,
};

const sliceModalToggle = createSlice({
  name: 'modalToggle',
  initialState: initialState,
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
