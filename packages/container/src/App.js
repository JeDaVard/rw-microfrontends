import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {createGenerateClassName, StylesProvider} from "@material-ui/core/styles";
import Header from "./components/Header";

const AuthAppLazy = React.lazy(() => import('./components/AuthApp'))
const MarketingAppLazy = React.lazy(() => import('./components/MarketingApp'))

const makeUniqueClasses = createGenerateClassName({
    productionPrefix: 'container'
})

export default () => {
  return (
      <StylesProvider generateClassName={makeUniqueClasses}>
          <BrowserRouter>
              <div>
                  <Header />
                  <Switch>
                      <Route path="/auth" component={AuthAppLazy}/>
                      <Route path="/" component={MarketingAppLazy}/>
                  </Switch>
              </div>
          </BrowserRouter>
      </StylesProvider>
  );
};
