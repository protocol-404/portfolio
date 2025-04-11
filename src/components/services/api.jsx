import axios from 'axios';

const API_URL = 'http://164.92.237.58/api';

const fallbackProjects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A full-stack e-commerce application with user authentication, product catalog, and payment processing.",
    image: "https://via.placeholder.com/600x400",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/username/e-commerce",
    demo: "https://e-commerce-demo.netlify.app"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application to manage tasks, set deadlines, and track progress.",
    image: "https://via.placeholder.com/600x400",
    technologies: ["React", "Redux", "Firebase"],
    github: "https://github.com/username/task-manager",
    demo: "https://task-manager-demo.netlify.app"
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description: "A weather application that provides current and forecasted weather data based on location.",
    image: "https://via.placeholder.com/600x400",
    technologies: ["JavaScript", "API", "HTML/CSS"],
    github: "https://github.com/username/weather-app",
    demo: "https://weather-app-demo.netlify.app"
  }
];

const fallbackSkills = [
  {
    id: 1,
    category: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "Angular"]
  },
  {
    id: 2,
    category: "Backend",
    skills: ["Node.js", "Express", "Django", "Flask", "PHP"]
  },
  {
    id: 3,
    category: "Database",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"]
  },
  {
    id: 4,
    category: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "Heroku", "Figma", "Photoshop"]
  }
];

const fallbackProfile = {
  name: "Oujaber Ousama",
  title: "Full Stack Developer",
  bio: "Passionate developer with over 5 years of experience building web applications. Specialized in creating responsive, user-friendly interfaces and robust backend systems.",
  location: "Midelt, Morocco",
  email: "username@example.com",
  phone: "+212 6 01 44 21 09",
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
  twitter: "https://twitter.com/username",
  avatar: "https://via.placeholder.com/150"
};

export const fetchProjects = async () => {
  try {
    const response = await axios.get(`${API_URL}/projects`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return fallbackProjects;
  }
};

export const fetchSkills = async () => {
  try {
    const response = await axios.get(`${API_URL}/skills`);
    return response.data;
  } catch (error) {
    console.error('Error fetching skills:', error);
    return fallbackSkills;
  }
};

export const fetchProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/profile`);
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return fallbackProfile;
  }
};

export const submitContactForm = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/contact`, formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};