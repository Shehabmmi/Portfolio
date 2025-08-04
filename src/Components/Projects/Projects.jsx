import React from 'react'
import freshCartImage from '../../assets/freshCart.png'

export default function Projects() {
  const projects = [
    {
      title: "Fresh-Cart",
      subtitle: "React E-commerce App",
      description: "A fully responsive e-commerce platform built with React, JWT, React Router, and more. Features product browsing, user authentication, and secure checkout.",
      technologies: ["React", "JWT", "React Router", "CSS3", "JavaScript"],
      image: freshCartImage,
      github: "https://github.com/Shehabmmi",
      featured: true
    },
    {
      title: "Yummy Meals",
      subtitle: "Recipe Web App",
      description: "A responsive food recipe web app that fetches data from TheMealDB API. Includes search functionality, meal categories, and dynamic recipe pages.",
      technologies: ["JavaScript", "API Integration", "HTML5", "CSS3", "Responsive Design"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/Shehabmmi",
      featured: true
    },
    {
      title: "Portfolio Website",
      subtitle: "Personal Portfolio",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and a clean design.",
      technologies: ["React", "Tailwind CSS", "AOS", "Responsive Design"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/Shehabmmi",
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            📌 Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className={`bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                project.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {project.featured && (
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                  ⭐ Featured Project
                </div>
              )}
              
              <div className="relative overflow-hidden">
                {project.image.startsWith('/api/placeholder') ? (
                  <div className="w-full h-52 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <i className="fas fa-code text-6xl text-white opacity-50"></i>
                  </div>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-52 object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors duration-200"
                  >
                    <i className="fab fa-github text-xl"></i>
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-blue-400 text-sm mb-3">{project.subtitle}</p>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-center py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    <i className="fab fa-github mr-2"></i>Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div data-aos="fade-up" data-aos-delay="600" className="text-center mt-12">
          <a 
            href="https://github.com/Shehabmmi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <i className="fab fa-github mr-2"></i>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}