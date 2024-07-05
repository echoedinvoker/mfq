import React from "react"
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles"
import { Switch, Route, Router } from "react-router-dom"

export default ({ history }) => {
  return <StylesProvider generateClassName={createGenerateClassName({ productionPrefix: "au" })}>
    <Router history={history}>
      <Switch>
      </Switch>
    </Router>
  </StylesProvider>
}
