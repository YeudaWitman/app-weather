import * as types from './types';

export const darkMode = (payload) => {
  return {
    type: types.DARK_MODE,
    payload
  }
}

export const openToast = (payload) => {
  return {
    type: types.OPEN_TOAST,
    payload
  }
}

export const closeToast = () => {
  return {
    type: types.CLOSE_TOAST
  }
}

export const setCurrentCity = (payload) => {
  return {
    type: types.SET_CURRENT_CITY,
    payload
  }
}

export const addToFavorites = (payload) => {
  return {
    type: types.ADD_TO_FAVORITES,
    payload
  }
}

export const removeFromFavorites = (payload) => {
  return {
    type: types.REMOVE_FROM_FAVORITES,
    payload
  }
}

export const fetchDataPending = () => {
  return {
    type: types.FETCH_DATA_PENDING,
  }
}

export const fetchDataSuccess = (payload) => {
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload
  }
}

export const fetchDataError = (payload) => {
  return {
    type: types.FETCH_DATA_ERROR,
    payload
  }
}

export const fiveDaysPending= () => {
  return {
    type: types.FIVE_DAYS_DATA_PENDING,
  }
}

export const fiveDaysSuccess = (payload) => {
  return {
    type: types.FIVE_DAYS_DATA_SUCCESS,
    payload
  }
}

export const fiveDaysError = (payload) => {
  return {
    type: types.FIVE_DAYS_DATA_ERROR,
    payload
  }
}

export const search = (payload) => {
  return {
    type: types.SEARCH,
    payload
  }
}

export const openSuggestionMenu = (payload) => {
  return {
    type: types.OPEN_SUGGESTION_MENU,
    payload
  }
}
export const closeSuggestionMenu = (payload) => {
  return {
    type: types.CLOSE_SUGGESTION_MENU,
    payload
  }
}

export const suggestionPending= () => {
  return {
    type: types.FETCH_SUGGESTION_PENDING,
  }
}

export const suggestionSuccess = (payload) => {
  return {
    type: types.FETCH_SUGGESTION_SUCCESS,
    payload
  }
}

export const suggestionError = (payload) => {
  return {
    type: types.FETCH_SUGGESTION_ERROR,
    payload
  }
}