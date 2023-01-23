import {configureStore} from '@reduxjs/toolkit';
import mesReducer from './messagesSlice';
import modalToggleReducer from './modalToggleSlice';
import monthTabSlice from './monthTabSlice';
import themeToggleReducer from './themeToggleSlice';
import AppStateReducer from './AppStateSlice';
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
