import { Project, EducationItem, CertificationItem, Skill, PersonalInfo, ExperienceItem } from './types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "GAURAV SINGH",
  role: "FULL STACK ENGINEER",
  location: "Satara, Maharashtra",
  email: "gauravsingh1752005@gmail.com",
  phone: "+91 8530042162",
  bio: "Passionate Full Stack and AI Engineer specializing in building robust digital solutions. With a strong foundation in Artificial Intelligence and modern web technologies, I transform complex requirements into precise technical executables. Proficient in Python, React, and Machine Learning pipelines.",
  resume: "/Gaurav_Resume.pdf", 
  profileImage: "/profilepic.png",
  socials: {
      linkedin: "https://www.linkedin.com/in/gauravsingh175",
      github: "https://github.com/Gaurav7127",
      portfolio: "https://gauravsingh-dev.netlify.app"
  }
};

export const SKILLS: Skill[] = [
  // Languages
  { name: "Python", iconClass: "devicon-python-plain colored", level: 95, category: "Languages" },
  { name: "Java", iconClass: "devicon-java-plain colored", level: 75, category: "Languages" },
  { name: "C", iconClass: "devicon-c-plain colored", level: 70, category: "Languages" },
  { name: "C++", iconClass: "devicon-cplusplus-plain colored", level: 75, category: "Languages" },
  { name: "JavaScript", iconClass: "devicon-javascript-plain colored", level: 85, category: "Languages" },
  
  // Web
  { name: "React", iconClass: "devicon-react-original colored", level: 90, category: "Web" },
  { name: "HTML5", iconClass: "devicon-html5-plain colored", level: 95, category: "Web" },
  { name: "CSS3", iconClass: "devicon-css3-plain colored", level: 90, category: "Web" },
  { name: "Flask", iconClass: "devicon-flask-original", level: 80, category: "Web" },
  { name: "Streamlit", iconClass: "devicon-streamlit-plain colored", level: 85, category: "Web" },
  
  // Tools
  { name: "GitHub", iconClass: "devicon-github-original", level: 90, category: "Tools" },
  { name: "Power BI", iconClass: "devicon-microsoftsqlserver-plain", level: 85, category: "Tools" },
  
  // Soft Skills (No Icons)
  { name: "Problem Solving", iconClass: "devicon-vscode-plain", level: 100, category: "Soft Skills" },
  { name: "Teamwork", iconClass: "devicon-jira-plain", level: 100, category: "Soft Skills" },
];

export const EDUCATION: EducationItem[] = [
  {
    id: "EDU-03",
    degree: "B.Sc. in Artificial Intelligence",
    institution: "KBP University",
    year: "2023 - 2026",
    score: "CGPA: 9.39 / 10",
    details: "Relevant Coursework: Data Structures & Algorithms, Programming Languages, DBMS, AI Fundamentals."
  },
  {
    id: "EDU-02",
    degree: "Higher Secondary (Class XII)",
    institution: "YCIS, Satara",
    year: "2021 - 2023",
    score: "64.67%",
    details: "Science Stream"
  },
  {
    id: "EDU-01",
    degree: "Secondary School (Class X)",
    institution: "Bharat English Medium School",
    year: "2021",
    score: "87%",
    details: "Foundation"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  // Top Tier: AI & ML
  { 
      id: "CRT-01", 
      title: "OCI 2025 Certified Generative AI Professional", 
      issuer: "Oracle", 
      year: "2025",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=CCBAE4C5DF0B54FD37A20CBCE87E5DDB7E28BC2940BE2C49442960F9B5329A75",
      logo: "https://www.google.com/s2/favicons?domain=oracle.com&sz=128",
      category: "🏆 Top Tier: AI & Machine Learning"
  },
  { 
      id: "CRT-02", 
      title: "MLOps with Vertex AI: Manage Features", 
      issuer: "Google Cloud", 
      year: "2025",
      link: "https://www.skills.google/public_profiles/156d6d47-43de-4ebc-ab20-3c1539b2a9e8/badges/20688445?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      logo: "https://www.google.com/s2/favicons?domain=cloud.google.com&sz=128",
      category: "🏆 Top Tier: AI & Machine Learning"
  },
  { 
      id: "CRT-03", 
      title: "AI/ML Track - Gen AI Academy 2.0", 
      issuer: "Google Cloud", 
      year: "2025",
      link: "https://certificate.hack2skill.com/user/genai2aiml/2025H2S10GENAI-AIML00216",
      logo: "https://www.google.com/s2/favicons?domain=cloud.google.com&sz=128",
      category: "🏆 Top Tier: AI & Machine Learning"
  },
  { 
      id: "CRT-04", 
      title: "Prepare Data for ML APIs on Google Cloud", 
      issuer: "Google Cloud", 
      year: "2025",
      link: "https://www.credly.com/badges/06d7923c-9458-46d0-8e7e-813ad5543e50/linked_in_profile",
      logo: "https://www.google.com/s2/favicons?domain=cloud.google.com&sz=128",
      category: "🏆 Top Tier: AI & Machine Learning"
  },
  // Core Technical
  { 
      id: "CRT-05", 
      title: "AWS Certified Advanced Networking - Specialty", 
      issuer: "Udemy", 
      year: "2025",
      link: "https://www.udemy.com/certificate/UC-1c0cb649-8469-490a-b05f-5397169bc870/",
      logo: "https://www.google.com/s2/favicons?domain=udemy.com&sz=128",
      category: "☁️ Core Technical: Cloud & Networking"
  },
  { 
      id: "CRT-06", 
      title: "Introduction to Data Science", 
      issuer: "Cisco", 
      year: "2025",
      link: "https://www.credly.com/badges/06dd21b2-daea-4b83-ba0d-3f2e254cf671/linked_in_profile",
      logo: "https://www.google.com/s2/favicons?domain=cisco.com&sz=128",
      category: "☁️ Core Technical: Cloud & Networking"
  },
  { 
      id: "CRT-07", 
      title: "Cyber Job Simulation", 
      issuer: "Deloitte", 
      year: "2025",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_xPPh5pQqsLuQyJo99_1753629219210_completion_certificate.pdf",
      logo: "https://www.google.com/s2/favicons?domain=deloitte.com&sz=128",
      category: "☁️ Core Technical: Cloud & Networking"
  },
  // Design & Visualization
  { 
      id: "CRT-08", 
      title: "Essentials User Experience Design Adobe XD", 
      issuer: "Udemy", 
      year: "2025",
      link: "https://www.udemy.com/certificate/UC-2b9f104a-eb09-4782-b848-4dbbe9596557/",
      logo: "https://www.google.com/s2/favicons?domain=udemy.com&sz=128",
      category: "🎨 Design & Visualisation"
  },
  { 
      id: "CRT-09", 
      title: "Data Visualisation", 
      issuer: "TATA", 
      year: "2025",
      link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_xPPh5pQqsLuQyJo99_1754307493764_completion_certificate.pdf",
      logo: "https://www.google.com/s2/favicons?domain=tata.com&sz=128",
      category: "🎨 Design & Visualisation"
  },
  // AI Literacy
  { 
      id: "CRT-12", 
      title: "Gemini Certified Student (K-12) - Foundational AI Ethics & Prompting", 
      issuer: "Google", 
      year: "2025",
      link: "https://edu.exceedlms.com/student/award/GYBCzjDD3dNvaSWeoUUBEbGF",
      logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
      category: "📚 AI Literacy & Ethics Foundations"
  },
  { 
      id: "CRT-13", 
      title: "Gemini Certified University Student - Advanced Academic Problem Solving & Research Integration", 
      issuer: "Google", 
      year: "2025",
      link: "https://edu.google.accredible.com/6c4d4988-d5dc-45af-9cce-d9714853b368#acc.Zo9Ou2jm",
      logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
      category: "📚 AI Literacy & Ethics Foundations"
  },
  // Foundational
  { 
      id: "CRT-10", 
      title: "What Is Generative AI?", 
      issuer: "LinkedIn Learning", 
      year: "2025",
      link: "https://www.linkedin.com/learning/certificates/3ade19a67f8e1111b718216fb18ff31902e0b173ee223c3a606a414343450861?trk=share_certificate",
      logo: "https://www.google.com/s2/favicons?domain=linkedin.com&sz=128",
      category: "🎓 Foundational & Emerging Tech"
  },
  { 
      id: "CRT-11", 
      title: "Automate Data Capture with Document AI", 
      issuer: "Google Cloud", 
      year: "2025",
      link: "https://www.credly.com/badges/4b938aee-86c6-4fc9-80ad-f756aa699875/linked_in_profile",
      logo: "https://www.google.com/s2/favicons?domain=cloud.google.com&sz=128",
      category: "🎓 Foundational & Emerging Tech"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "PRJ-01",
    title: "Emotion Music Engine",
    techStack: ["Python", "OpenCV", "NumPy", "Pandas"],
    description: "Detects user emotion through facial expression analysis and recommends mood-based music playlists.",
    fullDescription: "A comprehensive backend system that integrates computer vision with music streaming services. The system utilizes OpenCV for real-time face detection and a pre-trained CNN model to classify emotions (Happy, Sad, Neutral, Angry). Based on the detected emotion, the engine queries the Spotify API to fetch and play a curated playlist, creating an immersive, mood-responsive user experience.",
    role: "ML & Backend Developer",
    architecture: {
        flow: [
            { label: "Webcam Input", type: "input" },
            { label: "OpenCV Face Detect", type: "process" },
            { label: "Emotion Classifier", type: "process" },
            { label: "Map to Genre", type: "process" },
            { label: "Music Playlist", type: "output" }
        ]
    }
  },
  {
    id: "PRJ-02",
    title: "Movie Rec. System",
    techStack: ["Python", "Scikit-Learn", "TMDb API"],
    description: "Content-based recommendations utilizing TF-IDF vectorization and cosine similarity for movie discovery.",
    fullDescription: "An intelligent recommendation engine capable of processing thousands of movie metadata records. It leverages Scikit-Learn to perform TF-IDF vectorization on movie plots and genres. By calculating cosine similarity matrices, the system identifies and suggests the top 5 movies that mathematically align with the user's viewing history, ensuring highly relevant suggestions.",
    role: "ML Developer",
    architecture: {
        flow: [
            { label: "User Selection", type: "input" },
            { label: "Fetch Metadata (TMDb)", type: "storage" },
            { label: "TF-IDF Vectorization", type: "process" },
            { label: "Cosine Similarity", type: "process" },
            { label: "Top 5 Movies", type: "output" }
        ]
    }
  },
  {
    id: "PRJ-03",
    title: "Portfolio Schematic",
    techStack: ["React", "Tailwind", "Framer Motion"],
    description: "Fully responsive portfolio showcasing skills and projects with a blueprint aesthetic and smooth interactions.",
    fullDescription: "A high-performance single-page application (SPA) designed with a unique 'Architectural Blueprint' aesthetic. It features a custom responsive grid system, dynamic content loading, and interactive SVG diagrams. The project demonstrates advanced React patterns, including custom hooks for view management and modular component architecture.",
    role: "Frontend Developer",
    architecture: {
        flow: [
            { label: "User Interaction", type: "input" },
            { label: "React State Manager", type: "process" },
            { label: "Component Router", type: "process" },
            { label: "Dynamic DOM Render", type: "output" }
        ]
    }
  }
];

export const EXPERIENCE: ExperienceItem[] = [
    {
        id: "EXP-01",
        title: "Full Stack Engineer Intern",
        date: "2024 - Present",
        organization: "Tech Corp",
        type: "Internship",
        description: "Contributed to frontend development using React and backend services in Python."
    }
];
