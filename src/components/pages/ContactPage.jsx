import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { fetchProfile, submitContactForm } from '../services/api';

const ContactPage = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const getProfile = async () => {
      const profileData = await fetchProfile();
      setProfile(profileData);
      setLoading(false);
    };

    getProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset any previous form status
    setFormStatus(null);
    
    // Start loading animation
    setSubmitting(true);
    setSubmitted(false);
    
    try {
      const response = await submitContactForm(formData);
      
      if (response.success) {
        // End loading animation and start success animation
        setSubmitting(false);
        setSubmitted(true);
        
        setFormStatus({
          type: 'success',
          message: 'Thank you for your message! I will get back to you soon.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        // Reset submitted state after 2 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 2000);
      }
    } catch (error) {
      let errorMessage = 'There was a problem sending your message. Please try again.';
      
      if (error.response && error.response.data && error.response.data.errors) {
        const errors = error.response.data.errors;
        const errorList = Object.values(errors).flat();
        errorMessage = errorList.join('\n');
      }
      
      setSubmitting(false);
      setFormStatus({
        type: 'error',
        message: errorMessage
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="relative flex flex-col items-center">
          <div className="w-16 h-16 border-t-4 border-b-4 border-primary-600 dark:border-primary-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-primary-600 dark:text-primary-500 text-lg font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact Me</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl">
        Feel free to reach out if you have any questions or would like to work together.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-5">
          <div className="card h-full">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h2>
              
              {profile && (
                <ul className="space-y-6">
                  {profile.email && (
                    <li>
                      <div className="flex items-start">
                        <div className="bg-primary-600 rounded-full p-3 mr-4 text-white">
                          <FaEnvelope size={20} />
                        </div>
                        <div>
                          <strong className="block text-gray-900 dark:text-white text-lg mb-1">Email</strong>
                          <a 
                            href={`mailto:${profile.email}`}
                            className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
                          >
                            {profile.email}
                          </a>
                        </div>
                      </div>
                    </li>
                  )}
                  
                  {profile.github && (
                    <li>
                      <div className="flex items-start">
                        <div className="bg-gray-900 dark:bg-gray-700 rounded-full p-3 mr-4 text-white">
                          <FaGithub size={20} />
                        </div>
                        <div>
                          <strong className="block text-gray-900 dark:text-white text-lg mb-1">GitHub</strong>
                          <a 
                            href={profile.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
                          >
                            {profile.github.replace('https://github.com/', '')}
                          </a>
                        </div>
                      </div>
                    </li>
                  )}
                  
                  {profile.linkedin && (
                    <li>
                      <div className="flex items-start">
                        <div className="bg-blue-600 rounded-full p-3 mr-4 text-white">
                          <FaLinkedin size={20} />
                        </div>
                        <div>
                          <strong className="block text-gray-900 dark:text-white text-lg mb-1">LinkedIn</strong>
                          <a 
                            href={profile.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
                          >
                            {profile.linkedin.replace('https://www.linkedin.com/in/', '')}
                          </a>
                        </div>
                      </div>
                    </li>
                  )}
                </ul>
              )}
            </div>
          </div>
        </div>
        
        <div className="md:col-span-7">
          <div className="card">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Message</h2>
              
              {formStatus && (
                <div 
                  className={`p-4 mb-6 rounded-lg animate-fade-in ${
                    formStatus.type === 'success' 
                      ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-l-4 border-green-500' 
                      : 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-l-4 border-red-500'
                  }`}
                >
                  <div className="flex items-center">
                    {formStatus.type === 'success' ? (
                      <svg className="h-5 w-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    )}
                    <span>{formStatus.message}</span>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-100 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-100 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message"
                    name="message" 
                    rows={5} 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-100 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    required 
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={submitting}
                  className={`w-full py-3 px-6 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center
                    ${!submitting && !submitted ? 'bg-primary-600 hover:bg-primary-700' : ''}
                    ${submitting ? 'bg-gray-400 cursor-not-allowed' : ''}
                    ${submitted ? 'bg-green-600' : ''}
                  `}
                >
                  {!submitting && !submitted && (
                    <>
                      <FaPaperPlane className="mr-2" /> Send Message
                    </>
                  )}
                  
                  {submitting && (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  )}
                  
                  {submitted && (
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Sent Successfully!
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
// Updated on Wed Apr 9 16:25:00 2025 +0000

// Updated on Wed Apr 9 18:20:00 2025 +0000
