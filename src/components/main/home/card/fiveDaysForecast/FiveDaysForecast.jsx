import React, {useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import DailyForecast from './DailyForecast.jsx';
import * as actions from '../../../../../redux/actions';

const FIVE_DEVELOP_API = 'https://my-json-server.typicode.com/YeudaWitman/fiveDays/DailyForecasts';

const FiveDaysForecast = () => {

  const currentState = useSelector(state => state.fiveDaysData);
  const dailyForecasts  = currentState.data;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCurrentWeather = () => {
      dispatch(actions.fiveDaysPending());
      axios.get(FIVE_DEVELOP_API)
      .then((response) => {
        dispatch(actions.fiveDaysSuccess(response.data));
      })
      .catch((error) => {
        dispatch(actions.fiveDaysError(error));
      })
    }
    fetchCurrentWeather();
  }, [dispatch]);
  
  if(currentState.pending) {
    return (
      <CircularProgress />
    )
  } else {
    return dailyForecasts.map((day, i) => <DailyForecast key={i} daily={day} />)
  }
}

export default FiveDaysForecast;