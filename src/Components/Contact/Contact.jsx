import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            📫 Let's <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-8 text-white">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <i className="fas fa-envelope text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <a href="mailto:shehabmmi29@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    shehabmmi29@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <i className="fab fa-github text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">GitHub</h4>
                  <a href="https://github.com/Shehabmmi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                    @Shehabmmi
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <i className="fab fa-linkedin text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/shehab-mohamed-ab51451a7/" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                    Shehab Mohamed
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <i className="fas fa-map-marker-alt text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Location</h4>
                  <p className="text-gray-400">Egypt</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div data-aos="fade-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}