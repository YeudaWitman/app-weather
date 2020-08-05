import * as actions from '../redux/actions';
import { DARK_MODE, FAVORITES } from '../common'

/* export const checkLocalStorage = (dispatch) => {
  if (localStorage.getItem(DARK_MODE)) {
    let darkMode = JSON.parse(localStorage.getItem(DARK_MODE));
    dispatch(actions.darkMode(darkMode));
  }
  if (localStorage.getItem(FAVORITES)) {
    let favorites = JSON.parse(localStorage.getItem(FAVORITES));
    dispatch(actions.addToFavorites(favorites));
  }
} */

export const checkLocalStorage = {
  darkMode: (dispatch) => {
    if (localStorage.getItem(DARK_MODE)) {
      let darkMode = JSON.parse(localStorage.getItem(DARK_MODE));
      dispatch(actions.darkMode(darkMode));
    }
  },
  favorites: (dispatch) => {
    if (localStorage.getItem(FAVORITES)) {
      let favorites = JSON.parse(localStorage.getItem(FAVORITES));
      dispatch(actions.addToFavorites(favorites));
    }
  }
}

const addToFavorites = (dispatch, city) => {
  let tmp = [];
  if (localStorage.getItem(FAVORITES)) {
    tmp = JSON.parse(localStorage.getItem(FAVORITES));
  }
  tmp.push(city);
  dispatch(actions.addToFavorites(tmp));
  localStorage.setItem(FAVORITES, JSON.stringify(tmp));
  dispatch(actions.openToast(`${city.name} added to favorites`));
}

const removeFromFavorites = (dispatch, city) => {
  let tmp = [];
  if (localStorage.getItem(FAVORITES)) {
    tmp = JSON.parse(localStorage.getItem(FAVORITES));
  }
  const index = tmp.map(e => e.key).indexOf(city.key);
  if (index > -1) {
    tmp.splice(index, 1);
  }
  dispatch(actions.removeFromFavorites(tmp));
  localStorage.setItem(FAVORITES, JSON.stringify(tmp));
  dispatch(actions.openToast(`${city.name} removed from favorites`));
}

export const favorites = {
  add: addToFavorites,
  remove: removeFromFavorites
}