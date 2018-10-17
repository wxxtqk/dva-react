import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import getRouters from './routes/routes.config'
function RouterConfig({ history, app }) {
  const router = getRouters(app)
  return (
    <Router history={history}>
      <Switch>
        {router.map(item => {
          return(
            <Route render={props => <item.component {...props} router={router}/>} path={item.path} key={item.path}/>
          )
        })}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
