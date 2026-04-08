import Image1 from "../../../public/assets/img/portfolio/project-1.jpg";
import Image2 from "../../../public/assets/img/portfolio/project-2.jpg";
import Image3 from "../../../public/assets/img/portfolio/project-3.jpg";
import Image4 from "../../../public/assets/img/portfolio/project-4.jpg";
import Image5 from "../../../public/assets/img/portfolio/project-5.jpg";
import Image6 from "../../../public/assets/img/portfolio/project-6.jpg";
import Image7 from "../../../public/assets/img/portfolio/project-7.jpg";
import Image8 from "../../../public/assets/img/portfolio/project-8.jpg";
import Image9 from "../../../public/assets/img/portfolio/project-9.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "Attend-AI",
    image: Image1,
    tag: ["Machine Learning"],
    delayAnimation: "500",
    modalDetails: [
      {
        project: "Attend-AI: AI based Digital Attendance System",
        client: "Self-Project",
        language: "Python, React.js, Node.js, MongoDB,",
        preview: "ai-facerecognition-attendace-bpt4.vercel.app",
        link: "https://ai-facerecognition-attendace-bpt4.vercel.app/",
      },
    ],
  },
  {
    id: 2,
    type: "Lemin AI - RCS",
    image: Image2,
    tag: ["video"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Lemin AI - RCS Business Messaging SaaS Platform",
        client : "Internship Project",
        language: "Next.js, Node.js, MySQL, Tailwind CSS, React.js, TypeScript",
        preview: "leminai.com/rcs",
        link: "https://leminai.com/rcs/",
      },
    ],
  },
  {
    id: 3,
    type: "Entrepreneurship Cell",
    image: Image3,
    tag: [],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Entrepreneurship Cell - Website",
        client: "College Website",
        language: "Next.js, Node.js, Tailwind CSS, React.js, TypeScript",
        preview: "ecellgla.com",
        link: "https://ecellgla.com/",
      },
    ],
  },
  {
    id: 4,
    type: "CrickGenie",
    image: Image4,
    tag: ["logo", "video"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Hackathon Project",
        client: "Self-Project",
        language: "Next.js, React.js, Node.js, MongoDB, Google Cloud, Google Gemini API",
        preview: "www.videohive.net",
        link: "https://www.videohive.net",
      },
    ],
  },
  {
    id: 5,
    type: "saas project",
    image: Image5,
    tag: ["logo"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Web Application",
        client: "Themeforest",
        language: "HTML, CSS, ReactJS",
        preview: "www.envato.com",
        link: "https://themeforest.net/item/deski-saas-software-react-template/33799794",
      },
    ],
  },
  {
    id: 6,
    type: "mockup project",
    image: Image6,
    tag: ["logo", "mockup"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Themeforest",
        language: "HTML, CSS, Javascript",
        preview: "www.pexels.com",
        link: "https://www.pexels.com",
      },
    ],
  },
  {
    id: 7,
    type: "facebook project",
    image: Image7,
    tag: ["logo"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "Facebook",
        language: "HTML, CSS, Javascript",
        preview: "www.facebook.com",
        link: "https://www.facebook.com/ibthemes",
      },
    ],
  },
  {
    id: 8,
    type: "dribble project",
    image: Image8,
    tag: ["graphic design"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Website",
        client: "Dribbble",
        language: "HTML, CSS, Javascript",
        preview: "www.dribbble.com",
        link: "https://dribbble.com/ib-themes",
      },
    ],
  },
  {
    id: 9,
    type: "behence project",
    image: Image9,
    tag: ["graphic design", "mockup"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Behance",
        language: "HTML, CSS, Javascript",
        preview: "www.behance.com",
        link: "https://www.behance.net/ib-themes",
      },
    ],
  },
];

export default PortfolioData;
