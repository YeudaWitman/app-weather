import React from 'react';
import { Menu, MenuItem, Collapse } from '@material-ui/core';

import ClearFavorites from './ClearFavorites.jsx';
import DarkMode from './DarkMode.jsx';
import SetScaleMethod from './SetScaleMethod.jsx';
import ScaleMenu from './ScaleSwitch.jsx';

const SettingsMenu = props => {
  const transObj = {
    vertical: 'top',
    horizontal: 'right',
  };

  const [open, setOpen] = React.useState(false);

  const handleOpenScaleMenu = () => {
    setOpen(!open);
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
        <DarkMode handleClose={props.handleClose} />
      </MenuItem>
      <ClearFavorites handleClose={props.handleClose} />

      <SetScaleMethod handleClick={handleOpenScaleMenu} handleClose={props.handleClose} />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ScaleMenu handleClose={props.handleClose} />
      </Collapse>
    </Menu>
  )
}

export default SettingsMenu;