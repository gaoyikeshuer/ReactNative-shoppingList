import {createSlice} from '@reduxjs/toolkit';
import { RootState } from '../store';
interface App {
  active: boolean;
}

const initialState: App = {
  active: false,
};
export const AppState = createSlice({
  name: 'AppState',
  initialState,
  reducers: {
    AppStateActive: state => {
      state.active = !state.active;
    },
  },
});
export const {AppStateActive} = AppState.actions;
export const isAppActiveSelector = (state: RootState) => state.AppState.active;
export default AppState.reducer;
