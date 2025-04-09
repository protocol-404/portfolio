import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFile, FaMapMarkerAlt, FaPhone, FaDownload, FaCode, FaStar } from 'react-icons/fa';

const ProfileSection = ({ profile }) => {
  if (!profile) return null;

  return (
    <div className="bg-white dark:bg-dark-100 rounded-2xl shadow-xl overflow-hidden">
      <div className="md:flex">
        {/* Left section with profile image and basic info */}
        <div className="md:w-1/3 bg-gradient-to-br from-primary-500 to-primary-700 text-white p-8">
          <div className="flex flex-col items-center text-center">
            {profile.avatar ? (
              <img 
                src={profile.avatar} 
                alt={profile.name} 
                className="rounded-full w-48 h-48 object-cover border-4 border-white shadow-lg mb-6"
              />
            ) : (
              <div className="rounded-full w-48 h-48 bg-white/10 border-4 border-white shadow-lg flex items-center justify-center mb-6">
                <span className="text-7xl">👨‍💻</span>
              </div>
            )}
            <h2 className="text-2xl font-bold mb-1">{profile.name}</h2>
            <p className="text-primary-100 mb-6">{profile.title}</p>
            
            <div className="flex space-x-3 mb-6">
              {profile.github && (
                <a 
                  href={profile.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              )}
              {profile.linkedin && (
                <a 
                  href={profile.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              )}
              {profile.email && (
                <a 
                  href={`mailto:${profile.email}`}
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              )}
            </div>
            
            {profile.resume_url && (
              <a 
                href={profile.resume_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-primary-600 hover:bg-primary-50 px-4 py-2 rounded-lg font-medium transition-colors mt-2"
              >
                <FaDownload className="mr-2" /> Download Resume
              </a>
            )}
          </div>
          
          <hr className="border-white/20 my-6" />
          
          <div className="space-y-4">
            {profile.email && (
              <div className="flex items-center">
                <FaEnvelope className="mr-3 flex-shrink-0" />
                <span className="text-sm overflow-hidden text-ellipsis">{profile.email}</span>
              </div>
            )}
            {profile.phone && (
              <div className="flex items-center">
                <FaPhone className="mr-3 flex-shrink-0" />
                <span className="text-sm">{profile.phone}</span>
              </div>
            )}
            {profile.location && (
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-3 flex-shrink-0" />
                <span className="text-sm">{profile.location}</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Right section with bio and details */}
        <div className="md:w-2/3 p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About Me</h3>
          <div className="prose prose-lg text-gray-700 dark:text-gray-300 max-w-none mb-8">
            <p>{profile.bio || "Professional developer with experience in building web applications and websites. Skilled in frontend and backend technologies, with a focus on creating intuitive and responsive user interfaces."}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded mr-2">
                  <FaCode className="text-primary-600 dark:text-primary-400" />
                </span>
                Technical Skills
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>JavaScript / TypeScript</li>
                <li>React.js / Next.js</li>
                <li>Node.js / Express</li>
                <li>HTML5 / CSS3 / Tailwind CSS</li>
                <li>MongoDB / PostgreSQL</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded mr-2">
                  <FaStar className="text-primary-600 dark:text-primary-400" />
                </span>
                Soft Skills
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>Project Management</li>
                <li>Team Collaboration</li>
                <li>Problem Solving</li>
                <li>Time Management</li>
                <li>Communication</li>
              </ul>
            </div>
          </div>
          
          <hr className="my-8 border-gray-200 dark:border-gray-700" />
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Languages</h4>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-gray-100 dark:bg-dark-200 rounded-full text-gray-700 dark:text-gray-300">English (Native)</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-dark-200 rounded-full text-gray-700 dark:text-gray-300">Spanish (Fluent)</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-dark-200 rounded-full text-gray-700 dark:text-gray-300">French (Basic)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
// Updated on Wed Apr 9 14:50:00 2025 +0000

// Updated on Wed Apr 9 15:10:00 2025 +0000
