import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { CardHeader, Avatar, Icon, Typography } from '@material-ui/core';

import FavoriteButton from './FavoriteButton.jsx';
import CityTitle from './CityTitle.jsx';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    background: theme.palette.secondary.dark,
  },
}));

const WeatherCardHeader = ({ data, city }) => {
  const system = 'Metric';
  //const system = 'Imperial';
  const { Temperature } = data;
  const { Value } = Temperature[system];

  const classes = useStyles();
  const symbols = { Metric: '℃', Imperial: '°F' };

  return (
    <CardHeader
      avatar={<Avatar alt={city.name} src="" className={classes.large}>
        <Icon color="inherit" fontSize="large">wb_sunny</Icon></Avatar>}
      action={<FavoriteButton city={city} />}
      title={<CityTitle title={city} />}
      subheader={<Typography variant="h4" color="textSecondary">{Value} {symbols[system]}</Typography>}
    />
  )
}

export default WeatherCardHeader;