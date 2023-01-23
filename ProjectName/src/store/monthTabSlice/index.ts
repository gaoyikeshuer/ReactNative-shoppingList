import {useAppDispatch, useAppSelector} from '../hooks';
import {changeMonth, monthSelector} from './monthtab.slice';

export const useMonthTab = () => {
  const monthState = useAppSelector(monthSelector);
  const dispatch = useAppDispatch();
  const changeMonthAction = dispatch(changeMonth);
  return {
    monthState,
    changeMonthAction,
  };
};
