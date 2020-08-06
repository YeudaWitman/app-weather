import React from 'react';
import { MenuItem, FormControlLabel, IconButton, Icon, Tooltip, Menu, Grid, Switch } from '@material-ui/core';
import WeatherToast from '../../common/WeatherToast';

const SetScaleMethod = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const transObj = {
    vertical: 'top',
    horizontal: 'right',
  };

  return (
    <MenuItem >
      <Tooltip title="experimental" interactive >
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

      </Tooltip>
      {/* <WeatherToast handleClose={handleCloseToast} toast={toast} /> */}
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={transObj}
        keepMounted
        transformOrigin={transObj}
        open={open}
        onClose={handleClose}
      >
        <MenuItem>
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>°F</Grid>
            <Grid item>
              <Switch checked={true} onChange={null} name="scale-switch" />
            </Grid>
            <Grid item>℃</Grid>
          </Grid>
        </MenuItem>
      </Menu>
    </MenuItem>
  )
}

export default SetScaleMethod;