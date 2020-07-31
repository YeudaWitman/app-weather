import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';

import ClearFavorites from './ClearFavorites.jsx';
import DarkMode from './DarkMode.jsx';
import SetScaleMethod from './SetScaleMethod.jsx';

const SettingsMenu = props => {
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
      <MenuItem disabled>
        Settings
      </MenuItem>
      <MenuItem>
        <DarkMode />
      </MenuItem>
      <ClearFavorites />
      <SetScaleMethod />
    </Menu>
  )
}

export default SettingsMenu;