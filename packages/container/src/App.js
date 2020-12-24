import React, {useState, useEffect} from 'react';
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history';
import {createGenerateClassName, StylesProvider} from "@material-ui/core/styles";
import Header from "./components/Header";
import Progress from "./components/Progress";

const history = createBrowserHistory()

const AuthAppLazy = React.lazy(() => import('./components/AuthApp'))
const MarketingAppLazy = React.lazy(() => import('./components/MarketingApp'))
const DashboardAppLazy = React.lazy(() => import('./components/DashboardApp'))

const makeUniqueClasses = createGenerateClassName({
    productionPrefix: 'container'
})


export default () => {
    const [ authentication, setAuthentication ] = useState({
        isSignIn: false,
        currentUser: {}
    })

    useEffect(() => {
        if (authentication.isSignIn) {
            history.push('/dashboard')
        }
    }, [authentication.isSignIn])

  return (
      <StylesProvider generateClassName={makeUniqueClasses}>
          <Router history={history}>
              <div>
                  <Header currentUser={authentication.currentUser}
                          isSignedIn={authentication.isSignIn}
                          onSignOut={setAuthentication}/>
                  <React.Suspense fallback={<Progress />}>
                      <Switch>
                          <Route path="/auth" render={() => <AuthAppLazy onSignIn={setAuthentication}/>} />
                          <Route path="/dashboard">{!authentication.isSignIn && <Redirect to={'/'}/>}<DashboardAppLazy /></Route>
                          <Route path="/" component={MarketingAppLazy}/>
                      </Switch>
                  </React.Suspense>
              </div>
          </Router>
      </StylesProvider>
  );
};
