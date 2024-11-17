import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sayan Snigdha Pal",
  initials: "SSP",
  location: "Kolkata, India",
  locationLink: "https://www.google.com/maps/place/Kolkata",
  about: "Web Developer",
  summary:
    "I am a passionate Full-Stack Developer with a strong foundation in building scalable and high-performance web applications. My tech stack includes expertise in React for building dynamic user interfaces, Node.js and Express.js for creating robust backend services, and MongoDB for efficient database management. I also leverage Next.js to develop server-side rendered applications, and Docker for containerization, ensuring seamless deployment and scalability. With proficient use of Git and GitHub, I collaborate effectively and manage version control in all my projects. I am constantly learning and applying modern web technologies to create innovative solutions.",
  avatarUrl:
    "https://media.licdn.com/dms/image/v2/D5603AQGrlwfdsQq3HA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710222618822?e=1737590400&v=beta&t=KA6BW8FMOQAUis6GjanBgd0AH-gS2Z-CI_LoKh2kv2E",
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
      title: " Frontend Developer Intern",
      start: "Nov 2024",
      end: null,
      description:
        "Collaborated on developing dynamic, user-centered web applications with a focus on performance optimization and responsive design using ReactJS,NextJS,Typescript.",
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
    "Java",
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Redux",
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
      title: "LearnSync",
      techStack: [
        "Full Stack Developer",
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
        "Full Stack Developer",
        "React",
        "Typescript",
        "Prisma",
        "Supabase",
        "Cloudflare Workers",
        "Hono",
        "Zod"
      ],
      description:
        "ThoughtBook is a blog-writing platform where users can create, organize, and manage their blog posts efficiently.",
      link: {
        label: "github.com",
        href: "https://github.com/isayanpal/thoughtbook",
      },
    },
    {
      title: "DocBook",
      techStack: [
        "Full Stack Developer",
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
      title: "Log Sync",
      techStack: [
        "Side Project",
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
      techStack: ["Side Project", "Reactjs", "Node.js", "Express",],
      description:
        "NewsTech is a web application designed to fetch and display the latest technology news articles from various sources.",
      link: {
        label: "github.com",
        href: "https://github.com/isayanpal/newstech",
      },
    },
    {
      title: "Dev Buddy",
      techStack: ["Side Project","Reactjs",
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
      techStack: ["Side Project", 
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
