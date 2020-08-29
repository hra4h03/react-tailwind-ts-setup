import React from 'react'
import { Route, Switch, Redirect  } from 'react-router-dom'

import { Index } from '../pages/Index'
export const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <Index /> 
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}
