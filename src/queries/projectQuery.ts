import * as React from 'react';

const { useState, useEffect } = React;

interface Project {
  id: number;
  displayName: string;
}

const useProject = (id: number) => {
  const [project, setProject] = useState<Project>();
  const [error, setError] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const fetchProject = async () => {
    const res = await fetch(`/api/projects/${id}`);
    if (res.ok) {
      const fetchedProject = (await res.json()) as Project;
      setProject(fetchedProject);
      setError(false);
      return;
    }
    setError(true);
    if (res.status === 404) setNotFound(true);
  };

  useEffect(() => {
    fetchProject();
  });

  return { project, error, notFound };
};

export default useProject;
