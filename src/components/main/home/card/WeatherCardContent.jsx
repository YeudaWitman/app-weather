import React from 'react';
import { Grid, CardContent, Typography } from '@material-ui/core';

import FiveDaysForecast from '../fiveDaysForecast';

const WeatherCardContent = ({ title, city }) => {
  return (
    <CardContent>
      <Grid container justify="center" alignItems="center" spacing={1}>
        <Grid container justify="center" alignItems="center" item xs={12}>
          <Typography variant="h2" color="secondary">
            {title}
          </Typography>
        </Grid>
        <FiveDaysForecast city={city} />
      </Grid>
    </CardContent>
  )
}

export default WeatherCardContent;