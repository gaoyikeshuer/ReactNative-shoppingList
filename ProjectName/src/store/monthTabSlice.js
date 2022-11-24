import{ createSlice} from '@reduxjs/toolkit';
export const monthTabSlice = createSlice({
    name: 'monthTab',
    initialState:{month:0},
    reducers:{
        changeMonth:(state, action) =>{
            state.month = action.payload.month
        }
    }
})
export const {changeMonth} = monthTabSlice.actions
export default monthTabSlice.reducer;