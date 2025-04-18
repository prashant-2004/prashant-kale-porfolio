
export interface ProjectItem {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
  type: 'software' | 'ai';
  bullets: string[];
}
