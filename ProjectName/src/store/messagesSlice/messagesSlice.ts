import {createSlice} from '@reduxjs/toolkit';
import {Message} from '../../types/Message';
import {RootState} from '../store';

const initialState: Message[] = [
  {
    id: 1,
    text: 'We are continuing to improve your new iBB service, and it will be unavailable on Friday 7th September from 17:00 until 19:00.',
  },
  {
    id: 2,
    text: 'There has been a recent rise in text messages asking users for their login details. At AIB, we will never ask you for your password or PIN code.',
  },
  {id: 3, text: 'Hello'},
];

export const messageSlice = createSlice({
  name: 'mes',
  initialState,
  reducers: {
    deleteMes: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
  },
});
export const {deleteMes} = messageSlice.actions;
export const MessagesSelector = (state: RootState) => state.mes;
export default messageSlice.reducer;
