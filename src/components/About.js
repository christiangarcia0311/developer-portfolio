import React from 'react';

const About = () => {
  return (
    <div id="about" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>

        {/* Background Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
          <p className="text-lg leading-relaxed">
          As a third-year computer science student, I’ve had the opportunity to explore coding, 
          web development, and problem-solving through a variety of projects. Over the years, 
          I’ve worked on several website projects, both personal and freelance, which have helped 
          me gain practical experience and deepen my understanding of backend development. Taking on 
          commissions and small projects has been a key part of my journey, allowing me to apply what I
          ’ve learned and continue developing my skills in building efficient, high-performance systems.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 text-center">
            <li className="bg-gray-800 p-4 rounded-md">⚡ Backend Development</li>
            <li className="bg-gray-800 p-4 rounded-md">⚡ Version Control (Git & GitHub)</li>
            <li className="bg-gray-800 p-4 rounded-md">⚡ Database Management</li>
            <li className="bg-gray-800 p-4 rounded-md">⚡ API Design & Integration</li>
            <li className="bg-gray-800 p-4 rounded-md">⚡ Testing & Debugging</li>
            <li className="bg-gray-800 p-4 rounded-md">⚡ Web Security Practices</li>
            <li className="bg-gray-800 p-4 rounded-md">⚡ Cloud Deployment & Management</li>
            <li className="bg-gray-800 p-4 rounded-md">⚡ Data Structures & Algorithms</li>
          </ul>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-4 text-center">
            <li className="bg-gray-800 p-4 rounded-md">⚡ Programming (Python, JavaScript, PHP)</li>
            <li className="bg-gray-800 p-4 rounded-md">⚡ Frameworks (Django, Flask, ReactJS) </li>
            <li className="bg-gray-800 p-4 rounded-md">⚡ Database (MySQL, PostgreSQL, SQLite)</li>
            <li className="bg-gray-800 p-4 rounded-md">⚡ Version Control (Git, Github)</li>
            <li className="bg-gray-800 p-4 rounded-md">⚡ Cloud Platforms (PythonAnywhere, Koyeb, InfinityFree)</li>
            <li className="bg-gray-800 p-4 rounded-md">⚡ API Integration (RESTful API, FastAPI)</li>
          </ul>
        </div>

        {/* Education Section */}
        <div className="mb-5">
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <div className="bg-gray-800 p-6 rounded-md">
            <h4 className="text-xl font-semibold">Science Technology Engineering Mathematics</h4>
            <p className="text-lg mt-2">Surigao Del Norte National Highschool, 2019-2021</p>
          </div>
        </div>
        <div className="mb-12">
          <div className="bg-gray-800 p-6 rounded-md">
            <h4 className="text-xl font-semibold">Bachelor of Science in Computer Science</h4>
            <p className="text-lg mt-2">Surigao Del Norte State University, 2021-2026</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
