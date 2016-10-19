import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app.js'
import Dashboard from './routes/Dashboard/index.js'
import GroupSummary from './routes/GroupSummary/index.js'
import GroupPolicySettings from './routes/GroupPolicySettings/index.js'
import TimePolicy from './routes/TimePolicy/index.js'
import Profile from './routes/Profile/index.js'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Dashboard}/>
    <Route path='/group-summary' component={GroupSummary}/>
    <Route path='/group-policy-settings' component={GroupPolicySettings}/>
    <Route path='/time-policy' component={TimePolicy}/>
    <Route path='/profile' component={Profile}/>
  </Route>
)
