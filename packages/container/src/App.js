import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {createGenerateClassName, StylesProvider} from "@material-ui/core/styles";
import Header from "./components/Header";
import Progress from "./components/Progress";

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

  return (
      <StylesProvider generateClassName={makeUniqueClasses}>
          <BrowserRouter>
              <div>
                  <Header currentUser={authentication.currentUser}
                          isSignedIn={authentication.isSignIn}
                          onSignOut={setAuthentication}/>
                  <React.Suspense fallback={<Progress />}>
                      <Switch>
                          <Route path="/auth" render={() => <AuthAppLazy onSignIn={setAuthentication}/>} />
                          <Route path="/dashboard" component={DashboardAppLazy} />
                          <Route path="/" component={MarketingAppLazy}/>
                      </Switch>
                  </React.Suspense>
              </div>
          </BrowserRouter>
      </StylesProvider>
  );
};
