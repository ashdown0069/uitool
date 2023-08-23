import { createSlice } from '@reduxjs/toolkit';

const sliceTable = createSlice({
  name: 'table',
  initialState: {
    col: 0,
    row: 0,
  },
  reducers: {
    tableLayout: (state, action) => {
      const { col, row } = action.payload;
      state.col = col;
      state.row = row;
    },
  },
});

export const { tableLayout } = sliceTable.actions;
export default sliceTable;
