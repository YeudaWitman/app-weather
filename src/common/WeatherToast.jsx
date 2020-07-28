import React from 'react';
import { Snackbar, IconButton, Icon } from '@material-ui/core';

const WeatherToast = (props) => {
  const { handleClose, toast } = props;
  return (
    <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    open={toast.open}
    autoHideDuration={6000}
    onClose={handleClose}
    message={toast.msg}
    action={
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <Icon fontSize="small" >close</Icon>
      </IconButton>
    }
    />
  )
}

export default WeatherToast;