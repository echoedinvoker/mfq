import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

// mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
  const history = defaultHistory || createMemoryHistory(
    { initialEntries: [initialPath] }
  );

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    }
  }
}

// if we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  // const el = document.querySelector('#_marketing-dev-root');
  const el = document.querySelector('#_auth-dev-root');
  if (el) {
    mount(el, {
      defaultHistory: createBrowserHistory()
    });
  }
}

// we are running through container, export the mount function
export { mount };
