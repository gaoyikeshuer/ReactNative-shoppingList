import { configureStore}  from '@reduxjs/toolkit'
import mesReducer from './messagesSlice'
import modalToggleReducer from './modalToggleSlice'
export const store = configureStore({
    reducer:{
        mes:mesReducer,
        modalToggle: modalToggleReducer
    }
})