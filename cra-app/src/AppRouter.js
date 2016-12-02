import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';

const NoMatch = () => (<div>No Match</div>);

const AppRouter = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
);

export default AppRouter;
