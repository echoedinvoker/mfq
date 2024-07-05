import React, { lazy, Suspense } from 'react'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import Header from './components/Header'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Progress from './components/Progress'

const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const AuthLazy = lazy(() => import('./components/AuthApp'))

export default () => {
  return (
    <StylesProvider generateClassName={createGenerateClassName({ productionPrefix: 'co' })}>
      <BrowserRouter>
        <div>
          <Header />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth" component={AuthLazy} />
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </StylesProvider>
  )
}
