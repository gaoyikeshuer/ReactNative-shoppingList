import {configureStore} from '@reduxjs/toolkit'
import mesReducer from './messageSlice'
import modalToggleReducer from './modalToggleSlice'
export const store = configureStore({
    reducer:{
        mes:mesReducer,
        modalToggle: modalToggleReducer
    }
})