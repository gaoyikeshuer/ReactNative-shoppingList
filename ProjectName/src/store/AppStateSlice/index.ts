import {useAppDispatch, useAppSelector} from '../hooks';
import {AppStateActive, isAppActiveSelector} from './appstate.slice';

export const useAppState = () => {
  const isAppActiveState = useAppSelector(isAppActiveSelector);
  const dispatch = useAppDispatch();
  const appStateAction = dispatch(AppStateActive);
  return {
    isAppActiveState,
    appStateAction,
  };
};
