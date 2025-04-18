
import React from 'react';
import { Code, Brain, Github, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../types/ProjectTypes';

interface ProjectCardProps {
  project: ProjectItem;
  projectType: 'software' | 'ai';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, projectType }) => {
  return (
    <div className="bg-dark border border-purple/20 rounded-lg overflow-hidden hover:border-purple/40 transition-colors duration-300">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          {projectType === 'software' ? (
            <Code size={24} className="text-purple" />
          ) : (
            <Brain size={24} className="text-purple" />
          )}
          <h3 className="text-xl font-bold text-white">
            {project.title}
          </h3>
        </div>

        <p className="text-white/70 mb-4">
          {project.description}
        </p>

        <div className="space-y-4">
          {/* Project details */}
          <div>
            <h4 className="text-sm font-semibold text-teal mb-2">Key Features:</h4>
            <ul className="space-y-2">
              {project.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start text-sm">
                  <span className="text-purple mr-2 mt-1">•</span>
                  <span className="text-white/80">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div>
            <h4 className="text-sm font-semibold text-teal mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className="text-xs bg-dark-lighter border border-purple/30 rounded-full px-3 py-1 text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {(project.repoUrl || project.liveUrl) && (
            <div className="flex gap-4 pt-2">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-purple transition-colors flex items-center gap-1 text-sm"
                >
                  <Github size={16} />
                  <span>Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-purple transition-colors flex items-center gap-1 text-sm"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
