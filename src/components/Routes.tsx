import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Counter from '@/components/pages/Counter';
import ProjectDetail from './pages/ProjectDetail';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/counter" component={Counter} />
      <Route path="/projects/:projectId" component={ProjectDetail} />
    </Switch>
  );
};

export default Routes;
