import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div data-aos="fade-up">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Shehab Mohamed
            </h3>
            <p className="text-gray-400 mb-4">
              Frontend React Developer passionate about creating amazing user experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Shehabmmi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="mailto:shehabmmi29@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                <i className="fas fa-envelope text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Technologies */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h4 className="text-lg font-semibold text-white mb-4">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux'].map((tech) => (
                <span key={tech} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Shehab Mohamed. Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
