import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { fetchProjects } from '../services/api';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const getProject = async () => {
      const projects = await fetchProjects();
      const foundProject = projects.find(p => p.id === parseInt(id));
      
      if (foundProject) {
        setProject(foundProject);
      } else {
        setNotFound(true);
      }
      
      setLoading(false);
    };

    getProject();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="relative flex flex-col items-center">
          <div className="w-16 h-16 border-t-4 border-b-4 border-primary-600 dark:border-primary-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-primary-600 dark:text-primary-500 text-lg font-medium">Loading project...</p>
        </div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">The project you're looking for doesn't exist.</p>
        <Link to="/projects" className="btn btn-primary">
          <FaArrowLeft className="mr-2" /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="mb-8">
        <Link to="/projects" className="inline-flex items-center px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-100 transition-colors">
          <FaArrowLeft className="mr-2" /> Back to Projects
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mb-6 md:mb-0">
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto rounded-xl shadow-lg object-cover" 
            />
          ) : (
            <div className="bg-gray-100 dark:bg-dark-100 flex items-center justify-center rounded-xl shadow-lg h-72">
              <span className="text-gray-500 dark:text-gray-400">No Image Available</span>
            </div>
          )}
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h1>
          
          {project.completed_date && (
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400">
                Completed: {new Date(project.completed_date).toLocaleDateString()}
              </span>
            </div>
          )}

          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Description</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>
          
          <div className="flex flex-wrap gap-4 mt-6">
            {project.github_url && (
              <a 
                href={project.github_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
              >
                <FaGithub className="mr-2" /> GitHub Repository
              </a>
            )}
            
            {project.url && (
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-700 transition-colors"
              >
                <FaExternalLinkAlt className="mr-2" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailPage;
// Updated on Wed Apr 9 21:15:00 2025 +0000

// Updated on Wed Apr 9 21:30:00 2025 +0000
