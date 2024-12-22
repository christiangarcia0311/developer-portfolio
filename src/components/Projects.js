import React from 'react';
import ImageProj from '../assets/proj.jpg';
// Example project data (replace these with actual project details)
const projects = [
  {
    name: "Email Sender API",
    description: "Email Sender API is designed to facilitate the process of sending One-Time Passwords (OTPs) and code verification via email. This library is ideal for web applications that require a secure and straightforward method to authenticate users through email-based account verification.",
    techStack: "Flask, SMTP, JSON",
    demoLink: "http://emailsender000.pythonanywhere.com/",
    repoLink: "https://github.com/christiangarcia0311/email-sender-verifier",
    image: ImageProj
  }
];

const Projects = () => {
  return (
    <div id="projects" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img src={project.image} alt={project.name} className="w-full h-64 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
              <p className="text-lg mb-4">{project.description}</p>
              <p className="text-sm text-gray-400 mb-4">Tech Stack: {project.techStack}</p>
              <div className="space-x-4">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition duration-300">Live Demo</a>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition duration-300">GitHub Repo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
