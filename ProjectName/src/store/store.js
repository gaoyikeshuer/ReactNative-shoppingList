import { configureStore}  from '@reduxjs/toolkit'
import mesReducer from './messagesSlice'
import modalToggleReducer from './modalToggleSlice'
import monthTabSlice from './monthTabSlice'
export const store = configureStore({
    reducer:{
        mes:mesReducer,
        modalToggle: modalToggleReducer,
        monthTab: monthTabSlice
    }
})