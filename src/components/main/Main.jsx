import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Home from './home/Home.jsx';
import Favorites from './favorites/Favorites.jsx';
import NotFound from './NotFound.jsx';
import SearchField from './home/searchField/SearchField.jsx';


const Main = () => {
  return (
    <Container maxWidth="lg">
      <SearchField />
      <Switch>
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/" component={Home} />
        <Route path="/:key" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Container>
  )
}

export default Main;