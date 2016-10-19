import ReactDOM from 'react-dom'
import React from 'react'
import Routes from './routes.js'
import { Router, browserHistory } from 'react-router'

ReactDOM.render(
  <Router history={browserHistory} routes={Routes}/>,
  document.getElementById('app')
)
