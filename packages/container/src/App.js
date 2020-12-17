import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
import Header from "./components/Header";
import {createGenerateClassName, StylesProvider} from "@material-ui/core/styles";

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
                      <Route path="/auth" component={AuthApp}/>
                      <Route path="/" component={MarketingApp}/>
                  </Switch>
              </div>
          </BrowserRouter>
      </StylesProvider>
  );
};
