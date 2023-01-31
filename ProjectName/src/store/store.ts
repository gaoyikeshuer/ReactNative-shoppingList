import {configureStore} from '@reduxjs/toolkit';

import AppStateReducer from './AppStateSlice/appstate.slice';
import mesReducer from './messagesSlice/messages.slice';
import modalToggleReducer from './modalToggleSlice/modaltoggle.slice';
import monthTabSlice from './monthTabSlice/monthtab.slice';
import themeToggleReducer from './themeToggleSlice/themetoggle.slice';

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
