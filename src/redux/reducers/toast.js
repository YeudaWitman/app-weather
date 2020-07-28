import * as types from '../actions/types';

const initState = {
  open: false,
  msg: ''
};

const setToast = (state = initState, action) => {
  switch (action.type) {
    case types.OPEN_TOAST:
        return {
          open: true,
          msg: action.payload
        };
    case types.CLOSE_TOAST:
      return {
        open: false,
        msg: ''
      };
    default:
        return state;
  }
}

export default setToast;