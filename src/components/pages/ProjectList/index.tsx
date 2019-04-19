import * as React from 'react';
import { Link } from 'react-router-dom';
import { useProjectList } from '@/queries/projectQuery';

const ProjectList: React.FC = () => {
  const { projectList, isLoading } = useProjectList();

  return (
    <div>
      <h1>プロジェクト一覧</h1>
      {isLoading ? (
        <div>NowLoading</div>
      ) : (
        <ul>
          {projectList.map(project => {
            const key = `key-project-${project.id}`;
            return (
              <li key={key}>
                <Link to={`/projects/${project.id}`}>
                  {project.displayName}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ProjectList;
