import React, { useState, useEffect } from 'react';
import ProfileSection from '../profile/ProfileSection.jsx';
import { fetchProfile } from '../services/api.jsx';
import { FaBriefcase, FaGraduationCap, FaAward, FaCode } from 'react-icons/fa';

const AboutPage = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const profileData = await fetchProfile();
        setProfile(profileData);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="relative flex flex-col items-center">
          <div className="w-16 h-16 border-t-4 border-b-4 border-primary-600 dark:border-primary-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-primary-600 dark:text-primary-500 text-lg font-medium">Loading profile...</p>
        </div>
      </div>
    );
  }

  // Mock data for the experience, education, and additional sections
  // In a real application, these would come from your API
  const experiences = [
    {
      id: 1,
      title: "Senior Web Developer",
      company: "Tech Solutions Inc.",
      location: "New York, NY",
      date: "2020 - Present",
      description: "Lead developer for client projects, specializing in React.js frontend development and Node.js backend systems. Implemented modern UI/UX designs and improved application performance."
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Digital Creations",
      location: "Boston, MA",
      date: "2017 - 2020",
      description: "Developed responsive websites and web applications for various clients. Worked with JavaScript frameworks and CSS preprocessors to create interactive user experiences."
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Master of Computer Science",
      institution: "University of Technology",
      location: "San Francisco, CA",
      date: "2015 - 2017",
      description: "Specialized in Web Technologies and User Experience Design. Graduated with honors."
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      location: "Chicago, IL",
      date: "2011 - 2015",
      description: "Focused on Software Engineering and Database Systems. Participated in several hackathons and coding competitions."
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2021",
      description: "Validated expertise in developing and maintaining applications on the AWS platform."
    },
    {
      id: 2,
      name: "Professional Web Developer Certification",
      issuer: "Web Development Institute",
      date: "2019",
      description: "Comprehensive certification covering modern web development technologies and best practices."
    }
  ];

  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Me</h1>
        <ProfileSection profile={profile} />
      </section>

      <section>
        <div className="flex items-center space-x-3 mb-8">
          <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
            <FaBriefcase className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Work Experience</h2>
        </div>
        
        <div className="space-y-8">
          {experiences.map(exp => (
            <div key={exp.id} className="card p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className="text-lg text-primary-600 dark:text-primary-400">{exp.company}</p>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <span className="bg-gray-100 dark:bg-dark-200 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300 font-medium">{exp.date}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">{exp.location}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center space-x-3 mb-8">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
            <FaGraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
        </div>
        
        <div className="space-y-8">
          {education.map(edu => (
            <div key={edu.id} className="card p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400">{edu.institution}</p>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <span className="bg-gray-100 dark:bg-dark-200 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300 font-medium">{edu.date}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">{edu.location}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center space-x-3 mb-8">
          <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
            <FaAward className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Certifications</h2>
        </div>
        
        <div className="space-y-8">
          {certifications.map(cert => (
            <div key={cert.id} className="card p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{cert.name}</h3>
                  <p className="text-lg text-green-600 dark:text-green-400">{cert.issuer}</p>
                </div>
                <span className="bg-gray-100 dark:bg-dark-200 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300 font-medium mt-2 md:mt-0">{cert.date}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{cert.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary-50 dark:bg-primary-900/10 p-8 rounded-2xl">
        <div className="flex items-center space-x-3 mb-8">
          <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg">
            <FaCode className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Approach</h2>
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
          <p>I believe in creating clean, efficient, and user-friendly applications that solve real problems. My development philosophy centers around these key principles:</p>
          
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>User-Centered Design</strong>: Understanding the end-user's needs and designing intuitive interfaces that provide excellent user experiences.</li>
            <li><strong>Clean Code</strong>: Writing maintainable, well-documented code that follows best practices and design patterns.</li>
            <li><strong>Continuous Learning</strong>: Staying up-to-date with the latest technologies and constantly improving my skills.</li>
            <li><strong>Problem Solving</strong>: Approaching challenges methodically and finding efficient solutions.</li>
            <li><strong>Collaboration</strong>: Working effectively with designers, product managers, and other developers to deliver high-quality products.</li>
          </ul>
          
          <p className="mt-4">Whether I'm building a complex web application or a simple website, I bring these principles to every project I work on.</p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
// Updated on Wed Apr 9 18:40:00 2025 +0000

// Updated on Wed Apr 9 19:55:00 2025 +0000
