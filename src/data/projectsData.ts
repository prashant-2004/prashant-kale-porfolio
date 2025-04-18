import { ProjectItem } from '../types/ProjectTypes';

export const softwareProjects: ProjectItem[] = [
  {
    title: "Service Marketplace Platform",
    description: "A Single Page Web Application for service providers & clients with reviews, ratings, and personalized goals.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Chart.js", "Bootstrap", "CSS3"],
    type: "software" as const,
    repoUrl: "https://github.com/prashant-2004/Ingenious-Hackathon",
    bullets: [
      "Developed a Single Page Web Application which allows service providers & clients to share their positive experiences through reviews & ratings.",
      "Generates graphical reports for service providers.",
      "Enable service providers to set personalized goals, maintaining high rating.",
      "Used React.js for UI/UX development.",
      "Implemented a Restful APIs for notification system, for adding new services by Service Provider.",
      "Implemented with Admin & User Authentication.",
      "Experienced with Redux Technology."
    ]
  },
  {
    title: "Quiz-11 React-Native Application",
    description: "Android App using React-Native with Firebase integration for authentication and real-time database.",
    technologies: ["React-Naitve", "Node.js", "Firebase Cloud Service", "Payment Gateway"],
    type: "software" as const,
    repoUrl: "https://github.com/prashant-2004/Quiz-11",
    bullets: [
      "Developed Android App using the React-Native Technology with integrating with the Firebase Cloud Service with NoSQL Database.",
      "Used Firebase Authentication for User Authentication & store password Securely.",
      "REST API used for CRUD operations on Firebase realtime database to display on Admin Dashboard.",
      "Used Real-time database to store User Data & Questions / Answers for Quiz."
    ]
  },
];

export const aiProjects: ProjectItem[] = [
  {
    title: "Visual Transformer Captioner",
    description: "Deep Learning Model for image captioning trained on Flikr8k dataset.",
    technologies: ["TensorFlow", "PyTorch", "Keras", "Pydot", "NLTK", "Python"],
    type: "ai" as const,
    repoUrl: "https://github.com/prashant-2004/Image-Caption-Generator-Flikr8k-Dataset",
    bullets: [
      "Developed a Deep Learning Model which generates its own caption for the image, used the Git Version Control for this.",
      "Trained by using the Flikr8k dataset from Kaggle, consist of 8k images with their captions.",
      "Experienced in large-scale data processing.",
      "Uses the TensorFlow, PyTorch, Keras, Pydot and NLTK (Natural Language Toolkit) Python libraries.",
      "Implemented Image Generation with Visual Transformers.",
      "Preprocess & analyze 8000 images with their Captions ensuring Data Quality, Data Augmentation."
    ]
  },
  {
    title: "Whisper: AI-Driven Text Generation",
    description: "AI-Driven Text Generation and Language Translation Tool using OpenAI's Whisper API.",
    technologies: ["OpenAI", "LangChain", "React.js", "Replit"],
    type: "ai" as const,
    repoUrl: "https://github.com/prashant-2004",
    bullets: [
      "Leveraged OpenAI's cutting-edge natural language processing capabilities through the whisper API to enable dynamic and contextually relevant text generation.",
      "Integrated LangChain's advanced language translation algorithms into the platform to facilitate seamless communication across diverse linguistic contexts.",
      "Implemented a fully integrated model with React.js, leveraging the Replit tool for seamless development and deployment."
    ]
  }
];
