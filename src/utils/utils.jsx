import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNode ,FaGithub,FaLinkedin } from 'react-icons/fa';
import FullstackImg from '../assets/FullstackImg.png'
import PlutoImg from '../assets/PlutoImg.png'
import ExpensesImg from '../assets/ExpensesImg.png'

import { RiNextjsFill } from "react-icons/ri";

export const navLinks = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const socialLinks = [
  { id: nanoid(), url: 'https://github.com/sheks9191?tab=repositories', icon:<FaGithub className='h-6 w-6 text-slate-700 hover:text-blue-800 duration-500'/> },
  { id: nanoid(), url: 'https://www.linkedin.com/in/olumide-sekooni-1009609b/', icon: <FaLinkedin className='h-6 w-6 text-slate-700 hover:text-blue-800 duration-500'/> },
]

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-blue-800' />,
    text: 'Expertise in HTML & CSS, proficient in designing visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-blue-800' />,
    text: 'Strong knowledge in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React JS & React Native',
    icon: <FaReact className='h-16 w-16 text-blue-800' />,
    text: 'Advanced proficiency in React and React Native, developing efficient and interactive front-end and mobile(for both iOS and Android platforms) applications with a strong emphasis on component-based architecture.',
  },

  {
    id: nanoid(),
    title: 'Node JS',
    icon: <FaNode className='h-16 w-16 text-blue-800' />,
    text: 'Highly skilled in Node Js, building back-end services - APIs for Web Apps and Mobile Apps - with a focus on efficient data handling and backend integration with MongoDB',
  },
  {
    id: nanoid(),
    title: 'Next JS',
    icon: <RiNextjsFill className='h-16 w-16 text-blue-800' />,
    text: 'Good knowledge of Next JS, building server rendered web applications with a strong focus on seamless user interactions and functionality',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: PlutoImg,
    url: 'https://pluto-store.onrender.com/',
    github: 'https://github.com/sheks9191/Full-Stack-Ecommerce-Pluto-Stores',
    title: 'Pluto Store E-commerce Website  ',
    textArray: ['MERN Stack','CSS - Styled components', 'REDUX - State management'],
  },
  {
    id: nanoid(),
    img: ExpensesImg,
    url: 'https://home-expenses-tracker.onrender.com/landing',
    github: 'https://github.com/sheks9191/FullStack-Home-Expenses-Tracking-App',
    title: 'Home Expenses Tracker',
    textArray: ['MERN Stack','CSS - Styled components', 'REDUX - State management'],
  },
  {
    id: nanoid(),
    img: FullstackImg,
    url: '',
    github: 'https://github.com/sheks9191/React-Ecommerce-Project',
    title: 'React E-commerce Project',
    textArray: ['Apollo-Graphql','CSS - Styled components', 'REDUX - State management'],
  },
];