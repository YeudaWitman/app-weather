import { combineReducers } from 'redux';

import favorites from './favorites';
import darkMode from './darkMode';
import currentData from './fetchData';
import fiveDaysData from './fiveDaysData';
import search, { suggestion, suggestionMenu } from './search';
import toast from './toast';

const rootReducer = combineReducers({
  favorites,
  darkMode,
  currentData,
  fiveDaysData,
  suggestion,
  suggestionMenu,
  search,
  toast
});

export default rootReducer;