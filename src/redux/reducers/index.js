import { combineReducers } from 'redux';

import currentCity from './currentCity';
import favorites from './favorites';
import darkMode from './darkMode';
import fiveDaysData from './fiveDaysData';
import search, { suggestion, suggestionMenu } from './search';
import toast from './toast';

const rootReducer = combineReducers({
  currentCity,
  favorites,
  darkMode,
  fiveDaysData,
  suggestion,
  suggestionMenu,
  search,
  toast
});

export default rootReducer;