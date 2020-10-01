import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Anjaneyulu Kondrapally', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, My name is', 
  name: 'Anjaneyulu Kondrapally',
  subtitle: 'I am a pre-final year student at NIT, Trichy',
  cta: 'Know more', 
};

// ABOUT DATA
export const aboutData = {
  img: 'IMG-20190821-WA0008.jpg',
  paragraphOne: 'I am a fourth year undergraduate at National Institute of Technology, Tiruchchirapalli majoring in Metallurgical and Materials Engineering. I am a passionate data analyst, ML engineer and have strong fundamentals of data science, ML algorithms and object oriented programming with python. I love to solve questions on various coding platforms.',
  paragraphTwo: 'My interest also lies in web development. I like to build things. I am familiar with javascript and its frameworks like React.js and Node.js. I have worked on a couple of projects on React.js and currently working on one using Node.js. Apart from this, I am also a Tech blogger and one of the core memebers at Developer Students Club (DSC), NIT Patna.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'https://www.linkedin.com/in/anjaneyulu-kondrapally-b5723a16b/',
  btn: '',
  email: 'kondrapallyanjaneyulu2017@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/anjaneyulu-kondrapally-b5723a16b/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
