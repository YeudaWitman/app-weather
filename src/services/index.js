import * as actions from '../redux/actions';

export const handleCloseToast = (dispatch) => {
  dispatch(actions.closeToast());
};