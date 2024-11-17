'use client'; // Mark this file as a Client Component

import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Replace this with your form submission logic (e.g., sending to email)
    const res = await fetch('/api/nisarmuskan14@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    const result = await res.json();
    
    setIsSubmitting(false);
    if (result.success) {
      setResponseMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } else {
      setResponseMessage('Error sending message.');
    }
  };

  return (
    <main className="w-screen h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/main-bg.webp')" }}
    >
      <div className="flex justify-center items-center h-full bg-black bg-opacity-50">
        <div className="max-w-3xl w-full p-8 border border-purple-400 rounded-lg shadow-lg  bg-opacity-80">
          <h2 className="text-3xl font-extrabold text-center text-purple-400 mb-6">Contact Us</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 bg-purple-500 text-white rounded-md mt-4 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {responseMessage && (
            <div className="mt-4 text-center text-sm text-gray-600">{responseMessage}</div>
          )}

          {/* Follow Us Section */}
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://www.linkedin.com/in/muskan-nisar-3135a42b3" target="_blank" className="text-4xl text-blue-600 hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="https://github.com/muskann12" target="_blank" className="text-4xl text-gray-800 hover:text-gray-600">
              <FaGithub />
            </a>
            <a href="mailto:nisarmuskan14@gmail.com" className="text-4xl text-red-600 hover:text-red-400">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;