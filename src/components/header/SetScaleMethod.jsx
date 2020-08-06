import React from 'react';
import { MenuItem, FormControlLabel, IconButton, Icon } from '@material-ui/core';

const SetScaleMethod = props => {

  const handleMenu = (event) => {
    props.handleClick();
  };


  return (
    <MenuItem >
      <FormControlLabel
        control={
          <IconButton
            variant="contained"
            onClick={handleMenu}
            name="Set-scale-method"
          >
            <Icon color="secondary">speed</Icon>
          </IconButton>
        }
        label="Set scale method"
      />
    </MenuItem>
  )
}

export default SetScaleMethod;