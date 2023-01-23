import {useAppDispatch, useAppSelector} from '../hooks';
import {deleteMessage, messagesSelector} from './messages.slice';

export const useMessages = () => {
  const messages = useAppSelector(messagesSelector);
  const dispatch = useAppDispatch();
  const deleteMesAction = dispatch(deleteMessage);
  
  return {
    messages,
    deleteMesAction,
  };
};
