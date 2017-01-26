import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
require('./sass/main.scss');

// container
import App from './components/App';

// import views
import Entry from './views/Entry/container.js'
// store
import { store, historyStore } from './store.js';

ReactDOM.render(
  <Provider store={store}>
    <Router history={historyStore}>
      <Route path='/' component={App}>
        <Route path='/home' component={Entry}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
