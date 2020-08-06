import React from 'react';
import { MenuItem, Grid, Switch, Tooltip } from '@material-ui/core';

import WeatherToast from '../../common/WeatherToast.jsx';
const ScaleSwitch = props => {

  const handleChangeScale = (event) => {
    props.handleClose();
  }

  return (
    <MenuItem>
      <Tooltip title="experimental" interactive >
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>°F</Grid>
          <Grid item>
            <Switch checked={true} onChange={handleChangeScale} name="scale-switch" />
          </Grid>
          <Grid item>℃</Grid>
        </Grid>
      </Tooltip>
      {/* <WeatherToast handleClose={handleCloseToast} toast={toast} /> */}
    </MenuItem>
  )
}

export default ScaleSwitch;