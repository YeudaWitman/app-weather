import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import * as actions from './redux/actions';
import { DARK_MODE, FAVORITES } from './common'

import HeaderBar from './components/header/HeaderBar.jsx';
import Main from './components/main';
import Theme from './components/Theme.jsx';

const App = () => {

  const isDarkMode = useSelector(state => state.darkMode);
  const dispatch = useDispatch();

  const checkLocalStorage = () => {
    if (localStorage.getItem(DARK_MODE)) {
      let darkMode = JSON.parse(localStorage.getItem(DARK_MODE));
      dispatch(actions.darkMode(darkMode));
    }
    if (localStorage.getItem(FAVORITES)) {
      let favorites = JSON.parse(localStorage.getItem(FAVORITES));
      dispatch(actions.addToFavorites(favorites));
    }
  }

  useEffect(() => {
    checkLocalStorage();
  });

  return (
    <BrowserRouter >
      <Theme dark={isDarkMode} >
        <CssBaseline />
        <HeaderBar />
        <Main />
      </Theme>
    </BrowserRouter>
  );
}

export default App;