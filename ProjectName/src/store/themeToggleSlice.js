import{ createSlice} from'@reduxjs/toolkit';
export const themeToggle = createSlice({
    name:'themeToggle',
    initialState: {scheme: 'dark'},
    reducers:{
        isDarkMode:(state, action) => 
        {
            console.log(action.payload.scheme)
            state.scheme = action.payload.scheme}
    }
})
export const {isDarkMode} = themeToggle.actions;
export default themeToggle.reducer