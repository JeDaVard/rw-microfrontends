import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';

const makeUniqueClasses = createGenerateClassName({
  productionPrefix: 'auth'
})

export default (props) => {
  return (
    <div>
      <StylesProvider generateClassName={makeUniqueClasses}>
        <Router history={props.history}>
          <Switch>
            <Route path="/auth/signin" render={() => <Signin onSignIn={props.onSignIn} />} />
            <Route path="/auth/signup"><Signup onSignIn={props.onSignIn} /></Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
