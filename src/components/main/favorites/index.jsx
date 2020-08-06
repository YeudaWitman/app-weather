import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Box, Typography } from '@material-ui/core';

import FavoriteItem from './FavoriteItem.jsx';

import { checkLocalStorage } from '../../../services/manageLocalStrage';

const Favorites = () => {

  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);

  useEffect(() => {
    checkLocalStorage.favorites(dispatch);
  }, [dispatch]);

  return (
    <Grid container justify="center" alignItems="center" spacing={1}>
      <Grid container justify="center" alignItems="center" item xs={12}>
        {(favorites.length < 1) ?
          <Box>
            <Typography variant="h3" align="center">No Favorites Cities Yet</Typography>
            <Typography variant="h6" align="center">Cities you mark as favorite are shown here</Typography>
          </Box>
          :
          <Typography variant="h4" align="center">Your Favorites cities</Typography>
        }
      </Grid>
      {favorites.map(item => <FavoriteItem key={item.key} data={item} />)}
    </Grid>
  )
}

export default Favorites;