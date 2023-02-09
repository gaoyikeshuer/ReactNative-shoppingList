import * as React from 'react';
import { ThemeProviderTypes } from './theme.types';
import ThemeContext from './ThemeContext';

const ThemeProvider: React.FC<ThemeProviderTypes> = ({ value, children }) => (
  <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
);

export default ThemeProvider;
