import React, { useEffect } from 'react';
import * as moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { LinearProgress, Card, Container } from '@material-ui/core';

import { fetchData } from '../../../services/fetchData';

import WeatherCardContent from './card/WeatherCardContent.jsx';
import WeatherCardHeader from './card/WeatherCardHeader.jsx';
import WeatherCardFooter from './card/WeatherCardFooter.jsx';
import ErrorMassage from '../ErrorMassage.jsx';

const changeAppTitle = (name) => {
  document.title = `Wheather in ${name}`;
}

const Home = ({ match }) => {
  const { currentCity } = useSelector(state => state);
  const data = currentCity.data[0];
  const { city } = currentCity;

  const dispatch = useDispatch();

  const cityKey = match.params.key ? match.params.key : '215854';

  useEffect(() => {
    fetchData.currentWeather(dispatch, cityKey);
    changeAppTitle(city.name);
  }, [dispatch, cityKey, city]);


  if (currentCity.pending) {
    return <LinearProgress />;
  } else if (currentCity.error) {
    return <ErrorMassage />;
  } else {
    return (
      <Container>
        <Card>
          <WeatherCardHeader data={data} city={city} />
          <WeatherCardContent city={city} title={city.WeatherText} />
          <WeatherCardFooter lastUpdate={moment(data.EpochTime).format("ddd, h:mA")} />
        </Card>
      </Container>
    )
  }
}

export default Home;