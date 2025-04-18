import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, Download, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  const roles = ["Software Developer", "App Developer", "AI Engineer"];
  
  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingElement = typingRef.current;
    let timeoutId: NodeJS.Timeout;
    
    const type = () => {
      if (!typingElement) return;
      
      const currentRole = roles[roleIndex % roles.length];
      
      if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }
      
      if (!isDeleting && charIndex === currentRole.length) {
        // Pause at the end of typing
        isDeleting = true;
        timeoutId = setTimeout(type, 1500);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex++;
        timeoutId = setTimeout(type, 500);
      } else {
        timeoutId = setTimeout(type, isDeleting ? 50 : 100);
      }
    };
    
    type();
    
    // Clean up
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  
  const scrollToExperience = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
     
      {/* Background video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-dark/70 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-city-2919-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Animated shapes */}
      <div className="absolute top-[10%] right-[10%] w-64 h-64 rounded-full bg-purple/10 filter blur-3xl animate-float"></div>
      <div className="absolute bottom-[10%] left-[10%] w-56 h-56 rounded-full bg-teal/10 filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-3">
              <p className="text-teal font-medium animate-fade-in">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Prashant Kale
              </h1>
              <div className="flex items-center h-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <span className="text-xl sm:text-2xl text-white/80 mr-3">I'm a</span>
                <div className="relative h-full">
                  <span ref={typingRef} className="text-xl sm:text-2xl text-purple font-bold type-effect animate-typing"></span>
                </div>
              </div>
            </div>
            
            <p className="text-white/70 max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
              A passionate developer specializing in both software development and AI engineering. 
              With experience in frontend technologies, backend development, and AI frameworks, 
              I create innovative solutions that solve real-world problems.
            </p>
            
             {/* Tech stack logos */}
            <div className="flex flex-wrap gap-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="tech-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10" />
              </div>
              <div className="tech-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-10 h-10" />
              </div>
              <div className="tech-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-10 h-10" />
              </div>
              <div className="tech-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-10 h-10" />
              </div>
              <div className="tech-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-10 h-10" />
              </div>
              <div className="tech-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="w-10 h-10" />
              </div>
              <div className="tech-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className="w-10 h-10" />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '1s' }}>
              
              <a 
                href="#contact" 
                className="px-6 py-3 bg-purple hover:bg-purple-dark rounded-lg text-white font-medium flex items-center gap-2 transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(108,99,255,0.5)]"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </a>
              <a 
                href="https://drive.google.com/drive/folders/1kLdddihL5YdgsPdi97T02cjZZFNWVqjG" 
                className="px-6 py-3 bg-dark-lighter hover:bg-dark-lighter/80 border border-purple/20 rounded-lg text-white font-medium flex items-center gap-2 transition-all hover:-translate-y-1"
              >
                <Download size={18} />
                <span>Download CV</span>
              </a>
            </div>
            
            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <a 
                href="https://github.com/prashant-2004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-dark-lighter border border-purple/20 text-white hover:text-purple hover:border-purple transition-colors hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/prashant-sanjay-kale" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-dark-lighter border border-purple/20 text-white hover:text-purple hover:border-purple transition-colors hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:prashant0406@email.com" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-dark-lighter border border-purple/20 text-white hover:text-purple hover:border-purple transition-colors hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+919067807765" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-dark-lighter border border-purple/20 text-white hover:text-purple hover:border-purple transition-colors hover:scale-110"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2 flex items-center justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="w-64 h-64 sm:w-80 sm:h-80 relative">
              {/* Circle image frame with enhanced gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple via-teal to-purple-dark animate-rotate opacity-70"></div>
              <div className="absolute inset-[6px] rounded-full bg-dark"></div>
              <div className="absolute inset-[10px] rounded-full bg-dark-lighter overflow-hidden">
                {/* Placeholder for profile image - replace with actual image */}
                <div className="w-full h-full flex items-center justify-center text-center text-purple text-2xl font-bold">
                  <div className="bg-gradient-to-br from-purple to-teal animate-pulse bg-clip-text text-transparent">
                    PSK
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToExperience}
            className="flex flex-col items-center text-white/60 hover:text-purple transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
