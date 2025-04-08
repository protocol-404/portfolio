import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../home/Hero.jsx';
import ProjectCard from '../projects/ProjectCard.jsx';
import SkillCard from '../skills/SkillCard.jsx';
import { fetchProfile, fetchProjects, fetchSkills } from '../services/api.jsx';
import { FaArrowRight } from 'react-icons/fa';

const HomePage = () => {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await fetchProfile();
        const projectsData = await fetchProjects();
        const skillsData = await fetchSkills();
        
        setProfile(profileData);
        setProjects(projectsData.slice(0, 3));
        setSkills(skillsData.slice(0, 6));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching homepage data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="relative flex flex-col items-center">
          <div className="w-16 h-16 border-t-4 border-b-4 border-primary-600 dark:border-primary-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-primary-600 dark:text-primary-500 text-lg font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Hero profile={profile} />
      
      <section className="py-20 bg-gray-50 dark:bg-dark-100">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 transform transition-all duration-500 ease-in-out">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Featured Projects</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl">Check out some of my best work</p>
            </div>
            <Link to="/projects" className="group hidden md:flex items-center text-primary-600 dark:text-primary-500 font-medium hover:text-primary-700 dark:hover:text-primary-400 transition-colors mt-4 md:mt-0">
              View All Projects
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <div key={project.id} className="transform transition-all duration-500 ease-in-out translate-y-0 opacity-100">
                  <ProjectCard project={project} />
                </div>
              ))
            ) : (
              <div className="col-span-full transform transition-all duration-500 ease-in-out translate-y-0 opacity-100">
                <div className="card p-8 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No projects yet</h3>
                  <p className="text-gray-600 dark:text-gray-400">Check back soon for updates.</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="md:hidden mt-8 flex justify-center transform transition-all duration-500 ease-in-out translate-y-0 opacity-100">
            <Link to="/projects" className="btn btn-outline">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 transform transition-all duration-500 ease-in-out">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">My Skills</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl">Technologies and tools I work with</p>
            </div>
            <Link to="/skills" className="group hidden md:flex items-center text-primary-600 dark:text-primary-500 font-medium hover:text-primary-700 dark:hover:text-primary-400 transition-colors mt-4 md:mt-0">
              View All Skills
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.length > 0 ? (
              skills.map((skill, index) => (
                <div key={skill.id} className="transform transition-all duration-500 ease-in-out translate-y-0 opacity-100">
                  <SkillCard skill={skill} />
                </div>
              ))
            ) : (
              <div className="col-span-full transform transition-all duration-500 ease-in-out translate-y-0 opacity-100">
                <div className="card p-8 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No skills yet</h3>
                  <p className="text-gray-600 dark:text-gray-400">Check back soon for updates.</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="md:hidden mt-8 flex justify-center transform transition-all duration-500 ease-in-out translate-y-0 opacity-100">
            <Link to="/skills" className="btn btn-outline">
              View All Skills
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-primary-50 dark:bg-primary-900/10">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Let's Work Together</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <Link to="/contact">
              <button className="btn btn-primary px-8 transform transition hover:scale-105 active:scale-95">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
// Updated on Tue Apr 8 15:30:00 2025 +0000
