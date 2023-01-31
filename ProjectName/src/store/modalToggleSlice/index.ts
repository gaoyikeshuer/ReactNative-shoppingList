import {isModalActiveSelector, toggleActive} from './modaltoggle.slice';
import {useAppDispatch, useAppSelector} from '../hooks';

export const useModalToggle = () => {
  const isModalActiveState = useAppSelector(isModalActiveSelector);
  const dispatch = useAppDispatch();
  const toggleActiveAction = dispatch(toggleActive);

  return {
    isModalActiveState,
    toggleActiveAction,
  };
};
