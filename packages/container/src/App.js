import React from 'react';
import { BrowserRouter } from "react-router-dom";
import MarketingApp from './components/MarketingApp';
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
                  <MarketingApp />
              </div>
          </BrowserRouter>
      </StylesProvider>
  );
};
