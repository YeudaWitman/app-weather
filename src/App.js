import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import { checkLocalStorage } from './sevices/manageLocalStrage'

import HeaderBar from './components/header';
import Main from './components/main';
import Theme from './components/Theme.jsx';

const App = () => {

  const isDarkMode = useSelector(state => state.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    checkLocalStorage(dispatch);
  }, [isDarkMode, dispatch]);

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