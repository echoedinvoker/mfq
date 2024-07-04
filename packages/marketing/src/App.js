import React from "react"
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles"
import { Switch, Route } from "react-router-dom"
import Landing from "./components/Landing"
import Pricing from "./components/Pricing"

export default ({ history }) => {
  return <StylesProvider generateClassName={createGenerateClassName({ productionPrefix: "ma" })}>
    <Route history={history}>
      <Switch>
        <Route exact path="/pricing" component={Pricing} />
        <Route path="/" component={Landing} />
      </Switch>
    </Route>
  </StylesProvider>
}
