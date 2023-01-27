import {deleteMessage, messagesSelector} from './messages.slice';
import {useAppDispatch, useAppSelector} from '../hooks';

export const useMessages = () => {
  const messages = useAppSelector(messagesSelector);
  const dispatch = useAppDispatch();
  const deleteMesAction = dispatch(deleteMessage);

  return {
    messages,
    deleteMesAction,
  };
};
