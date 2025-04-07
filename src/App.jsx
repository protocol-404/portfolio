import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import HomePage from './components/pages/HomePage.jsx';
import ProjectsPage from './components/pages/ProjectsPage.jsx';
import ProjectDetailPage from './components/pages/ProjectDetailPage.jsx';
import SkillsPage from './components/pages/SkillsPage.jsx';
import AboutPage from './components/pages/AboutPage.jsx';
import ContactPage from './components/pages/ContactPage.jsx';
import './index.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <Layout toggleTheme={toggleTheme} theme={theme}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
// Updated on Mon Apr 7 09:15:00 2025 +0000
