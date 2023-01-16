import{ createSlice} from'@reduxjs/toolkit';
export const modalToggle = createSlice({
    name:'modalToggle',
    initialState: {active: false},
    reducers:{
        toggleActive:(state) => {state.active = !state.active}
    }
})
export const {toggleActive} = modalToggle.actions;
export default modalToggle.reducer