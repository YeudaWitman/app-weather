import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Home from './home/Home.jsx';
import Favorites from './favorites/Favorites.jsx';
import NotFound from './NotFound.jsx';


const Main = () => {
  return (
    <Container maxWidth="lg">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:key" component={Home} />
        <Route exact path="/favorites" component={Favorites} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Container>
  )
}

export default Main;