import{ createSlice} from '@reduxjs/toolkit';

interface month{
    item:number | object;

}
const initialState:month ={
    item:0
}
export const monthTabSlice = createSlice({
    name: 'monthTab',
    initialState,
    reducers:{
        changeMonth:(state, action) =>{
     
            state.item = action.payload?.item.month
        }
    }
})
export const {changeMonth} = monthTabSlice.actions
export default monthTabSlice.reducer;