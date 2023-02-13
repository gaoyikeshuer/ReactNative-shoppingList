import * as React from 'react';

import ThemeContext from './ThemeContext';

const useTheme = () => React.useContext(ThemeContext);

export default useTheme;
