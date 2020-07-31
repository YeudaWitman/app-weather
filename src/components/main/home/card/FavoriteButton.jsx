import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Tooltip, Icon, IconButton } from '@material-ui/core';

import WeatherToast from '../../../../common/WeatherToast.jsx';
import * as actions from '../../../../redux/actions';
import { favorites } from '../../../../sevices/manageLocalStrage'

const FavoriteButton = ({ city }) => {

  const dispatch = useDispatch();
  const isFavorite = useSelector(state => state.favorites.find(favCity => favCity.key === city.key));
  const toast = useSelector(state => state.toast);

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
      handle: favorites.add
    },
    remove: {
      color: 'secondary',
      icon: 'favorite',
      text: 'Remove from favorites',
      handle: favorites.remove
    }
  };

  const fav = isFavorite ? 'remove' : 'add';
  const favButton = option[fav];
  return (
    <Box display="flex" padding={2}>
      <Tooltip title={favButton.text} interactive >
        <IconButton onClick={() => favButton.handle(dispatch, city)} color={favButton.color}>
          <Icon fontSize="large" color={favButton.color}>{favButton.icon}</Icon>
        </IconButton>
      </Tooltip>
      <WeatherToast handleClose={handleCloseToast} toast={toast} />
    </Box>
  );
}

export default FavoriteButton;