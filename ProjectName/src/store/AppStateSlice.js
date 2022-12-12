import { createSlice } from "@reduxjs/toolkit";
export const AppState = createSlice({
    name:'AppState',
    initialState: {active: false},
    reducers:{
        AppStateActive:(state) => {state.active = !state.active}
    }
})
export const {AppStateActive} = AppState.actions;
export default AppState.reducer