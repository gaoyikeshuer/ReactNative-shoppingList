import React from "react";// why import * as React from 'React'
import ThemeContext from './ThemeContext';

const useTheme = () => React.useContext(ThemeContext); 

export default useTheme;