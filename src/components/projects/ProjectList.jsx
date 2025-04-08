import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard.jsx';
import { fetchProjects } from '../services/api.jsx';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const projectsData = await fetchProjects();
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[30vh]">
        <div className="relative flex flex-col items-center">
          <div className="w-16 h-16 border-t-4 border-b-4 border-primary-600 dark:border-primary-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-primary-600 dark:text-primary-500 text-lg font-medium">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No projects found</h3>
        <p className="text-gray-600 dark:text-gray-400">Check back later for updates.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map(project => (
        <div key={project.id}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
// Updated on Tue Apr 8 20:40:00 2025 +0000
