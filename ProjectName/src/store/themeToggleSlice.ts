import{ createSlice} from'@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface ThemeState{
    scheme: string
}

const initialState: ThemeState = {
    scheme:'light'
}

export const themeToggle = createSlice({
    name:'themeToggle',
    initialState,
    reducers:{
        isDarkMode:(state, action) => 
        {
           
            state.scheme = action.payload.scheme}
    }
})
export const {isDarkMode} = themeToggle.actions;
export default themeToggle.reducer