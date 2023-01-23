import {useAppDispatch, useAppSelector} from '../hooks';
import {isDarkMode, isDarkModeSelector} from './themetoggle.slice';

export const useThemeToggle = () => {
  const isDarkModeState = useAppSelector(isDarkModeSelector);
  const dispatch = useAppDispatch();
  const isDarkModeAction = dispatch(isDarkMode);
  
  return {
    isDarkModeState,
    isDarkModeAction,
  };
};
