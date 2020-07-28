import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Switch, Menu, FormControlLabel, MenuItem } from '@material-ui/core';

import * as actions from '../../redux/actions';
import { DARK_MODE } from '../../common';
import DarkModeIcon from './DarkModeIcon.jsx';
import ClearFavorites from './ClearFavorites.jsx';

const SettingsMenu = props => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.darkMode);

  const handleDarkMode = (e) => {
    let checked = e.target.checked;
    dispatch(actions.darkMode(checked));
    localStorage.setItem(DARK_MODE, checked);
  }

  const transObj = {
    vertical: 'top',
    horizontal: 'right',
  };

  return (
    <Menu
      anchorEl={props.anchorEl}
      anchorOrigin={transObj}
      keepMounted
      transformOrigin={transObj}
      open={props.open}
      onClose={props.handleClose}
      >
      <MenuItem>
        <FormControlLabel
          control={
            <Switch
              checked={isDarkMode}
              onChange={(e) => handleDarkMode(e)}
              color="secondary"
              name="dark-mode"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          }
          label="Dark Mode"
        />
        <DarkModeIcon dark={isDarkMode} />
      </MenuItem>
      <ClearFavorites />
    </Menu>
  )
}

export default SettingsMenu;