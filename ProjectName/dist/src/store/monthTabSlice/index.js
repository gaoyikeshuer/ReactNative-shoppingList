'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.useMonthTab = void 0;
const hooks_1 = require('../hooks');
const monthTabSlice_1 = require('./monthTabSlice');
const useMonthTab = () => {
  const monthState = (0, hooks_1.useAppSelector)(monthTabSlice_1.monthSelector);
  const dispatch = (0, hooks_1.useAppDispatch)();
  const changeMonthAction = dispatch(monthTabSlice_1.changeMonth);
  return {
    monthState,
    changeMonthAction,
  };
};
exports.useMonthTab = useMonthTab;
//# sourceMappingURL=index.js.map
