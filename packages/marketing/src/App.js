import React from "react"
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Landing from "./components/Landing"
import Pricing from "./components/Pricing"

export default () => {
  return <StylesProvider generateClassName={createGenerateClassName({ productionPrefix: "ma" })}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/pricing" component={Pricing} />
        <Route path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  </StylesProvider>
}
