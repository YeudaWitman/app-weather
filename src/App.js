import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import HeaderBar from './components/header/HeaderBar.jsx';
import Main from './components/main/Main.jsx';
import Theme from './components/Theme.jsx';

const App = () => {

  return (
		<BrowserRouter >
      <Theme>
        <CssBaseline/>
        <HeaderBar />
        <Main />
      </Theme>
		</BrowserRouter>
  );
}

export default App;