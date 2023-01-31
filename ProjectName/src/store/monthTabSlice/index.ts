import {changeMonth, monthSelector} from './monthtab.slice';
import {useAppDispatch, useAppSelector} from '../hooks';

export const useMonthTab = () => {
  const monthState = useAppSelector(monthSelector);
  const dispatch = useAppDispatch();
  const changeMonthAction = dispatch(changeMonth);

  return {
    monthState,
    changeMonthAction,
  };
};
