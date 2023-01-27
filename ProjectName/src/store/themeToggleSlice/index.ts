import {isDarkMode, isDarkModeSelector} from './themetoggle.slice';
import {useAppDispatch, useAppSelector} from '../hooks';

export const useThemeToggle = () => {
  const isDarkModeState = useAppSelector(isDarkModeSelector);
  const dispatch = useAppDispatch();
  const isDarkModeAction = dispatch(isDarkMode);

  return {
    isDarkModeState,
    isDarkModeAction,
  };
};
