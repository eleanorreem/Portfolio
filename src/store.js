import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import reducers from './redux/reducers.js';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const preloadedState = window.__PRELOADED_STATE__;

export const store = createStore(
  reducers,
  preloadedState,
  composeEnhancers(
    applyMiddleware(routerMiddleware(browserHistory), apiMiddleware, thunk)
  )
);

export const historyStore = syncHistoryWithStore(browserHistory, store);
