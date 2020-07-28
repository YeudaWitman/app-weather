import * as types from '../actions/types';

const favorites = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TO_FAVORITES:
        return {
            ...state
        };
    case types.REMOVE_FROM_FAVORITES:
        return {
            ...state
        };
    default:
        return state;
  }
}

export default favorites;