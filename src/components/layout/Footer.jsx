import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = ({ profile }) => {
  const currentYear = new Date().getFullYear();
  
  const socialIcons = [
    {
      name: 'GitHub',
      icon: <FaGithub size={20} />,
      url: profile?.github,
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={20} />,
      url: profile?.linkedin,
      color: 'hover:text-blue-600 dark:hover:text-blue-500'
    },
    {
      name: 'Email',
      icon: <FaEnvelope size={20} />,
      url: profile?.email ? `mailto:${profile.email}` : '#',
      color: 'hover:text-red-500 dark:hover:text-red-400'
    }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-dark-100 pt-12 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {profile?.name?.split(' ')[0] || 'Portfolio'}<span className="text-primary-600 dark:text-primary-500">.</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              {profile?.bio?.substring(0, 120) || 'A passionate developer crafting beautiful and functional web experiences.'}...
            </p>
            <div className="flex gap-4">
              {socialIcons.map((social, index) => (
                social.url && (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`h-10 w-10 rounded-full bg-gray-200 dark:bg-dark-200 flex items-center justify-center text-gray-600 dark:text-gray-400 transition-colors ${social.color} hover:scale-110`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                )
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">Home</a></li>
                <li><a href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">Projects</a></li>
                <li><a href="/skills" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">Skills</a></li>
                <li><a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">About</a></li>
                <li><a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact</h4>
              <ul className="space-y-2">
                {profile?.email && (
                  <li className="text-gray-600 dark:text-gray-400">
                    <a href={`mailto:${profile.email}`} className="hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                      {profile.email}
                    </a>
                  </li>
                )}
                {profile?.phone && (
                  <li className="text-gray-600 dark:text-gray-400">
                    <a href={`tel:${profile.phone}`} className="hover:text-primary-600 dark:hover:text-primary-500 transition-colors">
                      {profile.phone}
                    </a>
                  </li>
                )}
                {profile?.location && (
                  <li className="text-gray-600 dark:text-gray-400">
                    {profile.location}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-dark-200">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 sm:mb-0">
              &copy; {currentYear} {profile?.name || 'Portfolio'}. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
              Made with <FaHeart className="text-red-500 mx-1" /> by {profile?.name?.split(' ')[0] || 'Me'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// Updated on Tue Apr 8 10:45:00 2025 +0000
