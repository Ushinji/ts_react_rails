import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useProject } from '@/queries/projectQuery';

type Props = RouteComponentProps<{ projectId: string }>;

const ProjectDetail: React.FC<Props> = props => {
  const projectId = parseInt(props.match.params.projectId, 10);
  const { project, notFound } = useProject(projectId);

  if (notFound) return <div>404 NotFound</div>;
  if (!project) return <div>Now Loading...</div>;

  return (
    <div>
      <h1>プロジェクトページ</h1>
      <div>
        <span>No. </span>
        <span>{project.displayName}</span>
      </div>
    </div>
  );
};

export default ProjectDetail;
