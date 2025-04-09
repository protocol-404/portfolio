import React, { useState, useEffect } from 'react';
import SkillCard from './SkillCard';
import { fetchSkills } from '../services/api';

const SkillList = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSkills = async () => {
      const skillsData = await fetchSkills();
      setSkills(skillsData);
      setLoading(false);
    };

    getSkills();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[30vh]">
        <div className="relative flex flex-col items-center">
          <div className="w-16 h-16 border-t-4 border-b-4 border-primary-600 dark:border-primary-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-primary-600 dark:text-primary-500 text-lg font-medium">Loading skills...</p>
        </div>
      </div>
    );
  }

  if (skills.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No skills found</h3>
        <p className="text-gray-600 dark:text-gray-400">Check back later for updates.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skills.map(skill => (
        <div key={skill.id}>
          <SkillCard skill={skill} />
        </div>
      ))}
    </div>
  );
};

export default SkillList;
// Updated on Wed Apr 9 12:15:00 2025 +0000

// Updated on Wed Apr 9 11:55:00 2025 +0000
