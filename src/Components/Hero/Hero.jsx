import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi 👋, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Shehab Mohamed
            </span>
          </h1>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="200">
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A passionate <span className="text-blue-400 font-semibold">Front-End React Developer</span> from Egypt
          </p>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="300">
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            🎯 Focused on UI/UX, Performance, and Responsive Design<br/>
            💡 Building clean and dynamic user experiences
          </p>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="400" className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="500" className="mt-12 flex justify-center space-x-6">
          <a href="https://github.com/Shehabmmi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
            <i className="fab fa-github text-3xl"></i>
          </a>
          <a href="mailto:shehabmmi29@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
            <i className="fas fa-envelope text-3xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/shehab-mohamed-ab51451a7/" target="_blank" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
            <i className="fab fa-linkedin text-3xl"></i>
          </a>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>
    </section>
  )
}