import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { CardHeader, Avatar, Typography } from '@material-ui/core';

import FavoriteButton from './FavoriteButton.jsx';
import CityTitle from './CityTitle.jsx';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    background: theme.palette.secondary.dark
  },
}));

const WeatherCardHeader = props => {
  const {Temperature} = props.data;
  const {Value} = Temperature.Metric

  const data = {
    LocalizedName: 'Tel Aviv',
    Country: {
      LocalizedName: 'Israel'
    }
  };
  
  const classes = useStyles();
  const celsiusSymbol = '℃';
  
  return (
    <CardHeader 
    avatar={<Avatar alt="Remy Sharp" src="" className={classes.large}>SUN</Avatar>}
    action={<FavoriteButton city={data} />}
    title={<CityTitle title={data} />}
    subheader={<Typography color="textSecondary">{Value} {celsiusSymbol}</Typography>} 
    />
  )
}

export default WeatherCardHeader;