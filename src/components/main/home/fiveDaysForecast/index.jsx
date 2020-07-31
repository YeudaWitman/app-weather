import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import { fetchData } from '../../../../sevices/fetchData'
import DailyForecast from './DailyForecast.jsx';
import ErrorMassage from '../../ErrorMassage.jsx';

const FiveDaysForecast = ({ city }) => {

  const { key } = city;
  const currentState = useSelector(state => state.fiveDaysData);
  const dailyForecasts = currentState.data;
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData.fiveDaysWeather(dispatch, key);
  }, [dispatch, key]);

  if (currentState.pending) {
    return <CircularProgress />;
  } else if (currentState.error) {
    return <ErrorMassage />;
  } else {
    return dailyForecasts.map((day, i) => <DailyForecast key={i} daily={day} />);
  }
}

export default FiveDaysForecast;