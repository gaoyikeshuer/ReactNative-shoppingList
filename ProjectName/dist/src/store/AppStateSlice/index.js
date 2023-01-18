'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.useAppState = void 0;
const hooks_1 = require('../hooks');
const AppStateSlice_1 = require('./AppStateSlice');
const useAppState = () => {
  const isAppActiveState = (0, hooks_1.useAppSelector)(
    AppStateSlice_1.isAppActiveSelector,
  );
  const dispatch = (0, hooks_1.useAppDispatch)();
  const appStateAction = dispatch(AppStateSlice_1.AppStateActive);
  return {
    isAppActiveState,
    appStateAction,
  };
};
exports.useAppState = useAppState;
//# sourceMappingURL=index.js.map
