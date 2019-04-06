import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Counter from './pages/Counter';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/counter" component={Counter} />
    </Switch>
  );
};

export default Routes;
