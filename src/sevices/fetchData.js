import axios from 'axios';
import * as actions from '../redux/actions';

const API_KEY = process.env.REACT_APP_API_KEY;

const CURRENT_DEVELOP_API = 'https://my-json-server.typicode.com/YeudaWitman/currentCondition/data';
const FIVE_DEVELOP_API = 'https://my-json-server.typicode.com/YeudaWitman/fiveDays/DailyForecasts';
const AUTOCOMPLETE_API = 'https://my-json-server.typicode.com/YeudaWitman/autoCompleteMock/datas';

const currentWeather = (dispatch, cityKey) => {
  const CURRENT_CONDITION_API = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${API_KEY}`;
  dispatch(actions.fetchDataPending());
  axios.get(CURRENT_DEVELOP_API)
    .then((response) => {
      dispatch(actions.fetchDataSuccess(response.data));
    })
    .catch((error) => {
      dispatch(actions.fetchDataError(error));
    })
}

const fiveDaysWeather = (dispatch, cityKey) => {
  const FIVE_API = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&metric=${true}`
  dispatch(actions.fiveDaysPending());
  axios.get(FIVE_DEVELOP_API)
    .then((response) => {
      dispatch(actions.fiveDaysSuccess(response.data));
    })
    .catch((error) => {
      dispatch(actions.fiveDaysError(error));
    })
}

const suggestions = (dispatch) => {
  dispatch(actions.suggestionPending());
  axios.get(AUTOCOMPLETE_API)
    .then((response) => {
      dispatch(actions.suggestionSuccess(response.data));
    })
    .catch((error) => {
      dispatch(actions.suggestionError(error));
    })
}

export const fetchData = {
  currentWeather,
  fiveDaysWeather,
  suggestions
}