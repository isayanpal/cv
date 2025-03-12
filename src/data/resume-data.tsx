import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sayan Snigdha Pal",
  initials: "SSP",
  location: "Kolkata, India",
  locationLink: "https://www.google.com/maps/place/Kolkata",
  about: "Web Developer",
  summary:
    "I am a passionate Web Developer skilled in building scalable web applications using React, Node.js, Express.js, and MongoDB. I leverage Next.js for server-side rendering and Docker for seamless deployment. Proficient in Git and GitHub, I excel in collaboration and version control, constantly applying modern technologies to create innovative solutions.",
  avatarUrl:
    "https://media.licdn.com/dms/image/v2/D5603AQHRA0l5VF7gQg/profile-displayphoto-shrink_400_400/B56ZWATEywGUAg-/0/1741614240171?e=1747267200&v=beta&t=7AXNoBrq09P35q7ailASQ2zIT8TJvuf3BsWg47geWhk",
  personalWebsiteUrl: "https://isayanpal.vercel.app",
  contact: {
    email: "sayanpalb@gmail.com",
    tel: "+917551838146",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/isayanpal",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sayan-snigdha-pal/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/sayanstwt",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University Of Engineering and Management, Kolkata",
      degree:
        " Bachelor’s of Technology Computer Science Engineering (A.I+M.L)",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "RAD Media Solutions",
      link: "https://www.linkedin.com/company/rad-media-solutions/",
      badges: ["Remote"],
      title: " Software Developer Intern",
      start: "Nov 2024",
      end: "Feb 2025",
      description:
        "Engineered user-centric web applications,focusing on performance optimization and responsive design; resolved three critical causes of application crashes identified during testing sessions with endusers to enhance overall reliability.Implemented seamless statemanagement flows in applications leveraging TypeScript to enhancemaintainability andscalability.",
    },
    {
      company: "Pephub",
      link: "https://www.pephub.tech/",
      badges: ["Remote"],
      title: " Software Developer Intern",
      start: "Aug 2023",
      end: "Nov 2023",
      description:
        "Engineered a robust system to aggregate and store feedback from diverse user sources, enhancing data-driven decision-making processes using  ReactJS, MongoDB, ExpressJS.",
    },
    {
      company: "V-Books",
      link: "https://www.linkedin.com/company/v-books/",
      badges: ["Remote"],
      title: "Web Developer Intern",
      start: "July 2023",
      end: "Sept 2023",
      description:
        "Spearheaded a comprehensive redesign and reconstruction of the website to enhance user experience.Implemented an optimized routing system for website pages, resulting in a 40% decrease in page load time and enhancing overall user experience.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Redux",
    "Zustand",
    "Node.js",
    "Expressjs",
    "MongoDB",
    "Firebase",
    "Supabase",
    "Prisma",
    "Cloudflare Workers",
    "Git",
    "Github",
    "Postman",
    "Docker",
  ],
  projects: [
    {
      title: "WanderAI",
      techStack: [
        "Reactjs",
        "Shadcn UI",
        "Firebase",
        "Gemini API",
        "OAuth",
      ],
      description:
        "WanderAI is an AI-powered trip planning platform that provides personalized travel itineraries using generative AI for enhanced user experiences and real-time locationdata.",
      link: {
        label: "github.com",
        href: "https://github.com/isayanpal/wanderAI",
      },
    },
    {
      title: "DocBook",
      techStack: [
        "Reactjs",
        "Redux",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      description:
        "DocBook is an appointment booking app connecting doctors, patients, and admins seamlessly.",
      link: {
        label: "github.com",
        href: "https://github.com/isayanpal/docBook",
      },
    },
    {
      title: "LearnSync",
      techStack: [
        "Reactjs",
        "Redux",
        "Node.js",
        "Express",
        "MongoDB",
        "Cohere AI Api",
      ],
      description:
        "LearnSync is an innovative adaptive learning assessment system that incorporates personality tests to detect disorders like ADHD.",
      link: {
        label: "github.com",
        href: "https://github.com/isayanpal/LearnSync",
      },
    },
    {
      title: "ThoughtBook",
      techStack: [
        "React",
        "Typescript",
        "Prisma",
        "Supabase",
        "Cloudflare Workers",
        "Hono",
        "Zod",
      ],
      description:
        "ThoughtBook is a blog-writing platform where users can create, organize, and manage their blog posts efficiently.",
      link: {
        label: "github.com",
        href: "https://github.com/isayanpal/thoughtbook",
      },
    },
    {
      title: "Log Sync",
      techStack: [
        "TypeScript",
        "Next.js",
        "Vite",
        "Zustand",
        "Shadcn UI",
        "Supabase",
      ],
      description:
        "LogSync is a simple and efficient web application designed to help you track your daily logs with ease.",
      link: {
        label: "github.com",
        href: "https://github.com/isayanpal/LogSync",
      },
    },
    {
      title: "Resourcify",
      techStack: ["Side Project", "Reactjs", "Tailwind Css"],
      description:
        "A one-stop hub for all your development and design learning resources.",
      link: {
        label: "github.com",
        href: "https://github.com/isayanpal/Resources",
      },
    },
    {
      title: "NewsTech",
      techStack: ["Side Project", "Reactjs", "Node.js", "Express"],
      description:
        "NewsTech is a web application designed to fetch and display the latest technology news articles from various sources.",
      link: {
        label: "github.com",
        href: "https://github.com/isayanpal/newstech",
      },
    },
    {
      title: "Dev Buddy",
      techStack: [
        "Reactjs",
        "Github Api",
        "Node.js",
        "Express",
      ],
      description:
        "Dev Buddy is a web application that allows users to search for GitHub profiles based on location.",
      link: {
        label: "github.com",
        href: "https://github.com/isayanpal/devBuddy",
      },
    },
    {
      title: "Quick Task",
      techStack: [
        "Reactjs",
        "Redux",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      description:
        "Effortlessly manage your tasks with secure user authentication and robust state management, all in one intuitive app.",
      link: {
        label: "github.com",
        href: "https://github.com/isayanpal/quick_task",
      },
    },
  ],
} as const;
