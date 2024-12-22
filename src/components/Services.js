import React from 'react';

const Services = () => {
  return (
    <div id="services" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-8">My Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1: Backend Development */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <i className="fas fa-cogs text-4xl mb-4 text-blue-500"></i>
            <h3 className="text-2xl font-semibold mb-4">Backend Development</h3>
            <p className="text-lg">
              I specialize in building and maintaining backend systems using frameworks like Node.js, Django, Flask, and FastAPI. With a focus on clean, maintainable code, I create efficient and scalable backend architectures to support your applications.
            </p>
          </div>

          {/* Service 2: Database Management */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <i className="fas fa-database text-4xl mb-4 text-blue-500"></i>
            <h3 className="text-2xl font-semibold mb-4">Database Management</h3>
            <p className="text-lg">
              I work with MySQL and PostgreSQL to design efficient databases and create optimized queries. I help manage your application's data, ensuring it's easily accessible and well-organized for smooth performance.
            </p>
          </div>

          {/* Service 3: Cloud Hosting */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <i className="fas fa-cloud text-4xl mb-4 text-blue-500"></i>
            <h3 className="text-2xl font-semibold mb-4">Cloud Hosting</h3>
            <p className="text-lg">
              I assist with deploying applications to cloud platforms such as Heroku, PythonAnywhere, Koyeb, and InfinityFree. By setting up environments for your apps, I ensure reliable and scalable deployments with minimal downtime.
            </p>
          </div>

          {/* Service 4: API Management */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <i className="fas fa-plug text-4xl mb-4 text-blue-500"></i>
            <h3 className="text-2xl font-semibold mb-4">API Management</h3>
            <p className="text-lg">
              I help design, build, and manage APIs that connect different parts of your application. Whether it's creating RESTful APIs or integrating third-party services, I ensure smooth and reliable communication between systems.
            </p>
          </div>

          {/* Service 5: Version Control */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <i className="fas fa-code-branch text-4xl mb-4 text-blue-500"></i>
            <h3 className="text-2xl font-semibold mb-4">Version Control</h3>
            <p className="text-lg">
              I use Git for version control, enabling effective collaboration and code management. With Git, I ensure that your project’s history is well-maintained and that every change is tracked and documented for easier collaboration.
            </p>
          </div>

          {/* Service 6: Testing */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <i className="fas fa-vial text-4xl mb-4 text-blue-500"></i>
            <h3 className="text-2xl font-semibold mb-4">Testing</h3>
            <p className="text-lg">
              I write and execute tests to ensure your application is bug-free and works as expected. Using tools like Pytest and Node.js testing libraries, I focus on unit tests and functional tests for high-quality, reliable code.
            </p>
          </div>

          {/* Service 7: Debugging */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            <i className="fas fa-bug text-4xl mb-4 text-blue-500"></i>
            <h3 className="text-2xl font-semibold mb-4">Debugging</h3>
            <p className="text-lg">
              I specialize in diagnosing and resolving issues within applications. By utilizing debugging tools, I quickly pinpoint problems, fix bugs, and optimize performance to ensure your application runs smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
