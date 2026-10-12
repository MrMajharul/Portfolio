export const personal = {
  name: "Majharul Islam",
  roles: ["Software Developer", "CS Researcher", "Full-Stack Engineer"],
  tagline: "Building research-grade systems and live web platforms.",
  bio: [
    "I'm a final-year Computer Science & Engineering student at Green University of Bangladesh, currently working as an IT Intern at the Dhaka University Research Society (DURS) and serving as Treasurer of the Green University Computer Club (GUCC).",
    "I co-authored a research paper on genomic biomarker validation accepted to IEEE STI 2026. I've built and deployed three live web platforms for university communities, and I'm actively applying for graduate programs and software engineering roles abroad.",
  ],
  email: "majharul.cs@gmail.com",
  phone: "+880 1745716332",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/MrMajharul",
  linkedin: "https://linkedin.com/in/majharul-islam-68945326b/",
  cv: "/cv.html",
  photo: "/majharul-photo.png",
  aboutPhoto: "/image2.png",
  available: true,
};

export const stats = [
  { label: "Repositories", value: "24+" },
  { label: "Years Coding", value: "3+" },
  { label: "Contributions", value: "329+" },
  { label: "Live Projects", value: "3" },
];

export const research = [
  {
    title: "Circadian Gene Signatures Do Not Replicate for Immunotherapy Response: External Validation Across Three Independent Cohorts",
    venue: "IEEE STI 2026 — 8th International Conference on Sustainable Technologies for Industry 5.0",
    track: "Intelligent Computing",
    paperId: "6557",
    status: "Under Review",
    authors: ["Muaz Ibn Kamal", "Junaira Islam", "Majharul Islam", "Jannathul Maowa Hasi"],
    highlights: [
      "Analyzed high-dimensional genomic and clinical cohort data across three independent patient cohorts.",
      "Ran external statistical validation and EDA to benchmark biomarker reproducibility for cancer immunotherapy response.",
    ],
  },
];

export const experience = [
  {
    title: "IT Intern",
    org: "Dhaka University Research Society (DURS)",
    period: "July 2026 — Present",
    bullets: [
      "Manage internal digital infrastructure and data documentation supporting academic research projects.",
      "Maintain platforms and automate workflow procedures; provide IT troubleshooting for research events.",
      "Coordinate with researchers to streamline data storage and technical documentation.",
    ],
  },
  {
    title: "Former Web Developer, Executive Committee",
    org: "Green University Research & Publication Community (GURPC)",
    period: "January 2026 — September 2026",
    bullets: [
      "Architect and maintain the official web platform for research publication tracking, event registration, and community outreach.",
      "Ensure responsive design, cross-device performance, and secure data handling for members and authors.",
    ],
  },
  {
    title: "Treasurer · Former Graphics and Multimedia Coordinator & Executive",
    org: "Green University Computer Club (GUCC)",
    period: "2024 — Present",
    committeeHistory: [
      {
        year: "2026",
        role: "Treasurer",
        current: true,
        url: "https://gucc.green.edu.bd/executives/2026",
      },
      {
        year: "2025",
        role: "Graphics and Multimedia Coordinator",
        current: false,
        url: "https://gucc.green.edu.bd/executives/2025",
      },
      {
        year: "2024",
        role: "Executive Member",
        current: false,
        url: "https://gucc.green.edu.bd/executives/2024",
      },
    ],
    bullets: [
      "Serving as Treasurer (2026), overseeing financial record-keeping, budget planning, and resource allocation for departmental hackathons and tech initiatives.",
      "Spearheaded branding, promotional multimedia, and design assets across digital channels as Graphics and Multimedia Coordinator (2025).",
      "Contributed to event organization, member coordination, and technical club activities as Executive Member (2024).",
    ],
  },
];

export const projects = [
   {
    name: "Istiqamaah",
    description:
      "Istiqamaah — Muslim Habit & Productivity App",
    stack: ["TypeScript", "React", "Node.js", "PLpgSQL", "Docker"],
    github: "https://github.com/MrMajharul/Habit_tracker",
    live: "https://istiqamaah.vercel.app/",
    preview: "/previews/istiqamaah.png",
    featured: true,
    badge: "Live",
  },
  {
    name: "UConnect",
    description:
      "Centralized university community platform connecting students and faculty, with role-based authentication, interactive forums, and optimized SQL queries.",
    stack: ["TypeScript", "React", "Node.js", "SQL", "Docker"],
    github: "https://github.com/MrMajharul/UConnect",
    live: null,
    featured: true,
    badge: "Featured",
  },
  {
    name: "GURPC Research & Publication Portal",
    description:
      "Official platform for the Green University Research & Publication Community — showcases papers, announcements, and events with structured data workflows.",
    stack: ["TypeScript", "JavaScript", "CSS3"],
    github: "https://github.com/GURPC/GURPC",
    live: "https://gurpc.green.edu.bd/",
    preview: "/previews/gurpc.png",
    featured: true,
    badge: "Live",
  },
  {
    name: "JMC Media Club Platform",
    description:
      "Interactive digital portal showcasing student journalism, media productions, and event calendars with continuous deployment on Vercel.",
    stack: ["JavaScript", "Vercel CI/CD"],
    github: "https://github.com/MrMajharul/JMC_Media_Club",
    live: "https://jmc-club.vercel.app/",
    preview: "/previews/jmc.png",
    featured: true,
    badge: "Live",
  },
  {
    name: "Employee Task Management System",
    description:
      "Full-stack task management platform with JWT authentication, role-based access, Kanban board, real-time notifications, and analytics dashboard.",
    stack: ["Node.js", "Express", "MySQL", "JavaScript"],
    github: "https://github.com/MrMajharul/Employee-Task-Management-System",
    live: null,
    featured: false,
    badge: null,
  },
  {
    name: "Huffman Encoding Simulator",
    description:
      "Interactive simulator implementing Huffman coding algorithm for data compression with binary tree construction visualization.",
    stack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/MrMajharul/Huffman-Encoding-Simulator",
    live: null,
    featured: false,
    badge: null,
  },
  {
    name: "Hospital Resource Allocation",
    description:
      "Algorithm-based simulator that optimally allocates hospital resources using Greedy and Knapsack algorithms with priority-based allocation.",
    stack: ["HTML", "CSS", "JavaScript", "Chart.js"],
    github: "https://github.com/MrMajharul/Hospital-Resource-Allocation",
    live: null,
    featured: false,
    badge: null,
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3", "Java", "C/C++"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Data & Research",
    items: ["Genomic Data Analysis", "Exploratory Data Analysis", "Statistical Validation", "Research Documentation"],
  },
  {
    category: "Tools & Platforms",
    items: ["Docker", "Git", "GitHub Actions", "Vercel", "Linux CLI", "VS Code"],
  },
  {
    category: "Design",
    items: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Figma", "Responsive UI/UX"],
  },
];

export const education = [
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "Green University of Bangladesh",
    period: "2023 — 2027 (Expected)",
    link: "https://cse.green.edu.bd/",
  },
  {
    degree: "Higher Secondary Certificate — Science",
    institution: "Kabi Nazrul Govt. College, Dhaka",
    period: "2020 — 2021",
    link: "https://kabinazrulcollege.gov.bd/",
  },
  {
    degree: "Secondary School Certificate — Science",
    institution: "Teguria High School, Kachua, Chandpur",
    period: "2019 — 2020",
  },
];

export const featuredCertificates = [
  {
    title: "Data Scientist",
    issuer: "DataCamp",
    credentialId: "DS0023879370066",
    date: "September 27, 2026",
    badge: "/certificates/DS%20Data%20Scientist%20-%20badge%20with%20outline.png",
    link: "/certificates/DS0023879370066.pdf",
    verifyUrl: "https://www.datacamp.com/certificate/DS0023879370066",
    verificationNote: "Verified Professional Industry Certification",
    accentColor: "#f59e0b",
    description:
      "Formally certified by DataCamp demonstrating rigorous industry proficiency in machine learning workflows, statistical modeling, exploratory data analysis, and predictive data systems.",
    skills: [
      "Machine Learning & Statistical Modeling",
      "Exploratory Data Analysis & Feature Engineering",
      "Model Evaluation & Error Metrics",
      "Python & Advanced Data Pipelines",
    ],
  },
  {
    title: "Associate Data Analyst",
    issuer: "DataCamp",
    credentialId: "DAA0014389060988",
    date: "September 17, 2026",
    badge: "/certificates/DA%20Associate%20-%20badge%20with%20outline.png",
    link: "/certificates/DAA0014389060988.pdf",
    verifyUrl: "https://www.datacamp.com/certificate/DAA0014389060988",
    verificationNote: "Verified Professional Industry Certification",
    accentColor: "#06b6d4",
    description:
      "Formally certified by DataCamp for demonstrated proficiency in exploratory data analysis, relational data querying with SQL, statistical evaluation, and communicating business intelligence.",
    skills: [
      "Exploratory Data Analysis",
      "SQL Querying & Extraction",
      "Statistical Data Preparation",
      "Business Intelligence & Insights",
    ],
  },
];

export const featuredCertificate = featuredCertificates[0];

export const certificates = [
  {
    title: "Python (Django) Training",
    issuer: "IIT, Jahangirnagar University — EDGE Project",
    date: "Feb 2025",
    link: "/certificates/Certificate.pdf",
  },
  {
    title: "Understanding Data Engineering",
    issuer: "DataCamp",
    date: "Sep 2026",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/9374d64bfa486f39bdf1452706d043e0878bf14a",
  },
  {
    title: "Introduction to Relational Databases in SQL",
    issuer: "DataCamp",
    date: "Sep 2026",
    link: "/certificates/Introduction%20to%20Relational%20Databases%20in%20SQL.pdf",
  },
  {
    title: "Intermediate GitHub Concepts",
    issuer: "DataCamp",
    date: "Jan 2026",
    link: "/certificates/certificate (1).pdf",
  },
  {
    title: "Understanding Cloud Computing",
    issuer: "DataCamp",
    date: "Jul 2025",
    link: "/certificates/certificate (5).pdf",
  },
  {
    title: "Introduction to SQL Server",
    issuer: "DataCamp",
    date: "Jul 2025",
    link: "/certificates/certificate (2).pdf",
  },
  {
    title: "Introduction to Git",
    issuer: "DataCamp",
    date: "Jul 2025",
    link: "/certificates/certificate (3).pdf",
  },
  {
    title: "Introduction to GitHub Concepts",
    issuer: "DataCamp",
    date: "Jul 2025",
    link: "/certificates/certificate (4).pdf",
  },
  {
    title: "Cyber Hygiene",
    issuer: "Certified Course",
    date: "May 2025",
    link: "/certificates/Majharul Islam3384737-Cyber_Hygiene.pdf",
  },
  {
    title: "Volunteer — GUB CSE Carnival 2024",
    issuer: "Green University of Bangladesh",
    date: "2024",
    link: "/certificates/Volunteer-232002256.pdf",
  },
];

import { blogPosts } from './blogs';
export { blogPosts };
