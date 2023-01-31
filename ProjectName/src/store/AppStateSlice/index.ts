import {AppStateActive, isAppActiveSelector} from './appstate.slice';
import {useAppDispatch, useAppSelector} from '../hooks';

export const useAppState = () => {
  const isAppActiveState = useAppSelector(isAppActiveSelector);
  const dispatch = useAppDispatch();
  const appStateAction = dispatch(AppStateActive);
  return {
    isAppActiveState,
    appStateAction,
  };
};
