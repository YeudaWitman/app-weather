import React from 'react';
import { CardActions, Tooltip, Typography, Grid, IconButton, Icon } from '@material-ui/core';

const WeatherCardFooter = ({ lastUpdate }) => {
  return (
    <CardActions disableSpacing>
      <Grid container justify="center" alignItems="center">

        <Grid item xs={1}>
          <Tooltip title="more options" interactive >
            <IconButton aria-label="menu">
              <Icon>more_vert</Icon>
            </IconButton>
          </Tooltip>
        </Grid>

        <Grid container item xs justify="center" alignItems="center">
          <Typography variant="subtitle1" color="textSecondary">
            Last update: {lastUpdate}
          </Typography>

        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </CardActions>
  )
}

export default WeatherCardFooter;