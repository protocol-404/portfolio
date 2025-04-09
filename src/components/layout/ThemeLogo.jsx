import React from 'react';

const ThemeLogo = ({ theme, className = '' }) => {
  // Colors based on theme
  const primaryFill = theme === 'dark' ? 'url(#grad2)' : 'url(#grad1)';
  const primaryStroke = theme === 'dark' ? '#6366F1' : '#4F46E5';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" className={`h-8 md:h-10 ${className}`}>
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#4F46E5", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#6366F1", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#6366F1", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#818CF8", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Background shape */}
      <rect 
        x="10" y="10" 
        width="300" height="80" 
        rx="8" ry="8" 
        fill="none" 
        strokeWidth="2" 
        stroke={primaryStroke} 
        opacity="0.1"
      />
      
      {/* Left side element (code brackets) */}
      <g transform="translate(30, 50)">
        <path 
          d="M0,20 L-15,0 L0,-20" 
          fill="none" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          stroke={primaryStroke}
        />
        <path 
          d="M30,20 L45,0 L30,-20" 
          fill="none" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          stroke={primaryStroke}
        />
        <path 
          d="M10,-25 L20,25" 
          fill="none" 
          strokeWidth="2" 
          strokeLinecap="round" 
          stroke={primaryStroke}
        />
      </g>
      
      {/* Name and title */}
      <g transform="translate(160, 50)">
        <text 
          x="0" y="-10" 
          textAnchor="middle" 
          fontFamily="'Montserrat', 'Arial', sans-serif" 
          fontWeight="700" 
          fontSize="28"
          fill={primaryFill}
        >
          OUSAMA
        </text>
        <text 
          x="0" y="15" 
          textAnchor="middle" 
          fontFamily="'Montserrat', 'Arial', sans-serif" 
          fontWeight="700" 
          fontSize="14"
          fill={primaryFill}
        >
          WEB DEVELOPER
        </text>
        
        {/* Underline */}
        <line 
          x1="-60" y1="25" 
          x2="60" y2="25" 
          strokeWidth="2" 
          stroke={primaryStroke} 
          opacity="0.6"
        />
      </g>
      
      {/* Decorative elements */}
      <circle 
        cx="280" cy="30" r="8" 
        fill={primaryFill} 
        opacity="0.7"
      />
      <circle 
        cx="280" cy="70" r="4" 
        fill={primaryFill} 
        opacity="0.4"
      />
      
      {/* Web elements */}
      <g transform="translate(255, 50)">
        <path 
          d="M0,0 L10,10 L20,0 L10,-10 Z" 
          fill={primaryFill} 
          opacity="0.5"
        />
      </g>
    </svg>
  );
};

export default ThemeLogo;
// Updated on Wed Apr 9 08:05:00 2025 +0000

// Updated on Wed Apr 9 08:45:00 2025 +0000
