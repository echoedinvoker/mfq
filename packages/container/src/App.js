import React from 'react'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import MarketingApp from './components/MarketingApp'
import AuthApp from './components/AuthApp'
import Header from './components/Header'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default () => {
  return (
    <StylesProvider generateClassName={createGenerateClassName({ productionPrefix: 'co' })}>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/auth" component={AuthApp} />
            <Route path="/" component={MarketingApp} />
          </Switch>
        </div>
      </BrowserRouter>
    </StylesProvider>
  )
}
