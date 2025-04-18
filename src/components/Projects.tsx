
import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { softwareProjects, aiProjects } from '../data/projectsData';

interface ProjectsProps {
  projectType: 'software' | 'ai';
}

const Projects: React.FC<ProjectsProps> = ({ projectType }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    projectRefs.current.forEach((project) => {
      if (project) observer.observe(project);
    });
    
    return () => observer.disconnect();
  }, []);
  
  const projectsData = projectType === 'software' ? softwareProjects : aiProjects;
  
  return (
    <section 
      ref={sectionRef}
      id={projectType === 'software' ? 'projects' : 'ai-projects'} 
      className="py-20 bg-dark-lighter relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-teal/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {projectType === 'software' ? 'Software Development Projects' : 'AI Engineering Projects'}
          </h2>
          <p className="text-white/70 max-w-2xl mb-12">
            {projectType === 'software' 
              ? 'A showcase of my software development projects, featuring web and mobile applications built with modern technologies.'
              : 'Exploring the intersection of AI and practical applications, these projects demonstrate my skills in machine learning and AI engineering.'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className="opacity-0 transform hover:scale-[1.02] transition-all duration-300 ease-out"
              style={{ 
                animationDelay: `${0.2 * index}s`,
              }}
            >
              <ProjectCard 
                project={project}
                projectType={projectType}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;