import React from 'react';
import ProjectList from '../projects/ProjectList.jsx';

const ProjectsPage = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
        Here's a collection of projects I've worked on. Each project showcases different skills and technologies.
      </p>
      <ProjectList />
    </>
  );
};

export default ProjectsPage;
// Updated on Tue Apr 8 20:30:00 2025 +0000
