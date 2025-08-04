import React from 'react'

export default function Skills() {
  const skills = [
    { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500', level: 95 },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-500', level: 90 },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: 'text-yellow-500', level: 85 },
    { name: 'React', icon: 'fab fa-react', color: 'text-cyan-400', level: 80 },
    { name: 'Tailwind CSS', icon: 'fas fa-wind', color: 'text-teal-400', level: 85 },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: 'text-purple-500', level: 80 },
    { name: 'Git', icon: 'fab fa-git-alt', color: 'text-red-500', level: 75 },
    { name: 'GitHub', icon: 'fab fa-github', color: 'text-gray-400', level: 80 },
    { name: 'Redux', icon: 'fas fa-layer-group', color: 'text-purple-400', level: 70 },
    { name: 'TypeScript', icon: 'fas fa-code', color: 'text-blue-400', level: 60 },
    { name: 'Next.js', icon: 'fas fa-forward', color: 'text-gray-300', level: 50 },
    { name: 'Responsive Design', icon: 'fas fa-mobile-alt', color: 'text-green-400', level: 90 }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            🧰 Tools & <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Here are the technologies I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
            >
              <div className="text-center">
                <i className={`${skill.icon} ${skill.color} text-4xl mb-4 group-hover:scale-110 transition-transform duration-300`}></i>
                <h3 className="text-lg font-semibold mb-3 text-white">{skill.name}</h3>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-600 rounded-full h-2 mb-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}