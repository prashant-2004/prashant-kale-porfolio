
import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const experienceData: ExperienceItem[] = [
    {
      title: "App Developer",
      company: "LivAgain",
      period: "07/2024 – Present",
      location: "Nagpur, India",
      responsibilities: [
        "Developed a responsive Android App using the React-Native & NodeJS Technology.",
        "Integrated with the Firebase Cloud Service, for User Authentication, Real-time Database.",
        "Integrated with the Payment Gateway, custom wallet configuration with the NodeJS technology.",
        "Integrated with the Video Calling API, Audio Calling API, Chat API & Global Chat Room."
      ]
    },
    {
      title: "Software Development Intern",
      company: "DSS World Pvt Ltd.",
      period: "06/2024– 01/2025",
      location: "Pune, India",
      responsibilities: [
        "Developed an automation tool for the Android App Development and iOS App Development with a responsive website with the Javascript and PHP.",
        "Developed the Android & IOS Apps using React-Native, IONIC Framework and Angular.js.",
        "Deployed the Apps on Playstore & Appstore"
      ]
    }
  ];
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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
    
    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);
  
  return (
    <section id="experience" className="py-20 bg-dark relative">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="opacity-0">
          <h2 className="section-title">Work Experience</h2>
          <p className="text-white/70 max-w-2xl mb-12">
            My professional journey as a developer, crafting solutions and gaining experience in different technologies and environments.
          </p>
        </div>
        
        <div className="space-y-8 mt-12">
          {experienceData.map((exp, index) => (
            <div 
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className="timeline-item opacity-0"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="bg-dark-lighter border border-purple/20 rounded-lg p-6 shadow-lg hover:shadow-[0_10px_30px_-15px_rgba(108,99,255,0.3)] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-purple text-lg">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-white/70 text-sm">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-teal" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-teal" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2 mt-4">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-teal mr-2 mt-1.5">•</span>
                      <span className="text-white/80">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
