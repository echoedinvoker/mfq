import React, { lazy, Suspense, useEffect, useState } from 'react'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import Header from './components/Header'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import Progress from './components/Progress'
import { createBrowserHistory } from 'history'

const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const AuthLazy = lazy(() => import('./components/AuthApp'))
const DashboardLazy = lazy(() => import('./components/DashboardApp'))

const history = createBrowserHistory()

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  function onSignIn() {
    setIsSignedIn(true)
  }
  function onSignOut() {
    setIsSignedIn(false)
  }

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard')
    }
  }, [isSignedIn])

  return (
    <StylesProvider generateClassName={createGenerateClassName({ productionPrefix: 'co' })}>
      <Router history={history}>
        <div>
          <Header isSignedIn={isSignedIn} onSignOut={onSignOut} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={onSignIn} />
              </Route>
              <Route path="/dashboard">
                {!isSignedIn && <Redirect to="/" />}
                <DashboardLazy />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </StylesProvider>
  )
}
