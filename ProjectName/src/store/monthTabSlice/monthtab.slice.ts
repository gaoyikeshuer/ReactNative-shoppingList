import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface MonthTab {
  item: number | object;
}
const initialState: MonthTab = {
  item: 0,
};
export const monthTabSlice = createSlice({
  name: 'monthTab',
  initialState,
  reducers: {
    changeMonth: (state, action) => {
      state.item = action.payload.item?.month;
    },
  },
});

export const {changeMonth} = monthTabSlice.actions;
export const monthSelector = (state: RootState) => state.monthTab.item;
export default monthTabSlice.reducer;
