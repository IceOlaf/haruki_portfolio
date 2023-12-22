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
  feds,
  nexa,
  farhanblog,
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
    title: "Work Exp",
  },
  {
    id: "skill",
    title: "Skill",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "feedback",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End",
    icon: web,
  },
  {
    title: "Back-End",
    icon: mobile,
  },
  {
    title: "Database",
    icon: backend,
  },
  {
    title: "AI Bot",
    icon: creator,
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
    title: "Full-Stack developer",
    company_name: "Navantis",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Mar 2022 - Aug 2023",
    points: [
      "Built and maintained scalable web applications that implement ChatGPT using Node.js, Express, React, Angular, etc.",
      "led a team of 10 highly skilled developers over a three-month period to successfully deliver a major e-commerce website project.",
      "Work with technical product managers contributing to blueprints and assisting with annual planning of feature sets",
      "Implemented RESTful APIs and microservices architecture to facilitate seamless integration with front-end applications and third-party services.",
      "Built, led, mentored and motivated a team of Analysts, Data Scientists to drive tactical initiatives",
      "Spearheaded the migration of legacy systems to cloud-based infrastructure using AWS, improving system reliability and reducing operational costs"
    ],
  },
  {
    title: "Full-Stack developer",
    company_name: "Tucows Inc.",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2021 - Feb 2022",
    points: [
      
      "Stayed updated with the latest AI and web development trends and technologies, continuously improving skills and knowledge.",
      "Assisted in developing and training AI models for various projects, gaining hands-on experience in machine learning and deep learning techniques.",
      "Conducted data preprocessing, feature engineering, and model evaluation to optimize model performance.",
      "Assisted in troubleshooting and resolving technical issues, ensuring smooth operation of AI systems.",
    ],
  },
  {
    title: "Lead Data Scientist",
    company_name: "SolarWinds",
    icon: shopify,
    iconBg: "#383E56",
    date: "July 2019 - Dec 2020",
    points: [
      "Oversee the collection, storage, management, quality and governance of data.",
      "Developed an algorithm to identify toll plaza missing reload transactions, resulting in RM 11 million in recovered revenue every year.",
      "Built, led, mentored and motivated a team of Analysts, Data Scientists to drive tactical initiatives",
      "Tools used: Spark, Python, AWS Sagemaker",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "FreshBooks",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2018 - Apr 2019 ",
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
      "I thought it would take at leat 2 months to create our website because it required extracting detailed data from all famous Car companies. However. thanks to Huraki's web scraping skills, we were able to launch a perfect website in just three weeks",
    name: "Sara Lee",
    designation: "CEO",
    company: "Navantis",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a developer who truly cares about their clients' success like Huraki does. He's notable strength is Client satisfaction",
    name: "Chris Brown",
    designation: "CFO",
    company: "Tucows Inc",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Huraki Murakami helped businesses improve our lead management processes by developing efficient lead tracking and management systems, and by providing training and support to the sales team. I have no doubt he's one of the best lead generation experts around!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "FreshBooks",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Feds.lol",
    description:
      "Feds.lol is a platform that lets users create bio links to display their social media links. This site was custom designed and then created with webflow.",
    tags: [
      {
        name: "webflow",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: feds,
    source_code_link: "https://feds-lol.webflow.io/",
  },
  {
    name: "Farhan Blog",
    description:
      "Farhan is a 15-year-old blogger, I created this site for him to gain experience but unfortunately I didn't get to fully finish it. It was custom designed by my and developed in Webflow. Many of the graphics you see on the website were made by me aswell",
    tags: [
      {
        name: "Webflow",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "green",
      },
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
    ],
    image: farhanblog,
    source_code_link: "https://farhan-info.webflow.io/",
  },
  {
    name: "Nexa",
    description:
      "Nexa is a concept design of a digital marketing agency. All graphics were made by me. This is an example of a modern website design I can make",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      
    ],
    image: nexa,
    source_code_link: "https://www.figma.com/proto/YTRitKxzBZI1YStNea2rvX/concept-design",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "WordPress",
        color: "green",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/IceOlaf",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green",
      },
      {
        name: "WordPress",
        color: "pink-text-gradient",
      }
    ],
    image: jobit,
    source_code_link: "https://github.com/IceOlaf",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "WordPress",
        color: "green",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/IceOlaf",
  }
];

export { services, technologies, experiences, testimonials, projects };
