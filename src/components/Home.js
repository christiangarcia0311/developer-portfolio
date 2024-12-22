import React from 'react';
import Photo from '../assets/photo.jpeg'; 

const Home = () => {
  return (
    <div id="home" className="h-screen bg-dark flex items-center justify-center">
      <div className="container mx-auto px-4 py-12 md:flex items-center space-y-6 md:space-y-0">
        {/* Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img 
            src={Photo} 
            alt="Profile" 
            className="w-40 h-40 md:w-56 md:h-56 rounded-full mx-auto md:mx-32"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Hello, I'm <span className="text-blue-400">Christian</span></h1>
          <p className="text-xl md:text-2xl text-white">Backend Developer</p>
          <p className="text-lg md:text-xl text-white max-w-lg mx-auto md:mx-0 mt-5">
          A Computer Science student learning and growing in backend development. I have experience working with backend frameworks, databases, and API development. I enjoy creating reliable and secure server-side applications and improving my skills in managing data systems and building scalable solutions.
          </p>

          {/* Social Links */}
          <div className="space-x-4 mt-6 flex justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/christian-garcia-686805325/" target="_blank" className="text-amber-500 hover:text-white transition duration-300">
              <i className="fab fa-linkedin-in text-xl md:text-2xl"></i>
            </a>
            <a href="https://github.com/christiangarcia0311" target="_blank" className="text-amber-500 hover:text-white transition duration-300">
              <i className="fab fa-github text-xl md:text-2xl"></i>
            </a>
            <a href="mailto:iyaniyan03112003@gmail.com" className="text-amber-500 hover:text-white transition duration-300">
              <i className="fas fa-envelope text-xl md:text-2xl"></i>
            </a>
          </div>

          {/* Call-to-Action Button */}
          <div className="mt-8">
            <a 
              href="#projects" 
              className="inline-block bg-blue-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="inline-block bg-transparent text-blue-500 font-semibold py-3 px-6 ml-4 border-2 border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
