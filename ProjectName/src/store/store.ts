import { configureStore}  from '@reduxjs/toolkit'
import mesReducer from './messagesSlice'
import modalToggleReducer from './modalToggleSlice'
import monthTabSlice from './monthTabSlice'
import themeToggleReducer from './themeToggleSlice'
import AppStateReducer from './AppStateSlice'
export const store = configureStore({
    reducer:{
        mes:mesReducer,
        modalToggle: modalToggleReducer,
        monthTab: monthTabSlice,
        themeToggle: themeToggleReducer,
        AppState: AppStateReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch