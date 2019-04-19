import * as React from 'react';

const { useState, useEffect, useCallback } = React;

interface Project {
  id: number;
  displayName: string;
}

export const useProjectList = () => {
  const [projectList, setProjectList] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProjectList = useCallback(async () => {
    setIsLoading(true);
    const res = await fetch(`/api/projects`);
    const projects = (await res.json()) as Project[];
    setProjectList(projects);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProjectList();
  }, []);

  return { projectList, isLoading };
};

export const useProject = (id: number) => {
  const [project, setProject] = useState<Project>();
  const [notFound, setNotFound] = useState(false);
  const fetchProject = useCallback(async () => {
    const res = await fetch(`/api/projects/${id}`);
    if (res.status === 404) {
      setNotFound(true);
      return;
    }
    const fetchedProject = (await res.json()) as Project;
    setProject(fetchedProject);
  }, [id]);

  useEffect(() => {
    fetchProject();
  }, [id]);

  return { project, notFound };
};
