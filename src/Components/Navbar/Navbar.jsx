import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)

      // Determine active section based on scroll position
      const sections = navItems.map(item => item.toLowerCase())
      const scrollPosition = window.scrollY + 100 // Offset for better UX

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
    setActiveSection(sectionId)
  }

  // NavLink-like component for consistent styling
  const NavLink = ({ to, children, isMobile = false }) => {
    const isActive = activeSection === to.toLowerCase()
    
    const baseClasses = isMobile 
      ? "block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-200" 
      : "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative"
    
    const activeClasses = isActive 
      ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg" 
      : "text-gray-300 hover:text-white hover:bg-gray-700"
    
    return (
      <button
        onClick={() => scrollToSection(to.toLowerCase())}
        className={`${baseClasses} ${activeClasses} ${isActive && !isMobile ? 'transform scale-105' : ''}`}
      >
        {children}
        {/* Removed the dot indicator that was here */}
        {isActive && isMobile && (
          <i className="fas fa-chevron-right float-right mt-1 text-sm"></i>
        )}
      </button>
    )
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Shehab Mohamed
            </h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink key={item} to={item}>
                  {item}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink key={item} to={item} isMobile={true}>
                {item}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
