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
  socket,
  threejs,
  siemens,
  cpp,
  crimela,
  lhzdnbgpt,
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
    name: "Socket Programming Project",
    description:
      "In this socket programming project, I implemented a library registration system based on TCP and UDP, both on Windows and Linux.",
    tags: [
      {
        name: "socket",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "TCP/UDP",
        color: "pink-text-gradient",
      },
    ],
    image: socket,
    source_code_link:
      "https://github.com/lhzdnb/socket-programming-project.git",
  },
  {
    name: "CrimeLA",
    description:
      "User can see any of the specified date ranges and specified types of crime around you, and can use the website to determine if the neighborhood around is safe or not.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "green-text-gradient",
      },
      {
        name: "Antd",
        color: "pink-text-gradient",
      },
    ],
    image: crimela,
    source_code_link: "https://github.com/lhzdnb/crimeradar-la/tree/dev",
  },
  {
    name: "lhzdnbGPT",
    description:
      "GPT, implemented through OpenAI's gpt-3.5-turbo api, in addition to being able to chat, also realizes the function of generating the travel plan of the city entered by the user, and at the same time generates photos of that city.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: lhzdnbgpt,
    source_code_link: "https://github.com/lhzdnb/lhzdnbgpt.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
