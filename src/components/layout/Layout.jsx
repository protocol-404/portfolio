import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { fetchProfile } from '../services/api.jsx';

const Layout = ({ children, toggleTheme, theme }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const profileData = await fetchProfile();
        setProfile(profileData);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
        // Set a fallback profile if the API fails
        setProfile({
          name: "Oujaber Ousama",
          title: "Web Developer",
          email: "email@example.com",
          github: "https://github.com/example",
          linkedin: "https://linkedin.com/in/example"
        });
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-white dark:bg-dark-200">
        <div className="relative flex flex-col items-center">
          <div className="w-16 h-16 border-t-4 border-b-4 border-primary-600 dark:border-primary-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-primary-600 dark:text-primary-500 text-lg font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header profile={profile} toggleTheme={toggleTheme} theme={theme} />
      {/* Add pt-24 (padding-top) to push content below the fixed header */}
      <main className="flex-grow opacity-100 transition-opacity duration-500 ease-in-out pt-24">
        <div className="container py-8">
          {children}
        </div>
      </main>
      <Footer profile={profile} />
    </div>
  );
};

export default Layout;
// Updated on Mon Apr 7 17:20:00 2025 +0000

// Updated on Tue Apr 8 08:30:00 2025 +0000
