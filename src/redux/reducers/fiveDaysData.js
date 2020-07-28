import * as types from '../actions/types';

const initState = {
  pending: true,
  data: {},
  error: null
}

const fiveDaysData = (state = initState, action) => {
  switch (action.type) {
    case types.FIVE_DAYS_DATA_PENDING:
        return {
            ...state,
            pending: true
        };
    case types.FIVE_DAYS_DATA_SUCCESS:
        return {
            ...state,
            pending: false,
            data: action.payload
        };
    case types.FIVE_DAYS_DATA_ERROR:
        return {
            ...state,
            pending: false,
            error: action.payload
        };
    default:
        return state;
  }
}

export default fiveDaysData;