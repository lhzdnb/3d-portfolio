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
  siemens,
  cpp,
  crimela,
  lhzdnbgpt,
  tencent,
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
    title: "上海交大本科生",
    icon: sjtu,
  },
  {
    title: "南加利福尼亚大学研究生",
    icon: usc,
  },
  {
    title: "JavaScript 开发者",
    icon: javascript,
  },
  {
    title: "React 开发者",
    icon: reactjs,
  },
];

// const services = [
//   {
//     title: "Undergraduate Student of SJTU",
//     icon: sjtu,
//   },
//   {
//     title: "Graduate Student of USC",
//     icon: usc,
//   },
//   {
//     title: "JavaScript Developer",
//     icon: javascript,
//   },
//   {
//     title: "React Developer",
//     icon: reactjs,
//   },
// ];

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

// const experiences = [
//   {
//     title: "BS. in Electrical and Computer Engineering",
//     company_name: "Shanghai Jiao Tong University",
//     icon: sjtuRed,
//     iconBg: "#383E56",
//     date: "September 2020 - August 2024",
//     points: [
//       "Won the Student Development Scholarship.",
//       "2021‑2022 Undergraduate Excellent Scholarship.",
//       "After completing the undergraduate program in three years, he was nominated by the faculty to participate in the 3+2 program with the University of Southern California.",
//       "Teaching Assistant Leader of Physics Lab II.",
//     ],
//   },
//   {
//     title: "MS. in Computer Engineering",
//     company_name: "University of Southern California",
//     icon: usc,
//     iconBg: "#E6DEDD",
//     date: "August 2023 - Now",
//     points: [
//       "Became a member of the MS Honors Program for academic excellence.",
//       "GPA 4.0 / 4.0",
//     ],
//   },
//   {
//     title: "Software Automation Testing Intern",
//     company_name: "Shanghai Qing Chuang Information Technology CO., LTD.",
//     icon: eoi,
//     iconBg: "#383E56",
//     date: "January 2023 - March 2023",
//     points: [
//       "Led UI automation testing program, increasing script development efficiency by 40% with Selenium and MeterSphere, reducing test cycle time and improving project delivery.",
//       "Meticulously analyze the testing requirements of Bank of Communications' middle office system, design and execute smoke test and regression test case sets with 95% coverage.",
//       "Explore the use of Jenkins Automation Server and JaCoCo plugin integration to enable automated code coverage report generation and publishing, improving team productivity.",
//     ],
//   },
//   {
//     title: "Electrical Engineering Intern",
//     company_name: "Siemens Shanghai Medical Equipment, LTD.",
//     icon: siemens,
//     iconBg: "#E6DEDD",
//     date: "March 2023 - August 2023",
//     points: [
//       "Under the guidance of senior engineers, responsible for the development and deployment of 2 embedded system projects, using Verilog language to complete the RTL design and C++ to implement socket communication, successfully shortened the time-to-market by 20%.",
//       "Designed and implemented five test cases for embedded Linux system for new products, which reduced the product defect rate by 15% and ensured over 99% product quality pass rate.",
//     ],
//   },
// ];

const experiences = [
  {
    title: "电子与计算机工程学士",
    company_name: "上海交通大学",
    icon: sjtuRed,
    iconBg: "#383E56",
    date: "2020年9月 - 2024年8月",
    points: [
      "荣获学生发展奖学金，2021-2022 年度本科生优秀奖学金。",
      "三年完成本科课程，经过学院提名，参加与南加州大学的3+2本硕连读项目。",
      "物理实验室助教组长。",
    ],
  },
  {
    title: "计算机工程研究生",
    company_name: "美国南加利福尼亚大学",
    icon: usc,
    iconBg: "#E6DEDD",
    date: "2023年8月 - 2025年5月",
    points: ["因学习成绩优异，成为硕士荣誉项目成员。", "GPA 4.0 / 4.0"],
  },
  {
    title: "软件自动化测试工程师实习生",
    company_name: "上海擎创信息技术有限公司",
    icon: eoi,
    iconBg: "#383E56",
    date: "2023年1月 - 2023年3月",
    points: [
      "领导UI自动化测试项目，通过 Selenium 和 MeterSphere 提高脚本开发效率40%，减少了测试周期时间并提升了项目交付速度。",
      "细致分析交通银行中台系统测试需求，设计并执行覆盖率达95%的冒烟测试和回归测试用例集。",
      "探究使用Jenkins自动化服务器和JaCoCo插件的集成，实现了自动化代码覆盖率报告的生成和发布，提高了团队的工作效率。",
    ],
  },
  {
    title: "电气工程师实习生",
    company_name: "上海西门子医疗器械有限公司",
    icon: siemens,
    iconBg: "#E6DEDD",
    date: "March 2023 - August 2023",
    points: [
      "在资深工程师的指导下，负责了2个嵌入式系统项目的开发和部署，使用Verilog语言完成RTL设计，并用C++实现套接字通信，成功缩短了产品上市时间20%。",
      "设计并实施了5种针对新产品的嵌入式Linux系统的测试用例，降低了产品缺陷率15%，确保了超过99%的产品质量合格率。",
    ],
  },
  {
    title: "前端开发实习生",
    company_name: "腾讯",
    icon: tencent,
    iconBg: "#E6DEDD",
    date: "2024年5月 - 2024年8月",
    points: [
      "负责公司内部运营平台的商品库管理和价格监控系统的前端开发。通过拦截器中间件新增了商品负责人权限管理，\n" +
      "提升了系统的安全性和管理效率。",
      "熟练使用 React 框架进行开发，深入学习 Antd 组件库原理和 MVC 设计模式。使用 Next.js 完成服务端渲\n" +
      "染，提升首屏页面加载速度，优化了用户体验。",
      "学习并使用 Webhooks 自动化实现 CI 流程，提升了代码的部署效率和稳定性。",
      "整理和编写了多个技术文档，包括 Axios 拦截器的源码解析 Antd Form 表单的实现、项目架构和技术\n" +
      "栈的总结，分享了在项目中遇到的技术问题及解决方案。"
    ]
  }
];

const projects = [
  {
    name: "套接字编程",
    description:
      "在 Windows 和 Linux 系统上开发了一个基于 TCP 和 UDP 的图书馆注册系统，通过实现复杂的网络编程技术，提高了系统的访问性和可用性。",
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
    name: "CrimeRadar - LA",
    description:
      "开发了一个可视化犯罪数据的地图应用，使用户能够根据日期和类型筛选洛杉矶地区的犯罪情况，直接贡献于社区安全意识的提升和犯罪预防措施的加强。",
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
      "利用 OpenAI API 开发的多功能 GPT 应用，专注于提供个性化的旅行规划和城市探索体验。通过结合现代前端技术和人工智能，该应用旨在提高用户互动性并改善信息检索效率。",
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

// const projects = [
//   {
//     name: "Socket Programming Project",
//     description:
//       "Developed a TCP and UDP-based library registration system on Windows and Linux systems that improves accessibility and usability by implementing sophisticated network programming techniques.",
//     tags: [
//       {
//         name: "socket",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "C++",
//         color: "green-text-gradient",
//       },
//       {
//         name: "TCP/UDP",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: socket,
//     source_code_link:
//       "https://github.com/lhzdnb/socket-programming-project.git",
//   },
//   {
//     name: "CrimeRadar - LA",
//     description:
//       "A versatile GPT application developed using OpenAI's gpt-3.5-turbo API focused on providing personalized travel planning and city exploration experiences. By combining modern front-end technologies and artificial intelligence, the application aims to increase user interaction and improve information retrieval.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "redux toolkit",
//         color: "green-text-gradient",
//       },
//       {
//         name: "Antd",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: crimela,
//     source_code_link: "https://github.com/lhzdnb/crimeradar-la/tree/dev",
//   },
//   {
//     name: "lhzdnbGPT",
//     description:
//       "GPT, implemented through OpenAI's gpt-3.5-turbo api, in addition to being able to chat, also realizes the function of generating the travel plan of the city entered by the user, and at the same time generates photos of that city.",
//     tags: [
//       {
//         name: "Next.js",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "prisma",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwindcss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: lhzdnbgpt,
//     source_code_link: "https://github.com/lhzdnb/lhzdnbgpt.git",
//   },
// ];

export { services, technologies, experiences, projects };
