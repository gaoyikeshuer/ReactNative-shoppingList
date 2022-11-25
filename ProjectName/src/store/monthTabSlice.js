import{ createSlice} from '@reduxjs/toolkit';
export const monthTabSlice = createSlice({
    name: 'monthTab',
    initialState:{item: null},
    reducers:{
        changeMonth:(state, action) =>{
     
            state.item = action.payload.item
        }
    }
})
export const {changeMonth} = monthTabSlice.actions
export default monthTabSlice.reducer;