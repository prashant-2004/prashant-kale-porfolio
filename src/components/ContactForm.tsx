
import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Check, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  
  const formRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
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
    
    if (formRef.current) {
      observer.observe(formRef.current);
    }
    
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
    
    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
      
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: 'Error',
        description: 'Please correct the errors in the form.',
        variant: 'destructive'
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      
      toast({
        title: 'Success!',
        description: 'Your message has been sent successfully.',
        variant: 'default'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-dark relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Feel free to contact me for any project inquiries, collaboration opportunities, or just to say hello!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div 
            ref={contactRef} 
            className="opacity-0 md:col-span-1 space-y-6"
          >
            <div className="bg-dark-lighter border border-purple/20 rounded-lg p-6 hover:border-purple/50 transition-all duration-300">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                  <a href="mailto:prashant.kale0406@email.com" className="text-white/70 hover:text-teal transition-colors">
                  prashant.kale0406@email.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-lighter border border-purple/20 rounded-lg p-6 hover:border-purple/50 transition-all duration-300">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5 text-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                  <a href="tel:+919067807765" className="text-white/70 hover:text-teal transition-colors">
                    +91 9067807765
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-lighter border border-purple/20 rounded-lg p-6 hover:border-purple/50 transition-all duration-300">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center mr-4">
                  <MapPin className="w-5 h-5 text-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                  <p className="text-white/70">
                    Pune, India
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={formRef} 
            className="opacity-0 md:col-span-2 bg-dark-lighter border border-purple/20 rounded-lg p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white font-medium">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`contact-input ${formErrors.name ? 'border-destructive' : ''}`}
                    placeholder="Prashant Kale"
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm flex items-center mt-1">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {formErrors.name}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white font-medium">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`contact-input ${formErrors.email ? 'border-destructive' : ''}`}
                    placeholder="prashant@example.com"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm flex items-center mt-1">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {formErrors.email}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-white font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`contact-input ${formErrors.subject ? 'border-destructive' : ''}`}
                  placeholder="Project Inquiry"
                />
                {formErrors.subject && (
                  <p className="text-red-500 text-sm flex items-center mt-1">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {formErrors.subject}
                  </p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-white font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`contact-input resize-none ${formErrors.message ? 'border-destructive' : ''}`}
                  placeholder="Hello, I'd like to discuss a project..."
                ></textarea>
                {formErrors.message && (
                  <p className="text-red-500 text-sm flex items-center mt-1">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {formErrors.message}
                  </p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 bg-purple rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-all hover:bg-purple-dark disabled:opacity-70 disabled:hover:bg-purple w-full sm:w-auto ${
                  isSubmitting ? 'animate-pulse' : 'hover:-translate-y-1'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-rotate"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
