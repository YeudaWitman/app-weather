import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';

import useStyles from './style';

const FavoriteItem = ({ data }) => {

  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={3} xl={2}>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h4">{data.name}</Typography>
        <Typography variant="h6">{data.country}</Typography>
      </Paper>
    </Grid>
  )
}

export default FavoriteItem;