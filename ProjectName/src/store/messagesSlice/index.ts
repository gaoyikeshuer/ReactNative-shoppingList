import {useAppDispatch, useAppSelector} from '../hooks';
import {deleteMes, MessagesSelector} from './messages.slice';

export const useMessages = () => {
  const MessagesState = useAppSelector(MessagesSelector);
  const dispatch = useAppDispatch();
  const deleteMesAction = dispatch(deleteMes);
  return {
    MessagesState,
    deleteMesAction,
  };
};
