import * as types from '../actions/types';

const initState = {
    city: {
        key: "215854",
        name: "Tel Aviv",
        country: "Israel"
    },
    pending: true,
    data: [],
    error: null
}

const currentCity = (state = initState, action) => {
    
  switch (action.type) {
    case types.SET_CURRENT_CITY:
        return {
          city: action.payload,
          ...state,
        };
    case types.FETCH_DATA_PENDING:
        return {
          ...state,
          pending: true
        };
    case types.FETCH_DATA_SUCCESS:
        return {
          ...state,
          pending: false,
          data: action.payload
        };
    case types.FETCH_DATA_ERROR:
        return {
          ...state,
          pending: false,
          error: action.payload
        };
    default:
        return state;
  }
}

export default currentCity;