import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div 
      className="card group h-full overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl hover-lift"
    >
      <div className="relative overflow-hidden h-56">
        {/* Project Image */}
        {project?.image ? (
          <img
            src={project.image}
            alt={project?.title || 'Project Image'}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 animate-shimmer"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 dark:bg-dark-200 flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400 text-xl">No Image</span>
          </div>
        )}
        
        {/* Overlay with links */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
          {project.github_url && (
            <a 
              href={project.github_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors hover:scale-110 active:scale-95 transform transition-transform duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
          )}
          {project.url && (
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary-600 text-white p-3 rounded-full hover:bg-primary-700 transition-colors hover:scale-110 active:scale-95 transform transition-transform duration-300"
              aria-label="Live Demo"
            >
              <FaExternalLinkAlt size={18} />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index} 
                className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-400">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        )}
        
        {/* Title & Description */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-500 transition-colors">
          {project?.title || 'Untitled Project'}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow">
          {project?.description || 'No description available.'}
        </p>
        
        {/* View Details Link */}
        <Link 
          to={`/projects/${project?.id || '#'}`}
          className="text-primary-600 dark:text-primary-500 font-medium inline-flex items-center hover:text-primary-700 dark:hover:text-primary-400 transition-colors mt-auto group/link"
        >
          View Details
          <FaArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform animate-pulse-slow" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
// Updated on Tue Apr 8 18:15:00 2025 +0000
