
import React, { useEffect, useRef, useState } from 'react';
import { Code, Server, Database, Monitor, Brain, GitBranch } from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number;
  }[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend Technology",
      icon: <Monitor className="w-6 h-6 text-teal" />,
      skills: [
        { name: "HTML & CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "React.js", level: 85 },
        { name: "Redux", level: 80 },
        { name: "Next.js", level: 75 },
        { name: "Ionic", level: 70 },
        { name: "MaterialUI & Tailwind", level: 85 },
      ]
    },
    {
      name: "Backend Technology",
      icon: <Server className="w-6 h-6 text-teal" />,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 80 },
        { name: "Django", level: 75 },
        { name: "Python", level: 80 },
        { name: "RESTful APIs", level: 85 },
      ]
    },
    {
      name: "Database & Cloud",
      icon: <Database className="w-6 h-6 text-teal" />,
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "SQL", level: 75 },
        { name: "Google Cloud", level: 70 },
        { name: "Firebase", level: 85 },
      ]
    },
    {
      name: "AI Technology",
      icon: <Brain className="w-6 h-6 text-teal" />,
      skills: [
        { name: "TensorFlow & Keras", level: 80 },
        { name: "PyTorch", level: 75 },
        { name: "LangChain & OpenAI", level: 85 },
        { name: "Matplotlib", level: 70 },
        { name: "Microsoft Azure & AWS", level: 75 },
      ]
    },
    {
      name: "Other Skills",
      icon: <GitBranch className="w-6 h-6 text-teal" />,
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Data Structures & Algorithms", level: 80 },
        { name: "Problem Solving", level: 90 },
        { name: "Teamwork", level: 85 },
      ]
    }
  ];
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [animated, setAnimated] = useState<boolean[]>(new Array(skillCategories.length).fill(false));
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            if (entry.target === sectionRef.current) {
              observer.unobserve(entry.target);
            } else {
              const index = categoryRefs.current.findIndex(ref => ref === entry.target);
              if (index !== -1) {
                setAnimated(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
                observer.unobserve(entry.target);
              }
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    categoryRefs.current.forEach((category) => {
      if (category) observer.observe(category);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      categoryRefs.current.forEach((category) => {
        if (category) observer.unobserve(category);
      });
    };
  }, []);
  
  return (
    <section id="skills" className="py-20 bg-dark relative">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="opacity-0">
          <h2 className="section-title">Technical Skills</h2>
          <p className="text-white/70 max-w-2xl mb-12">
            My professional toolkit includes a wide range of technologies and frameworks that I've mastered over the years to create effective solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={catIndex}
              ref={(el) => (categoryRefs.current[catIndex] = el)}
              className="opacity-0 bg-dark-lighter border border-purple/20 rounded-lg p-6 hover:shadow-[0_5px_30px_-15px_rgba(108,99,255,0.2)] transition-all duration-300"
              style={{ animationDelay: `${0.2 * catIndex}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-dark-lighter border border-purple/30 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white/80">{skill.name}</span>
                      <span className="text-teal">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className={`skill-progress ${animated[catIndex] ? 'transition-[width] duration-1000 ease-out' : ''}`}
                        style={{ 
                          width: animated[catIndex] ? `${skill.level}%` : '0%',
                          transitionDelay: `${0.1 * skillIndex}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
