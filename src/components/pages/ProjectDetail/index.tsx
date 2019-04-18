import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type Props = RouteComponentProps<{ projectId: string }>;

const ProjectDetail: React.FC<Props> = props => {
  const { projectId } = props.match.params;

  return (
    <div>
      <h1>プロジェクトページ</h1>
      <div>
        <span>No. </span>
        <span>{projectId}</span>
      </div>
    </div>
  );
};

export default ProjectDetail;
