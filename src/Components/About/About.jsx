import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-2xl">
              <div className="bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">🎯 Aspiring Front-End Developer</h3>
                <p className="text-gray-300 mb-6">
                  Passionate about creating exceptional user experiences with React, JavaScript, and TypeScript. 
                  I focus on building clean, responsive, and performant web applications.
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-purple-400">💼 What I Focus On</h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center"><i className="fas fa-check text-green-400 mr-3"></i>Frontend Technologies & Modern Frameworks</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-400 mr-3"></i>JavaScript, DOM Manipulation & React Architecture</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-400 mr-3"></i>Git, GitHub & Project Version Control</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-400 mr-3"></i>UI/UX Design & Responsive Development</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div data-aos="fade-left">
            <h3 className="text-3xl font-bold mb-6 text-center">🚀 My Journey</h3>
            <div className="space-y-6">
              <div className="bg-gray-700 p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-4"></div>
                  <h4 className="text-xl font-semibold text-green-400">✅ Mastered Core Technologies</h4>
                </div>
                <p className="text-gray-300 ml-7">HTML5, CSS3, JavaScript, Bootstrap, and Tailwind CSS</p>
              </div>
              
              <div className="bg-gray-700 p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-4"></div>
                  <h4 className="text-xl font-semibold text-blue-400">🔄 Advanced React Development</h4>
                </div>
                <p className="text-gray-300 ml-7">React.js, React Router, and Redux Toolkit</p>
              </div>
              
              <div className="bg-gray-700 p-6 rounded-lg transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mr-4"></div>
                  <h4 className="text-xl font-semibold text-purple-400">🌐 Currently Learning</h4>
                </div>
                <p className="text-gray-300 ml-7">TypeScript and Next.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}