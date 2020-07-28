import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { MuiThemeProvider } from "@material-ui/core/styles";

import * as actions from '../redux/actions';
import themes from '../common/themes';

const Theme = ({ children })  => {

  const dispatch = useDispatch();

  const checkLocalStorage = () => {
    if(localStorage.getItem('dark-mode')) {
      let darkMode = JSON.parse(localStorage.getItem('dark-mode'));
      dispatch(actions.darkMode(darkMode));
    }
  }

  useEffect(() => {
    checkLocalStorage();
  });

  const isDarkMode = useSelector(state => state.darkMode);
  return (
    <MuiThemeProvider children={children} 
      theme={isDarkMode ? themes.themeDark : themes.themeLight}>
    </MuiThemeProvider>
    );
}

export default Theme;