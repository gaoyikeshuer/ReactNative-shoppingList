import {useAppDispatch, useAppSelector} from '../hooks';
import {isModalActiveSelector, toggleActive} from './modalToggleSlice';

export const useModalToggle = () => {
  const isModalActiveState = useAppSelector(isModalActiveSelector);
  const dispatch = useAppDispatch();
  const toggleActiveAction = dispatch(toggleActive);
  return {
    isModalActiveState,
    toggleActiveAction,
  };
};
