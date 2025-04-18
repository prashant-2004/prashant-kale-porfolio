
import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Brain, GraduationCap, Briefcase, Laptop, MessageSquare } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">
              <span className="text-purple">Prashant </span>Kale
            </span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {[
              { name: 'Home', icon: <Code size={18} />, id: 'home' },
              { name: 'Experience', icon: <Briefcase size={18} />, id: 'experience' },
              { name: 'Projects', icon: <Laptop size={18} />, id: 'projects' },
              { name: 'AI Projects', icon: <Brain size={18} />, id: 'ai-projects' },
              { name: 'Skills', icon: <Code size={18} />, id: 'skills' },
              { name: 'Certifications', icon: <GraduationCap size={18} />, id: 'certifications' },
              { name: 'Contact', icon: <MessageSquare size={18} />, id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center text-white/80 hover:text-purple transition-colors group"
              >
                <span className="mr-2 group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span className="relative overflow-hidden">
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
                </span>
              </button>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-purple transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-dark-lighter shadow-lg border-t border-purple/20 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4 px-4">
              {[
                { name: 'Home', icon: <Code size={18} />, id: 'home' },
                { name: 'Experience', icon: <Briefcase size={18} />, id: 'experience' },
                { name: 'Projects', icon: <Laptop size={18} />, id: 'projects' },
                { name: 'AI Projects', icon: <Brain size={18} />, id: 'ai-projects' },
                { name: 'Skills', icon: <Code size={18} />, id: 'skills' },
                { name: 'Certifications', icon: <GraduationCap size={18} />, id: 'certifications' },
                { name: 'Contact', icon: <MessageSquare size={18} />, id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center text-white/80 hover:text-purple p-2 transition-colors"
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
