import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Counter from '@/components/pages/Counter';
import ProjectList from '@/components/pages/ProjectList';
import ProjectDetail from '@/components/pages/ProjectDetail';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/counter" component={Counter} />
      <Route path="/projects/:projectId" component={ProjectDetail} />
      <Route path="/projects" component={ProjectList} />
    </Switch>
  );
};

export default Routes;
