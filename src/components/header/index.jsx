import React from 'react';

import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Icon, IconButton, Tooltip } from '@material-ui/core';

import SettingsMenu from './SettingsMenu.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const HeaderBar = () => {

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Weather App
          </Typography>
          <Tooltip title="Go to home page" interactive arrow>
            <Button component={NavLink} to={'/'} color="inherit">Home</Button>
          </Tooltip>
          <Tooltip title="Go to your favorites cities" interactive arrow>
            <Button component={NavLink} to={'/favorites'} color="inherit">Favorites</Button>
          </Tooltip>
          <Tooltip title="Settings" interactive arrow>
            <IconButton aria-label="settings" color="inherit" onClick={handleMenu}><Icon>settings</Icon></IconButton>
          </Tooltip>

          <SettingsMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HeaderBar;