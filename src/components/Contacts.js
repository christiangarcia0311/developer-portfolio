import React, { useState } from 'react';

const Contacts = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission (Make API request to Flask backend)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Make POST request to Flask API
      const response = await fetch('https://emailsender000.pythonanywhere.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_reciever: formData.email,
          msg_subject: formData.subject,
          msg_body: formData.message,
          sender_name: formData.name
        })
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
      } else {
        setError(data.error || 'Failed to send message');
      }
    } catch (error) {
      setError('An error occurred while sending the message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-semibold text-gray-400">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-semibold text-gray-400">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            </div>

            {/* Subject Input */}
            <div className="flex flex-col">
              <label htmlFor="subject" className="text-sm font-semibold text-gray-400">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="p-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Message Input */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-semibold text-gray-400">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="p-3 mt-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-blue-500 text-white py-3 px-8 rounded-md hover:bg-blue-600 transition duration-300"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>

        {/* Error or Success Message */}
        {error && (
          <div className="mt-4 text-red-500 text-center">
            <p>{error}</p>
          </div>
        )}
        {success && (
          <div className="mt-4 text-green-500 text-center">
            <p>Message sent successfully!</p>
          </div>
        )}

        {/* Contact Info */}
        <div className="text-center mt-12">
          <p className="text-xl font-semibold text-gray-400">Or reach me directly:</p>
          <p className="text-xl text-white mt-2">Email: iyaniyan03112003@gmail.com</p>
          <p className="text-xl text-white mt-2">Phone: +63 967 6592 619</p>

          {/* Social Media Links */}
          <div className="mt-6 space-x-6">
            <a href="https://www.linkedin.com/in/christian-garcia-686805325/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition duration-300">
              <i className="fab fa-linkedin-in text-3xl"></i>
            </a>
            <a href="https://github.com/christiangarcia0311/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
              <i className="fab fa-github text-3xl"></i>
            </a>
            <a href="mailto:iyaniyan03112003@gmail.com" className="text-red-500 hover:text-white transition duration-300">
              <i className="fas fa-envelope text-3xl"></i>
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-2xl font-semibold text-white">Let’s work together!</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
