import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface ModalState {
  active: boolean;
}

const initialState: ModalState = {
  active: false,
};

export const modalToggle = createSlice({
  name: 'modalToggle',
  initialState,
  reducers: {
    toggleActive: state => {
      state.active = !state.active;
    },
  },
});
export const {toggleActive} = modalToggle.actions;
export const isModalActiveSelector = (state: RootState) =>
  state.modalToggle.active;
export default modalToggle.reducer;
