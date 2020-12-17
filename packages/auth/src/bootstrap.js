import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history'

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory }) => {
  // defaultHistory is used for isolated mode (dev mode)
  const history = defaultHistory || createMemoryHistory();
  if (!!onNavigate) history.listen(onNavigate);

  ReactDOM.render(<App history={history}/>, el);

  return {
    onParentNavigate: (location) => {
      const nextPathname = location.pathname
      const pathname = history.location.pathname

      if (pathname !== nextPathname) {
        history.push(nextPathname)
      }
    }
  }
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// We are running through container
// and we should export the mount function
export { mount };
