
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import ParticleBackground from '@/components/ParticleBackground';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  // Add smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closestAnchor = target.closest('a');
      
      if (closestAnchor && closestAnchor.hash && closestAnchor.pathname === window.location.pathname) {
        e.preventDefault();
        const targetElement = document.querySelector(closestAnchor.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset for fixed header
            behavior: 'smooth'
          });
          
          // Update URL without scrolling
          history.pushState(null, '', closestAnchor.hash);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-dark text-white relative overflow-hidden">
      <ParticleBackground />
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects projectType="software" />
        <Projects projectType="ai" />
        <Skills />
        <Certifications />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
