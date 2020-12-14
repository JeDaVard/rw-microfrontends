import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const makeUniqueClasses = createGenerateClassName({
  productionPrefix: 'marketing'
})

export default (props) => {
  return (
    <div>
      <StylesProvider generateClassName={makeUniqueClasses}>
        <Router history={props.history}>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
