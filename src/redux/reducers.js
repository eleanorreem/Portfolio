import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import entry from './modules/entry.js';

export default combineReducers({
  entry,
  routing: routerReducer,
});
