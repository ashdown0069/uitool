import { createSlice } from '@reduxjs/toolkit';

interface SettingBlockState {
  id: number;
  name: string;
  path: string;
  isParent: boolean;
  category: string;
  children: {
    id: number;
    idx: number;
    name: string;
    path: string;
    isParent: boolean;
    category: string;
  }[];
  date: string;
}
const initialState: SettingBlockState = {
    id: 0,
    name: '',
    path: '',
    isParent: false,
    category: '',
    date: '',
    children: []
};

const sliceSettingBlock = createSlice({
  name: 'settingBlock',
  initialState,
  reducers: {
    initalize: (state, action) => {
      return action.payload;
    },
  },
});

export const { initalize } = sliceSettingBlock.actions;
export default sliceSettingBlock;




// setTitle: (state, action) => {
//   const isParent = action.payload.isParent;
//   const id = action.payload.id;
//   const idx = action.payload.idx;
  
//   if (state && id >= 0 && id < state.length) {
//     if (isParent) {
//       state[id].category.name = action.payload.title;
//     } else if (state[id].children && idx >= 0 && idx < state[id].children.length) {
//       state[id].category.children[idx].name = action.payload.title;
//     }
//   }
// },


// setUrl: (state, action) => {
//   state[0].path = action.payload;
// },
// setBlankOption: (state) => {
//   state[0].isParent = !state[0].isParent;
// }