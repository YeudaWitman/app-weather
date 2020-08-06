import { DARK_MODE } from '../actions/types';

const darkMode = (state = false, action) => {
  if (action.type === DARK_MODE) {
    return action.payload ? true : false;
  } else {
    return state;
  }
};

export default darkMode;