import {configureStore} from '@reduxjs/toolkit';
import mesReducer from './messagesSlice/messagesSlice';
import modalToggleReducer from './modalToggleSlice/modalToggleSlice';
import monthTabSlice from './monthTabSlice/monthTabSlice';
import themeToggleReducer from './themeToggleSlice/themeToggleSlice';
import AppStateReducer from './AppStateSlice/AppStateSlice';
export const store = configureStore({
  reducer: {
    mes: mesReducer,
    modalToggle: modalToggleReducer,
    monthTab: monthTabSlice,
    themeToggle: themeToggleReducer,
    AppState: AppStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
