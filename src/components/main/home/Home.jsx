import React, { useEffect } from 'react';
import axios from 'axios';
import * as moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { LinearProgress, Card, Grid, CardActions, Container, Typography } from '@material-ui/core';

import WeatherCardContent from './card/WeatherCardContent.jsx';
import WeatherCardHeader from './card/WeatherCardHeader.jsx';
import * as actions from '../../../redux/actions';

const API_KEY = process.env.REACT_APP_API_KEY;
const CURRENT_DEVELOP_API = 'https://my-json-server.typicode.com/YeudaWitman/currentCondition/data';

const Home = ({ match }) => {
  const { currentCity } = useSelector(state => state);
  const data = currentCity.data[0];
  const { city } = currentCity;

  const dispatch = useDispatch();
  const lastUpdate = moment().format("ddd, h:mA");
  const cityKey = match.params.key ? match.params.key : '215854';
  const CURRENT_CONDITION_API = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API_KEY}`;

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
  }, [city]);



  if (currentCity.pending) {
    return (
      <LinearProgress />
    )
  } else {
    return (
      <Container>
        <Card>
          <WeatherCardHeader data={data} city={city} />
          <WeatherCardContent title={city.WeatherText} />
          <CardActions>
            <Grid container justify="center" alignItems="center" item xs={12}>
              <Typography variant="subtitle1" color="textSecondary">
                Last update: {lastUpdate} [{cityKey}]{city.key}
              </Typography>
            </Grid>
          </CardActions>
        </Card>
      </Container>
    )
  }
}

export default Home;