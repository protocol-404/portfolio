import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import ThemeLogo from './ThemeLogo';

const Header = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 dark:bg-dark-200/90 backdrop-blur-md shadow-lg py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <ThemeLogo theme={theme} className="mr-2" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" end
            className={({ isActive }) => 
              `px-4 py-2 rounded-lg font-medium transition-colors ${
                isActive 
                  ? 'text-primary-600 dark:text-primary-500 bg-primary-50 dark:bg-dark-100' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-dark-100'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink to="/projects"
            className={({ isActive }) => 
              `px-4 py-2 rounded-lg font-medium transition-colors ${
                isActive 
                  ? 'text-primary-600 dark:text-primary-500 bg-primary-50 dark:bg-dark-100' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-dark-100'
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink to="/skills"
            className={({ isActive }) => 
              `px-4 py-2 rounded-lg font-medium transition-colors ${
                isActive 
                  ? 'text-primary-600 dark:text-primary-500 bg-primary-50 dark:bg-dark-100' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-dark-100'
              }`
            }
          >
            Skills
          </NavLink>
          <NavLink to="/about"
            className={({ isActive }) => 
              `px-4 py-2 rounded-lg font-medium transition-colors ${
                isActive 
                  ? 'text-primary-600 dark:text-primary-500 bg-primary-50 dark:bg-dark-100' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-dark-100'
              }`
            }
          >
            About
          </NavLink>
          <NavLink to="/contact"
            className={({ isActive }) => 
              `px-4 py-2 rounded-lg font-medium transition-colors ${
                isActive 
                  ? 'text-primary-600 dark:text-primary-500 bg-primary-50 dark:bg-dark-100' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-dark-100'
              }`
            }
          >
            Contact
          </NavLink>
          
          {/* Theme toggle button */}
          <button 
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-full bg-gray-100 dark:bg-dark-100 hover:bg-gray-200 dark:hover:bg-dark-100/80 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <FaSun className="text-yellow-500 h-5 w-5" />
            ) : (
              <FaMoon className="text-gray-700 h-5 w-5" />
            )}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleTheme}
            className="mr-2 p-2 rounded-full bg-gray-100 dark:bg-dark-100 hover:bg-gray-200 dark:hover:bg-dark-100/80 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <FaSun className="text-yellow-500 h-5 w-5" />
            ) : (
              <FaMoon className="text-gray-700 h-5 w-5" />
            )}
          </button>
          
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-lg bg-gray-100 dark:bg-dark-100 hover:bg-gray-200 dark:hover:bg-dark-100/80 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <FaBars className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden bg-white dark:bg-dark-200 shadow-lg overflow-hidden transition-all duration-300 ease-in-out"
        >
          <nav className="container py-4 flex flex-col gap-2">
            <NavLink 
              to="/" 
              end
              onClick={toggleMenu}
              className={({ isActive }) => 
                `px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive 
                    ? 'text-primary-600 dark:text-primary-500 bg-primary-50 dark:bg-dark-100' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-dark-100'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/projects"
              onClick={toggleMenu}
              className={({ isActive }) => 
                `px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive 
                    ? 'text-primary-600 dark:text-primary-500 bg-primary-50 dark:bg-dark-100' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-dark-100'
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink 
              to="/skills"
              onClick={toggleMenu}
              className={({ isActive }) => 
                `px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive 
                    ? 'text-primary-600 dark:text-primary-500 bg-primary-50 dark:bg-dark-100' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-dark-100'
                }`
              }
            >
              Skills
            </NavLink>
            <NavLink 
              to="/about"
              onClick={toggleMenu}
              className={({ isActive }) => 
                `px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive 
                    ? 'text-primary-600 dark:text-primary-500 bg-primary-50 dark:bg-dark-100' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-dark-100'
                }`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/contact"
              onClick={toggleMenu}
              className={({ isActive }) => 
                `px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive 
                    ? 'text-primary-600 dark:text-primary-500 bg-primary-50 dark:bg-dark-100' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-dark-100'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
// Updated on Tue Apr 8 09:10:00 2025 +0000

// Updated on Tue Apr 8 10:15:00 2025 +0000
