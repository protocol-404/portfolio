import React, { useEffect, useRef, useState } from 'react';

const SkillCard = ({ skill }) => {
  const progressRef = useRef(null);
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    // Animate the progress bar on mount
    const timer = setTimeout(() => {
      setWidth(skill?.proficiency || 0);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [skill?.proficiency]);
  
  const getProgressColor = (proficiency) => {
    if (proficiency >= 90) return 'bg-gradient-to-r from-green-500 to-green-600';
    if (proficiency >= 70) return 'bg-gradient-to-r from-primary-500 to-primary-600';
    if (proficiency >= 50) return 'bg-gradient-to-r from-blue-500 to-blue-600';
    if (proficiency >= 30) return 'bg-gradient-to-r from-yellow-500 to-yellow-600';
    return 'bg-gradient-to-r from-red-500 to-red-600';
  };

  return (
    <div 
      className="card p-6 h-full hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl hover-lift"
    >
      <div className="flex items-start">
        {/* Skill Icon */}
        <div className="mr-4">
          {skill?.icon ? (
            <img
              src={skill.icon}
              alt={skill?.name || 'Skill Icon'}
              className="w-12 h-12 object-contain animate-float"
              style={{ animationDelay: '0.3s' }}
            />
          ) : (
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-2xl animate-float" style={{ animationDelay: '0.3s' }}>
              <span role="img" aria-label="Skill">🛠️</span>
            </div>
          )}
        </div>
        
        <div className="flex-1">
          {/* Skill Name */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {skill?.name || 'Unnamed Skill'}
          </h3>
          
          {/* Skill Level */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {getProficiencyLevel(skill?.proficiency || 0)}
            </span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {skill?.proficiency || 0}%
            </span>
          </div>
          
          {/* Progress Bar */}
          <div className="skill-bar">
            <div 
              ref={progressRef}
              className={`skill-progress ${getProgressColor(skill?.proficiency || 0)} transition-all duration-1000 ease-out animate-shimmer`}
              style={{ width: `${width}%` }}
            ></div>
          </div>
          
          {/* Skill Description */}
          {skill?.description && (
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              {skill.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper function to get proficiency level text
const getProficiencyLevel = (proficiency) => {
  if (proficiency >= 90) return 'Expert';
  if (proficiency >= 70) return 'Advanced';
  if (proficiency >= 50) return 'Intermediate';
  if (proficiency >= 30) return 'Basic';
  return 'Beginner';
};

export default SkillCard;
// Updated on Wed Apr 9 10:30:00 2025 +0000

// Updated on Wed Apr 9 10:20:00 2025 +0000
