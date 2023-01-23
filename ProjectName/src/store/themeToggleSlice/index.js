'use strict';
exports.__esModule = true;
exports.useThemeToggle = void 0;
var hooks_1 = require('../hooks');
var themetoggle_slice_1 = require('./themetoggle.slice');
var useThemeToggle = function () {
  var isDarkModeState = (0, hooks_1.useAppSelector)(
    themetoggle_slice_1.isDarkModeSelector,
  );
  var dispatch = (0, hooks_1.useAppDispatch)();
  var isDarkModeAction = dispatch(themetoggle_slice_1.isDarkMode);
  return {
    isDarkModeState: isDarkModeState,
    isDarkModeAction: isDarkModeAction,
  };
};
exports.useThemeToggle = useThemeToggle;
