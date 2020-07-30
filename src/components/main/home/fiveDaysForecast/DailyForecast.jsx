import React from 'react';
import * as moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(2, 0, 0, 0),
    margin: theme.spacing(0, 0),
    textAlign: 'center',
    background: '#274754'
  },
  innerPaper: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(3, 0, 4, 0),
    textAlign: 'center',
    background: '#2D5362'
  },
}));

const DailyForecast = ({daily}) => {
  const metric = true;
  const classes = useStyles();
  const celsiusSymbol = '℃';
  const day = moment.unix(daily.EpochDate);

  return (
    <Grid item xs={12} sm >
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h5" color="textSecondary">
            {day.format('dddd')}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
            {day.format('DD MMM')}
        </Typography>
        <Paper className={classes.innerPaper} elevation={1}>
          <Typography variant="h6" color="secondary">
              {daily.Temperature.Maximum.Value}{celsiusSymbol}
          </Typography>
          <Typography variant="subtitle1" color="secondary">
              {daily.Day.IconPhrase}
          </Typography>
        </Paper>
      </Paper>
    </Grid>
  )
}

export default DailyForecast;