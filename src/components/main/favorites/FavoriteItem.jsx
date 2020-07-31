import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../../../redux/actions';
import { Grid, Typography, Paper, Button } from '@material-ui/core';

import { favStyles } from '../../../common/style';

const FavoriteItem = ({ data }) => {
  const classes = favStyles();
  const dispatch = useDispatch();

  const handleSelectCity = () => {
    dispatch(actions.setCurrentCity(data));
  }

  return (
    <Grid item xs={12} sm={6} md={3} xl={2} >
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h4">{data.name}</Typography>
        <Typography variant="h6">{data.country}</Typography>
        <Button className={classes.button} onClick={handleSelectCity} variant="outlined" component={NavLink} to={`/${data.key}`}>
          details
        </Button>
      </Paper>
    </Grid>
  )
}

export default FavoriteItem;