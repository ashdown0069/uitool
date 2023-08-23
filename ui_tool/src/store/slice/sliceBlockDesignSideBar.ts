import { createSlice } from '@reduxjs/toolkit';

const validate = ['image', 'line', 'list', 'text', 'table', 'layout'];

const sliceBlockDesignSideBar = createSlice({
  name: 'sidebar',
  initialState: {
    selectItem: '',
  },
  reducers: {
    setDesign: (state, action) => {
      const type = action.payload.type;
      if (validate.includes(type)) {
        state.selectItem = type;
      } else {
        throw Error('invalid payload type, try again...');
      }
    },
  },
});

export const { setDesign } = sliceBlockDesignSideBar.actions;
export default sliceBlockDesignSideBar;
