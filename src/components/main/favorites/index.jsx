import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';

import FavoriteItem from './FavoriteItem.jsx';
import * as actions from '../../../redux/actions';
import { FAVORITES } from '../../../common';

const Favorites = () => {

  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);

  useEffect(() => {
    const checkLocalStorage = () => {
      if (localStorage.getItem(FAVORITES)) {
        let favorites = JSON.parse(localStorage.getItem(FAVORITES));
        dispatch(actions.addToFavorites(favorites));
      }
    }

    checkLocalStorage();
  }, [dispatch]);

  return (
    <Grid container justify="center" alignItems="center" spacing={1}>
      <Grid container justify="center" alignItems="center" item xs={12}>
        <Typography variant="h4" color="secondary">
          Favorites
        </Typography>
      </Grid>
      {favorites.map(item => <FavoriteItem key={item.key} data={item} />)}
    </Grid>
  )
}

export default Favorites;