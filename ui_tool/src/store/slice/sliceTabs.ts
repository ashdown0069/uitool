import { createSlice } from '@reduxjs/toolkit';

const sliceTabs = createSlice({
  name: 'tabState',
  initialState: {
    activeTab: 0,
  },
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = sliceTabs.actions;
export default sliceTabs;
