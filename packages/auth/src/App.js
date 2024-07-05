import React from "react"
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles"
import { Switch, Route, Router } from "react-router-dom"

import Signin from "./components/Signin"
import Signup from "./components/Signup"

export default ({ history }) => {
  return <StylesProvider generateClassName={createGenerateClassName({ productionPrefix: "au" })}>
    <Router history={history}>
      <Switch>
        <Route path="/auth/signin" component={Signin} />
        <Route path="/auth/signup" component={Signup} />
      </Switch>
    </Router>
  </StylesProvider>
}
