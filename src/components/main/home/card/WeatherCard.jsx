import React, { useEffect } from 'react';
import axios from 'axios';
import * as moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { LinearProgress, Card, Grid, CardActions, Container, Typography } from '@material-ui/core';

import WeatherCardContent from './WeatherCardContent.jsx';
import WeatherCardHeader from './WeatherCardHeader.jsx';
import * as actions from '../../../../redux/actions';

const API_KEY = process.env.API_KEY;;
const CURRENT_DEVELOP_API = 'https://my-json-server.typicode.com/YeudaWitman/currentCondition/data';

const WeatherCard = ({cityKey}) => {

  const CURRENT_CONDITION_API = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API_KEY}`;
  
  const currentState = useSelector(state => state.currentData);
  const currentData  = currentState.data;
  const dispatch = useDispatch();
  let lastUpdate = moment().format("ddd, h:mA");

  useEffect(() => {
    const fetchCurrentWeather = () => {
      dispatch(actions.fetchDataPending());
      axios.get(CURRENT_DEVELOP_API)
      .then((response) => {
        dispatch(actions.fetchDataSuccess(response.data));
      })
      .catch((error) => {
        dispatch(actions.fetchDataError(error));
      })
    }
    fetchCurrentWeather();
  }, [dispatch]);

  if(currentState.pending) {
    return (
      <LinearProgress />
    )
  } else {
    return (
      <Container>
        <Card>
          <WeatherCardHeader data={currentData} />
          <WeatherCardContent title={currentData.WeatherText} />
          <CardActions>
          <Grid container justify="center" alignItems="center" item xs={12}>
            <Typography variant="subtitle1" color="textSecondary">
              Last update: {lastUpdate}
            </Typography>
          </Grid>
          </CardActions>
        </Card>
      </Container>
    )
  }
}

export default WeatherCard;