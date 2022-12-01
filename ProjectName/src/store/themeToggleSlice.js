import{ createSlice} from'@reduxjs/toolkit';
export const themeToggle = createSlice({
    name:'themeToggle',
    initialState: {scheme: 'light'},
    reducers:{
        isDarkMode:(state, action) => 
        {
           
            state.scheme = action.payload.scheme}
    }
})
export const {isDarkMode} = themeToggle.actions;
export default themeToggle.reducer