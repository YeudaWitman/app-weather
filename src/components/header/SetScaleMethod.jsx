import React from 'react';
import { MenuItem, FormControlLabel, IconButton, Icon, Tooltip } from '@material-ui/core';
import WeatherToast from '../../common/WeatherToast';

const SetScaleMethod = () => {
  return (
    <MenuItem>
      <Tooltip title="experimental" interactive >
        <FormControlLabel
          control={
            <IconButton
              variant="contained"
              // onClick={handleClear}
              name="Set-scale-method"
            >
              <Icon color="secondary">speed</Icon>
            </IconButton>
          }
          label="Set scale method"
        />

      </Tooltip>
      {/* <WeatherToast handleClose={handleCloseToast} toast={toast} /> */}
    </MenuItem>
  )
}

export default SetScaleMethod;