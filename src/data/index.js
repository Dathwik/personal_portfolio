export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "Express.js", "Python", "Flask", "REST APIs", "Prisma ORM", "SQLAlchemy"],
  },
  {
    category: "Databases & Cloud",
    items: ["MongoDB", "PostgreSQL", "SQLite", "AWS Amplify", "AWS S3 / CloudFront", "Vercel", "Render"],
  },
  {
    category: "Data & AI",
    items: ["Pandas", "Scikit-learn", "Streamlit", "Jupyter Notebooks", "Anthropic Claude API"],
  },
];

export const projects = [
  {
    title: "UIGen — AI Component Generator",
    description: "An AI-powered tool that generates live React components from plain-text descriptions using the Anthropic Claude API. Features a virtual file system, real-time preview, syntax-highlighted code editor, and user persistence via Prisma and SQLite.",
    tech: ["Next.js", "TypeScript", "Anthropic Claude API", "Prisma", "Tailwind CSS"],
    github: "https://github.com/Dathwik/uigen",
    live: null,
    year: "2026",
  },
  {
    title: "Checkmate — Server Monitor",
    description: "A self-hosted infrastructure monitoring tool with real-time dashboards for CPU, memory, disk, and Docker containers. Supports SSL/port checks, incident tracking, and multi-channel alerts (email, Discord, Slack, webhooks).",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Recharts", "Material-UI"],
    github: "https://github.com/Dathwik/Checkmate",
    live: null,
    year: "2026",
  },
  {
    title: "MERN ThinkBoard",
    description: "A full-stack note management app where users can create, edit, and delete notes. Built a REST API with Express and Node.js, integrated MongoDB for persistence, and deployed the full stack on Render.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Dathwik/mern-thinkboard",
    live: "https://mern-thinkboard-egmo.onrender.com/",
    year: "2026",
  },
  {
    title: "Contact Manager",
    description: "A full-stack contact management application with a React frontend and Flask backend. Supports create, view, update, and delete operations via a RESTful API backed by PostgreSQL, deployed on Render.",
    tech: ["React", "Python", "Flask", "PostgreSQL", "Vite"],
    github: "https://github.com/Dathwik/Python_JS_Flask",
    live: "https://python-js-flask.onrender.com",
    year: "2026",
  },
  {
    title: "Valorant Dashboard",
    description: "An interactive match analytics dashboard that pulls competitive match data via the HenrikDev Valorant API. Displays K/D ratio, damage stats, rank badge, and performance trends using line and bar charts.",
    tech: ["Python", "Streamlit", "Pandas", "Altair", "HenrikDev API"],
    github: "https://github.com/Dathwik/Valorant_Dashboard",
    live: null,
    year: "2025",
  },
  {
    title: "Personal Portfolio",
    description: "This portfolio website — a single-page React app with smooth scroll animations, a responsive navbar, and sections for projects, skills, experience, and certifications. Deployed on AWS Amplify at dathwik.com.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "AWS Amplify"],
    github: "https://github.com/Dathwik/personal_portfolio",
    live: "https://dathwik.com",
    year: "2026",
  },
];

export const experience = [
  {
    role: "Frontend Developer",
    company: "The Activated Shirt",
    url: "https://d32lrpxptukm6r.cloudfront.net",
    period: "2026 – Present",
    description: "Designed and developed a full product landing page for a direct-to-consumer apparel brand. Built a multi-section React site featuring a hero, lookbook, features, and shop section. Deployed the site on AWS S3 with CloudFront for global CDN delivery and maintained the GitHub repository through iterative releases.",
    tech: ["React", "Vite", "Tailwind CSS", "AWS S3", "CloudFront"],
  },
];
