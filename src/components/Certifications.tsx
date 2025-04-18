
import React, { useEffect, useRef } from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  url?: string;
}

const Certifications: React.FC = () => {
  const certificationsData: Certification[] = [
    {
      title: "Introduction to Generative AI",
      issuer: "GOOGLE Certified",
      date: "11/07/23",
    },
    {
      title: "Full Stack Software Developer",
      issuer: "IBM Certified",
      date: "20/10/24",
    },
    {
      title: "Azure AI Fundamentals",
      issuer: "MICROSOFT Certified",
      date: "07/08/23",
    },
    {
      title: "React Basics",
      issuer: "META Certified",
      date: "22/07/23",
    },
    {
      title: "Geoprocessing using Python",
      issuer: "ISRO Certified",
      date: "08/08/23",
    },
    {
      title: "Remote Sensing & Data Analysis",
      issuer: "ISRO Certified",
      date: "08/01/24",
    }
  ];
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const certRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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
    
    certRefs.current.forEach((cert) => {
      if (cert) observer.observe(cert);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      certRefs.current.forEach((cert) => {
        if (cert) observer.unobserve(cert);
      });
    };
  }, []);
  
  return (
    <section id="certifications" className="py-20 bg-dark-lighter relative">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={sectionRef} className="opacity-0">
          <h2 className="section-title">Certifications</h2>
          <p className="text-white/70 max-w-2xl mb-12">
            Formal recognition of my skills and knowledge across various technologies and platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certificationsData.map((cert, index) => (
            <div 
              key={index}
              ref={(el) => (certRefs.current[index] = el)}
              className="opacity-0 bg-dark border border-purple/20 rounded-lg p-6 hover:border-purple/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-purple" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-teal">{cert.issuer}</p>
                </div>
                
                <div className="flex items-center text-white/60 text-sm mt-auto pt-4 border-t border-purple/10">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{cert.date}</span>
                  {cert.url && (
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="ml-auto text-purple hover:text-teal transition-colors"
                      aria-label="View certificate"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
