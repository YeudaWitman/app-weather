import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Icon, IconButton } from '@material-ui/core';

import WeatherToast from '../../../../common/WeatherToast.jsx';
import { FAVORITES } from '../../../../common';
import * as actions from '../../../../redux/actions';

const FavoriteButton = ({ city }) => {

  const dispatch = useDispatch();
  const isFavorite = useSelector(state => state.favorites.find(favCity => favCity.key === city.key));
  const toast = useSelector(state => state.toast);

  const handleAddToFavorites = () => {
    let tmp = [];
    if (localStorage.getItem(FAVORITES)) {
      tmp = JSON.parse(localStorage.getItem(FAVORITES));
    }
    tmp.push(city);
    dispatch(actions.addToFavorites(tmp));
    localStorage.setItem(FAVORITES, JSON.stringify(tmp));
    dispatch(actions.openToast(`${city.name} added to favorites`));
  }

  const handleRemoveFromFavorites = () => {
    let tmp = [];
    if (localStorage.getItem(FAVORITES)) {
      tmp = JSON.parse(localStorage.getItem(FAVORITES));
    }
    const index = tmp.map(e => e.key).indexOf(city.key);
    if (index > -1) {
      tmp.splice(index, 1);
    }
    dispatch(actions.removeFromFavorites(tmp));
    localStorage.setItem(FAVORITES, JSON.stringify(tmp));
    dispatch(actions.openToast(`${city.name} removed from favorites`));
  }

  const handleCloseToast = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(actions.closeToast());
  };

  const option = {
    add: {
      color: 'inherit',
      icon: 'favorite_border',
      text: 'Add to favorites',
      handle: handleAddToFavorites
    },
    remove: {
      color: 'secondary',
      icon: 'favorite',
      text: 'Remove from favorites',
      handle: handleRemoveFromFavorites
    }
  };

  const fav = isFavorite ? 'remove' : 'add';

  return (
    <Box display="flex" padding={2}>
      <Box display={{ xs: 'none', sm: 'block' }}>
        <Box display="inline" pt={2}>
          <Icon fontSize="large" color={option[fav].color}>{option[fav].icon}</Icon>
        </Box>
        <Button color="inherit" onClick={option[fav].handle}>{option[fav].text}</Button>
      </Box>
      <Box display={{ xs: 'block', sm: 'none' }}>
        <IconButton onClick={option[fav].handle} color={option[fav].color}>
          <Icon fontSize="large" color={option[fav].color}>{option[fav].icon}</Icon>
        </IconButton>
      </Box>
      <WeatherToast handleClose={handleCloseToast} toast={toast} />
    </Box>
  );
}

export default FavoriteButton;