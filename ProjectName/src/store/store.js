import { configureStore}  from '@reduxjs/toolkit'
import mesReducer from './messagesSlice'
import modalToggleReducer from './modalToggleSlice'
import monthTabSlice from './monthTabSlice'
import themeToggleReducer from './themeToggleSlice'
export const store = configureStore({
    reducer:{
        mes:mesReducer,
        modalToggle: modalToggleReducer,
        monthTab: monthTabSlice,
        themeToggle: themeToggleReducer
    }
})