import * as types from '../actions/types';

const initState = {
  pending: true,
  data: {},
  error: null
}

const fetchData = (state = initState, action) => {
  switch (action.type) {
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

export default fetchData;