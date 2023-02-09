import * as React from 'react';

import type { Theme } from './theme.types';
import DefaultTheme from './DefaultTheme';

const ThemeContext = React.createContext<Theme>(DefaultTheme);

export default ThemeContext;
