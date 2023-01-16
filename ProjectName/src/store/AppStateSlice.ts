import {createSlice} from '@reduxjs/toolkit';
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
export default AppState.reducer;
