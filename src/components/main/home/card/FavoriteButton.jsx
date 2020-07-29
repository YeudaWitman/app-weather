import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Icon } from '@material-ui/core';
import { FAVORITES } from '../../../../common';

import * as actions from '../../../../redux/actions';

const FavoriteButton = ({ city }) => {

  const dispatch = useDispatch();
  const favList = useSelector(state => state.favorites);

  const isFavorite = favList.find(favCity => favCity.key === city.key);

  const handleAddToFavorites = () => {
    let tmp = [];
    if (localStorage.getItem(FAVORITES)) {
      tmp = JSON.parse(localStorage.getItem(FAVORITES));
    }
    console.log(tmp);
    tmp.push(city);
    console.log(tmp);
    dispatch(actions.addToFavorites(tmp));
    localStorage.setItem(FAVORITES, JSON.stringify(tmp));
  }

  const handleRemoveFromFavorites = () => {
    console.log(city);
  }

  const opt = {
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
      <Icon fontSize="large" color={opt[fav].color}>{opt[fav].icon}</Icon>
      <Button color="inherit" onClick={opt[fav].handle}>{opt[fav].text}</Button>
    </Box>
  );
}

export default FavoriteButton;