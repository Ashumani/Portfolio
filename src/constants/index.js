import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Apigee Developer",
    icon: web,
    afterFlipped:[
      "Apigee Developer",
      "Layer 7 Developer"
    ]
  },
  {
    title: "Front End Developer",
    icon: mobile,
    afterFlipped:[
      "React",
      "Angular",
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
    ]
  },
  {
    title: "Backend Developer",
    icon: backend,
    afterFlipped:[
      "Node JS",
      "Python",
      "Java",
      "JavaScript"
    ]
  },
  {
    title: "Cloud",
    icon: creator,
    afterFlipped:[
      "GCP",
      "Azur"
    ]
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Apigee Developer",
    company_name: "Cognizant",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2020 - till date",
    points: [
      "Proxy Development Expert: Proficient in developing and customizing proxies to meet specific business needs",
"Proxy Document Expert: Create and maintain Ignite documents aligning with proxy requirements",
"Pipeline Automation: Build and trigger Jenkins pipelines for seamless CURD activity on Hybrid, OPDK, and SaaS platforms",
"Version Control: Utilize Git for efficient code management and tracking changes",
"Monitoring and Analysis: Employ Splunk and Dynatrace to analyze logs, perform advanced queries, and generate insightful reports",
    ],
  },
  {
    title: "Apigee Developer | Layer 7 Developer | Node JS Developer",
    company_name: "Velociter",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2020 - Dec 2023",
    points: [
     "I specialize in Google Cloud Console (GCP) and Google Apigee, where I’ve developed a Publisher and Subscriber module to push and pull data and created cron jobs in Cloud Functions using Python to manage traffic delays",
    "I also design Apigee extensions to publish messages to the GCP publisher module",
    "Currently, I worked on a CRM project using Node.js, Express.js, MySQL, and Angular. My responsibilities include developing APIs in Node.js, integrating them with Angular, and designing UI with HTML, CSS, Bootstrap, and AJAX",
    "Additionally, I schedule cron jobs on Linux for various tasks",
    ],
  },
  {
    title: "Node JS Developer",
    company_name: "Velociter",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jun 2020 - Dec 2023",
    points: [
      "Developing and maintaining web applications using Angular.js , Node.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Internship",
    company_name: "WebQuadra",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "June 2019 - Mar-2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a Apigee Developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
