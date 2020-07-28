import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControlLabel, MenuItem, IconButton, Icon } from '@material-ui/core';

import * as actions from '../../redux/actions';
import WeatherToast from '../../common/WeatherToast';
import { FAVORITES } from '../../common';

const ClearFavorites = () => {
  const dispatch = useDispatch();
  const toast = useSelector(state => state.toast);

  const handleClear = () => {
    if(localStorage.getItem(FAVORITES)) {
      localStorage.removeItem(FAVORITES);
      dispatch(actions.openToast('favorites deleted!'));
    }
    dispatch(actions.openToast('There no stored favorites'));
  }

  const handleCloseToast = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(actions.closeToast());
  };

  return (
    <MenuItem>
      <FormControlLabel
        control={
          <IconButton 
            variant="contained"
            onClick={handleClear}
            name="clear-favorites"
            ><Icon color="secondary">delete</Icon></IconButton>
        }
        label="Clear favorites"
      />
      <WeatherToast handleClose={handleCloseToast} toast={toast} />
    </MenuItem>

  )
}

export default ClearFavorites;