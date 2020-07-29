import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { MuiThemeProvider } from "@material-ui/core/styles";

import * as actions from '../redux/actions';
import { DARK_MODE, FAVORITES } from '../common'
import themes from '../common/themes';

const Theme = ({ children }) => {
  const isDarkMode = useSelector(state => state.darkMode);
  const dispatch = useDispatch();

  const checkLocalStorage = () => {
    if (localStorage.getItem(DARK_MODE)) {
      let darkMode = JSON.parse(localStorage.getItem(DARK_MODE));
      dispatch(actions.darkMode(darkMode));
    }
    if (localStorage.getItem(FAVORITES)) {
      let favorites = JSON.parse(localStorage.getItem(FAVORITES));
      console.log(favorites);
      dispatch(actions.darkMode(favorites));
    }
  }

  useEffect(() => {
    checkLocalStorage();
  });


  return (
    <MuiThemeProvider children={children}
      theme={isDarkMode ? themes.themeDark : themes.themeLight}>
    </MuiThemeProvider>
  );
}

export default Theme;