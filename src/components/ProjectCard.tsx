
import React from 'react';
import { Code, Brain, Github, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../types/ProjectTypes';

interface ProjectCardProps {
  project: ProjectItem;
  projectType: 'software' | 'ai';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, projectType }) => {
  return (
    <div className="bg-dark border border-purple/20 rounded-lg overflow-hidden hover:border-purple/40 transition-all duration-300 group">
      <div className="p-6 relative">
        {/* Gradient overlay that appears on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple/5 to-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-dark-lighter border border-purple/30 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              {projectType === 'software' ? (
                <Code size={20} className="text-purple" />
              ) : (
                <Brain size={20} className="text-purple" />
              )}
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-purple transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-white/70 mb-4 group-hover:text-white/90 transition-colors">
            {project.description}
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-teal mb-2">Key Features:</h4>
              <ul className="space-y-2">
                {project.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start group/item">
                    <span className="text-purple mr-2 mt-1 group-hover/item:scale-110 transition-transform">•</span>
                    <span className="text-white/80 group-hover/item:text-white/90 transition-colors">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-teal mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="text-xs bg-dark-lighter border border-purple/30 rounded-full px-3 py-1 text-white/80 transform hover:scale-105 hover:border-purple transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {(project.repoUrl || project.liveUrl) && (
              <div className="flex gap-4 pt-2">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-purple transition-all duration-200 flex items-center gap-1 text-sm group/link"
                  >
                    <Github size={16} className="transform group-hover/link:scale-110 transition-transform" />
                    <span>Repository</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-purple transition-all duration-200 flex items-center gap-1 text-sm group/link"
                  >
                    <ExternalLink size={16} className="transform group-hover/link:scale-110 transition-transform" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;