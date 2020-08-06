import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControlLabel, MenuItem, IconButton, Icon } from '@material-ui/core';

import * as actions from '../../redux/actions';
import WeatherToast from '../../common/WeatherToast';
import { FAVORITES } from '../../common';
import { handleCloseToast } from '../../services';

const ClearFavorites = ({ handleClose }) => {
  const dispatch = useDispatch();
  const toast = useSelector(state => state.toast);

  const handleClear = () => {
    if (localStorage.getItem(FAVORITES)) {
      localStorage.removeItem(FAVORITES);
      dispatch(actions.openToast('favorites deleted!'));
      dispatch(actions.removeFromFavorites([]));
      return;
    }
    handleClose();
    dispatch(actions.openToast('There no stored favorites'));
  }

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
      <WeatherToast handleClose={() => handleCloseToast(dispatch)} toast={toast} />
    </MenuItem>
  )
}

export default ClearFavorites;