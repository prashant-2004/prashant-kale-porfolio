import React from 'react';
import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-lighter border-t border-purple/10 py-12 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-purple">Prashant </span>Kale
            </h3>
            <p className="text-white/70 max-w-md mb-6">
              Software Developer & AI Engineer with expertise in web and mobile app development, 
              passionate about creating innovative solutions and exploring new technologies.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/prashant-2004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-dark border border-purple/20 text-white hover:text-purple hover:border-purple transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/prashant-sanjay-kale" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-dark border border-purple/20 text-white hover:text-purple hover:border-purple transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:prashant0406@email.com" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-dark border border-purple/20 text-white hover:text-purple hover:border-purple transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href="tel:+919067807765" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-dark border border-purple/20 text-white hover:text-purple hover:border-purple transition-colors"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'AI Projects', href: '#ai-projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Certifications', href: '#certifications' },
                { name: 'Contact', href: '#contact' },
              ].map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-white/70 hover:text-purple transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-purple/10 text-center">
          <p className="text-white/60 flex items-center justify-center">
            <span>© {new Date().getFullYear()} Prashant Kale. All rights reserved.</span>
            <span className="ml-2 mr-2">|</span>
            <span className="flex items-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" /> by Prashant Kale
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
