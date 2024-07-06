import React, { lazy, Suspense, useState } from 'react'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import Header from './components/Header'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Progress from './components/Progress'

const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const AuthLazy = lazy(() => import('./components/AuthApp'))

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  function onSignIn() {
    setIsSignedIn(true)
  }

  return (
    <StylesProvider generateClassName={createGenerateClassName({ productionPrefix: 'co' })}>
      <BrowserRouter>
        <div>
          <Header isSignedIn={isSignedIn} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={onSignIn} />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </StylesProvider>
  )
}
