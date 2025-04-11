import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const Hero = ({ profile }) => {
  if (!profile) return null;

  // console.log( profile.name );

  return (
    <div className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6 transform transition-all">
            <span className="inline-block py-1 px-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium">
              {profile?.title || 'Web Developer'}
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Hi, I'm <span className="text-primary-600 dark:text-primary-500">{profile?.name?.split(' ')[0]}</span>
              <br />
              {profile?.tagline || 'Creative Developer'}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
              {profile?.bio?.substring(0, 150) || 'I design and code beautifully simple things, and I love what I do.'}...
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <button 
                  className="btn btn-primary transform transition hover:scale-105 active:scale-95"
                >
                  View My Work <FaArrowRight className="ml-2" />
                </button>
              </Link>
              <Link to="/contact">
                <button 
                  className="btn btn-outline transform transition hover:scale-105 active:scale-95"
                >
                  Contact Me
                </button>
              </Link>
            </div>
            
            <div className="flex items-center gap-4">
              {profile?.github && (
                <a 
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <FaGithub size={24} />
                </a>
              )}
              {profile?.linkedin && (
                <a 
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
              )}
              {profile?.email && (
                <a 
                  href={`mailto:${profile.email}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors transform hover:scale-110"
                  aria-label="Email"
                >
                  <FaEnvelope size={24} />
                </a>
              )}
            </div>
          </div>
          
          <div className="lg:col-span-2 flex justify-center transform transition-all duration-500 ease-in-out hover:scale-105">
            <div className="relative">
              {/* Background shape */}
              <div className="absolute -inset-4 rounded-full bg-primary-100 dark:bg-primary-900/20 -z-10"></div>
              
              {/* Animated dots pattern */}
              <div className="absolute -inset-10 -z-20">
                <div className="absolute top-0 right-0 h-20 w-20 rounded-full bg-primary-400/20 dark:bg-primary-700/20 animate-pulse"></div>
                <div className="absolute bottom-10 left-10 h-16 w-16 rounded-full bg-primary-500/20 dark:bg-primary-600/20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-20 left-0 h-12 w-12 rounded-full bg-primary-300/20 dark:bg-primary-800/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              
              {/* Profile image */}
              {profile?.avatar ? (
                <img
                  src={profile.avatar}
                  alt={profile?.name || 'Profile'}
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white dark:border-dark-100 shadow-xl"
                />
              ) : (
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary-50 dark:bg-dark-100 border-4 border-white dark:border-dark-100 shadow-xl flex items-center justify-center">
                  <span className="text-7xl">👨‍💻</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
// Updated on Tue Apr 8 13:20:00 2025 +0000

// Updated on Tue Apr 8 13:20:00 2025 +0000
