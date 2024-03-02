import {
  sjtu,
  sjtuRed,
  usc,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  python,
  eoi,
  carrent,
  jobit,
  tripguide,
  threejs,
  siemens,
  cpp,
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
    title: "SJTU Undergraduate Student",
    icon: sjtu,
  },
  {
    title: "USC Graduate Student",
    icon: usc,
  },
  {
    title: "JavaScript Developer",
    icon: javascript,
  },
  {
    title: "React Developer",
    icon: reactjs,
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
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
];

const experiences = [
  {
    title: "BS. in Electrical and Computer Engineering",
    company_name: "Shanghai Jiao Tong University",
    icon: sjtuRed,
    iconBg: "#383E56",
    date: "September 2020 - August 2024",
    points: [
      "Won the Student Development Scholarship.",
      "2021‑2022 Undergraduate Excellent Scholarship.",
      "Completion of the undergraduate program in 3 years and participation in the 3+2 program with USC.",
      "Teaching Assistant Leader of Physics Lab II.",
    ],
  },
  {
    title: "MS. in Computer Engineering",
    company_name: "University of Southern California",
    icon: usc,
    iconBg: "#E6DEDD",
    date: "August 2023 - Now",
    points: [
      "Became a member of the MS Honors Program for academic excellence.",
      "GPA 4.0 / 4.0",
    ],
  },
  {
    title: "Software Automation Testing Intern",
    company_name: "Shanghai Qing Chuang Information Technology CO., LTD.",
    icon: eoi,
    iconBg: "#383E56",
    date: "January 2023 - March 2023",
    points: [
      'Led the "UI automation testing" project using Selenium and MeterSphere, improving script production efficiency by 40%.',
      "Conducted research in automation technology to enhance script production.",
      "Analyzed test requirements, developed and executed test cases with thorough documentation.",
    ],
  },
  {
    title: "Electrical Engineering Intern",
    company_name: "Siemens Shanghai Medical Equipment, LTD.",
    icon: siemens,
    iconBg: "#E6DEDD",
    date: "March 2023 - August 2023",
    points: [
      "Conducted field inspections at the production frontline for operational insight.",
      "Acquired hands‑on skills and knowledge in embedded system engineering through close collaboration with experienced engineers.",
      "Followed the quality assurance program diligently, overseeing process checks and ensuring thorough testing of systems.",
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
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
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
