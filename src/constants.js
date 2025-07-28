// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import adgvitLogo from './assets/company_logo/adgvit_logo.jpeg';
import arconLogo from './assets/company_logo/arcon.png';
import arihantLogo from './assets/company_logo/arihant.png';

// Education Section Logo's
import vitLogo from './assets/education_logo/vit_logo.png';
import montfortLogo from './assets/education_logo/montfort_logo.png';

// Project Section Logo's
import networkLogo from './assets/work_logo/network.jpeg';
import sleepLogo from './assets/work_logo/sleep.jpg';
import pillLogo from './assets/work_logo/pill.jpg';
import eventLogo from './assets/work_logo/event.jpg';
import rationLogo from './assets/work_logo/ration.jpg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: adgvitLogo,
      role: "Core Member (Management Core)",
      company: "ADG-VIT",
      date: "Aug 2024 – Present",
      desc: "Managed finances and sponsorships; built partnerships for club events.",
      skills: ["Teamwork", "Finance", "Sponsorship", "Event Management"]
    },
    {
      id: 1,
      img: arconLogo,
      role: "Project Intern",
      company: "ARCON TechSolutions",
      date: "May 2025 – Jul 2025",
      desc: "Worked on real-time packet capture and anomaly detection. Built dashboards and submitted documentation as per guidelines.",
      skills: ["Packet Capture", "Anomaly Detection", "Dashboards", "Documentation"]
    },
    {
      id: 2,
      img: arihantLogo,
      role: "Web development Intern",
      company: "Arihant Webtech",
      date: "May 2024 – Jul 2024",
      desc: "Trained on Angular and .NET Core API. Built mini projects, collaborated effectively, solved complex problems.",
      skills: ["Angular", ".NET Core API", "Collaboration", "Problem Solving"]
    }
  ];
  
  export const education = [
    {
      id: 0,
      img: vitLogo,
      school: "Vellore Institute of Technology, Vellore",
      date: "2023 - Present",
      grade: "CGPA 8.72",
      desc: "Currently pursuing B.Tech in Information Technology at VIT Vellore. The program provides comprehensive knowledge in software development, data structures, algorithms, web technologies, and modern IT practices. I'm actively involved in various technical projects and continuously learning new technologies to enhance my skills in the field of Information Technology.",
      degree: "B.Tech in Information Technology",
    },
    {
      id: 1,
      img: montfortLogo,
      school: "Montfort School, Ashok Vihar, Delhi",
      date: "2021 - 2023",
      grade: "88%",
      desc: "Completed XII standard with PCMB (Physics, Chemistry, Mathematics, Biology) from Montfort School, Ashok Vihar, Delhi. The curriculum provided a strong foundation in science and mathematics, preparing me for higher education in technology and engineering fields.",
      degree: "XII (PCMB)",
    },
    {
      id: 2,
      img: montfortLogo,
      school: "Montfort School, Ashok Vihar, Delhi",
      date: "2020 - 2021",
      grade: "94%",
      desc: "Completed X standard from Montfort School, Ashok Vihar, Delhi. Achieved excellent academic performance with a focus on core subjects and overall development.",
      degree: "X",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Network Packet Analysis and Anomaly Detection",
      description:
        "Built real-time traffic analyzer using Python, Scapy, and Streamlit. Used Z-score for anomaly detection and Plotly for visualizations. Detected port scans, filtered local CIDR traffic, and added fake traffic generator.",
      image: networkLogo,
      tags: ["Python", "Scapy", "Streamlit", "Plotly", "Z-score", "Anomaly Detection"],
      github: "https://github.com/aditchauhan10/network-analyzer",
      webapp: "",
    },
    {
      id: 1,
      title: "Smart Ration Allocation System",
      description:
        "Implemented ML model (Random Forest) for ration prediction and optimization. Analyzed user consumption patterns to enhance resource distribution and improve efficiency in ration allocation.",
      image: rationLogo,
      tags: ["Machine Learning", "Random Forest", "Python", "Data Analysis", "Optimization"],
      github: "https://github.com/kush7arora/dataset_protothon",
      webapp: "",
    },
    {
      id: 2,
      title: "E-Pill / Medicine Tracking System",
      description:
        "Built a full-stack app using React, Flask, HTML, CSS, and JavaScript. Added scheduling, alerts, and patient record tracking for medication management with comprehensive dashboard.",
      image: pillLogo,
      tags: ["React", "Flask", "JavaScript", "HTML", "CSS", "Full-Stack"],
      github: "https://github.com/burntcookiedough/Pill-Management",
      webapp: "",
    },
    {
      id: 3,
      title: "Event Manager",
      description:
        "Created a full-stack Node.js + Express app for event scheduling and registration. Implemented role-based access for admin and users; integrated MongoDB for seamless event creation, editing, and registration tracking.",
      image: eventLogo,
      tags: ["Node.js", "Express", "MongoDB", "JavaScript", "Full-Stack", "Role-Based Access"],
      github: "https://github.com/arihantcanada/event-manager",
      webapp: "",
    },
    {
      id: 4,
      title: "Sleep Tracker and Management Website",
      description:
        "A web-based sleep tracking and management system that allows users to log sleep patterns, analyze sleep quality, and receive personalized tips for improving sleep habits using interactive charts and reports.",
      image: sleepLogo,
      tags: ["Web Development", "JavaScript", "HTML", "CSS", "Data Visualization", "Health Tech"],
      github: "",
      webapp: "",
    },
  ];  