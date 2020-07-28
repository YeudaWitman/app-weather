import React from 'react';
import { Grid, CardContent,  Typography} from '@material-ui/core';

import FiveDaysForecast from './fiveDaysForecast/FiveDaysForecast.jsx';

const WeatherCardContent = ({title}) => {
  return (
    <CardContent>
      <Grid container justify="center" alignItems="center" spacing={1}>
        <Grid container justify="center" alignItems="center" item xs={12}>
          <Typography variant="h2" color="secondary">
            {title}
          </Typography>
        </Grid>
        <FiveDaysForecast />
      </Grid>
    </CardContent>
  )
}

export default WeatherCardContent;