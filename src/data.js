export const profile = {
  name: "Rohan Jaiswal",
  role: "Full-Stack & Machine Learning Developer",
  location: "Greater Noida, Uttar Pradesh, India",
  status: "Open to opportunities",
  phone: "+91 88528 30062",
  phoneRaw: "+918852830062",
  email: "rohan44jaiswal@gmail.com",
  github: "https://github.com/rohanjais44",
  githubHandle: "rohanjais44",
  linkedin: "https://www.linkedin.com/in/rohan-jaiswal00",
  resume: "/resume.pdf",
  tagline:
    "B.Tech CSE student building full-stack web applications and machine learning systems.",
  bio:
    "I'm a Computer Science undergraduate at Noida Institute of Engineering and Technology (8.67 CGPA). I specialize in building full-stack web applications and practical machine learning solutions, shipping products with payment verification trails, semantic search, and NLP classifiers.",
  projectRoles: [
    { label: "Full-Stack Engineering", org: "MERN & Next.js", icon: "🚀" },
    { label: "Machine Learning & NLP", org: "Python & Data Science", icon: "🧠" },
  ],
  vibes: [
    { title: "SILVER", sub: "Change the vibes ↻", tagline: "Building full-stack web platforms & machine learning systems", type: "default" },
    { title: "NEUROLEARN", sub: "FastAPI + Next.js 15", tagline: "Intelligent learning platform with vector search & FastAPI", type: "project", link: "https://neuro-learn-sigma.vercel.app/app/coding" },
    { title: "LEARNVAULT PRO", sub: "MERN + Razorpay Audit Trail", tagline: "EdTech platform handling real transactions & email verification", type: "project", link: "https://learnvault-pro.vercel.app/" },
    { title: "STRESS DETECT", sub: "Scikit-Learn + NLTK + SHAP", tagline: "ML model for text stress classification & feature analysis", type: "project", link: "https://stress-detection-system-six.vercel.app/" },
    { title: "FAKE NEWS", sub: "NLP Supervised Classifier", tagline: "Text classification pipeline flagging fake news articles", type: "project", link: "https://github.com/rohanjais44/fake_news_detector" },
  ],
};

export const education = [
  {
    school: "Noida Institute of Engineering and Technology",
    degree: "B.Tech, Computer Science & Engineering (AI)",
    meta: "CGPA: 8.67",
    period: "2023 — 2027",
  },
  {
    school: "Deoria Senior Secondary School",
    degree: "Intermediate (CBSE Board)",
    meta: null,
    period: "2021 — 2022",
  },
  {
    school: "Deoria Senior Secondary School",
    degree: "High School (CBSE Board)",
    meta: null,
    period: "2019 — 2020",
  },
];

export const languages = [
  { name: "Hindi", level: "First language" },
  { name: "English", level: "Intermediate" },
  { name: "French", level: "Beginner" },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "SQL", "HTML / CSS"],
  },
  {
    label: "Full-Stack & Web",
    items: ["React", "Node.js", "Express", "MongoDB", "Razorpay API", "JWT Auth"],
  },
  {
    label: "Machine Learning & NLP",
    items: ["Scikit-learn", "NLTK", "TF-IDF", "Transformers (Hugging Face)", "SHAP", "Pandas", "NumPy", "Flask"],
  },
  {
    label: "Tools & Cloud",
    items: ["Git & GitHub", "AWS", "Vercel", "REST APIs"],
  },
];

export const projects = [
  {
    id: "neurolearn",
    featured: true,
    title: "NeuroLearn",
    image: "/images/projects/neurolearn.png",
    period: "2025 — Present",
    tagline: "An intelligent learning platform built end-to-end as a major B.Tech project.",
    description:
      "A full-stack learning platform co-built with Naveen Mishra and Shivansh Yadav. Frontend runs on Next.js 15 App Router; backend combines FastAPI and Supabase pgvector for vector search. Ships with landing page, onboarding flow, and full dark/light mode.",
    highlights: [
      "Next.js 15 App Router frontend",
      "FastAPI backend with Supabase + pgvector for semantic retrieval",
      "High-speed API inference pipeline",
      "Landing page, onboarding flow, and full dark/light mode support",
      "Resolved a production bcrypt/passlib compatibility issue",
    ],
    tech: ["Next.js", "FastAPI", "Supabase", "pgvector", "Groq", "Python"],
    links: {
      live: "https://neuro-learn-sigma.vercel.app/app/coding",
      repo: "https://github.com/rohanjais44/NeuroLearn",
    },
    linkStatus: { live: "available", repo: "private" },
  },
  {
    id: "learnvault",
    featured: true,
    title: "LearnVault Pro",
    image: "/images/projects/learnvault.png",
    period: "2025 — Present",
    tagline: "A full-stack MERN learning management platform, co-founded and built from scratch.",
    description:
      "An online learning platform offering courses across programming, software engineering, and web development. Co-founded with Shivansh Yadav and Naveen Mishra. Handles real Razorpay transactions with a full payment audit trail, OTP-based email verification, affiliate course tracking, an admin panel with live payment cross-checks, and full dark mode support.",
    highlights: [
      "Razorpay payment integration with IP/device audit logging",
      "OTP-based email verification flow",
      "Admin panel with live payment verification & webhook renewal tracking",
      "Affiliate course click tracking",
      "Full dark mode via a custom theme system",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Razorpay API", "Nodemailer"],
    links: {
      live: "https://learnvault-pro.vercel.app/",
      repo: "https://github.com/rohanjais44/learnvault-pro",
    },
    linkStatus: { live: "available", repo: "private" },
  },
  {
    id: "ai-qa",
    featured: true,
    title: "Smart Q&A System",
    image: "/images/projects/ai-qa.png",
    period: "2025",
    tagline: "An NLP-powered app that answers natural-language questions with context-aware responses.",
    description:
      "A question-answering web application that lets users ask natural language questions and get context-aware answers. Built around a Hugging Face Transformers pipeline for information retrieval, wrapped in a clean, interactive chat interface.",
    highlights: [
      "Natural language question answering with contextual responses",
      "Interactive chat-style interface",
      "Context-aware answer generation",
      "Responsive UI with graceful error handling",
    ],
    tech: ["Python", "Flask", "NLP", "Transformers / Hugging Face", "REST APIs", "JavaScript"],
    links: {
      live: "https://ai-question-and-answer-system.vercel.app/",
      repo: "https://github.com/rohanjais44/AI-Question-and-Answer-System",
    },
    linkStatus: { live: "available", repo: "available" },
  },
  {
    id: "stress-detection",
    featured: true,
    title: "Stress Detection System",
    image: "/images/projects/stress-detection.png",
    period: "2025",
    tagline: "An explainable ML system that detects stress indicators in text.",
    description:
      "A machine learning web app that classifies whether a piece of text indicates stress. Preprocesses input with NLTK, extracts TF-IDF features, classifies using SVM and Logistic Regression, and explains every prediction with SHAP so results aren't a black box.",
    highlights: [
      "TF-IDF feature extraction over cleaned text",
      "SVM & Logistic Regression classification",
      "SHAP-based explainable predictions with confidence scores",
      "User-friendly web interface",
    ],
    tech: ["Python", "Flask", "Scikit-learn", "NLTK", "SHAP", "Pandas", "NumPy"],
    links: {
      live: "https://stress-detection-system-six.vercel.app/",
      repo: "https://github.com/rohanjais44/Stress-Detection-System",
    },
    linkStatus: { live: "available", repo: "available" },
  },
  {
    id: "fake-news",
    featured: false,
    title: "Fake News Detection System",
    image: null,
    period: "Oct 2025",
    tagline: "An NLP classifier that flags likely-fake news articles.",
    description:
      "Developed an NLP-based machine learning model using Python and Scikit-learn to classify news articles, applying text preprocessing and supervised learning techniques.",
    highlights: [
      "Text preprocessing pipeline with TF-IDF vectorization",
      "Supervised Machine Learning classification models",
      "Evaluation with confusion matrix, accuracy, and precision metrics",
    ],
    tech: ["Python", "Scikit-learn", "NLP", "Supervised Learning", "Pandas"],
    links: {
      live: null,
      repo: "https://github.com/rohanjais44/fake_news_detector",
    },
    linkStatus: { live: "none", repo: "available" },
  },
];

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Jun 2026",
    description:
      "Validated understanding of cloud computing concepts, AWS core services, security, pricing, and architectural best practices.",
  },
  {
    title: "Principles of Generative AI",
    issuer: "Infosys Springboard",
    date: "Oct 2025",
    description:
      "Strong understanding of generative AI principles, including large language models, prompt engineering, and ethical AI usage.",
  },
  {
    title: "Object-Oriented Programming using Python",
    issuer: "Infosys Springboard",
    date: "Aug 2025",
    description:
      "Strong understanding of OOP concepts in Python, including inheritance and polymorphism.",
  },
];

export const activities = [
  {
    title: "Smart India Hackathon (SIH)",
    role: "Participant",
    date: "Sep 2025",
    description: "Collaborated with a team to develop a technology-based solution for a real-world problem under national-level competition constraints.",
  },
  {
    title: "Technical Event Coordinator",
    role: "College-level events",
    date: null,
    description: "Coordinated and managed multiple college-level technical events, handling planning, team coordination, and execution.",
  },
  {
    title: "AI EmergX",
    role: "Technical Club Member",
    date: null,
    description: "Engaged in organizing and supporting AI/ML workshops and learning initiatives for students.",
  },
  {
    title: "Kathpulia Theatre Club",
    role: "Technical Team Member",
    date: null,
    description: "Supported stage setup, audio-visual coordination, lighting management, and event logistics for rehearsals and live performances.",
  },
];
