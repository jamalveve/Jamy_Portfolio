import {
    FaReact,
    FaHtml5, FaCss3, FaJava, FaInstagram, FaLinkedin,
} from "react-icons/fa";

import { BiLogoJavascript,BiLogoTailwindCss ,BiLogoNodejs,
    BiLogoSpringBoot,BiLogoTwitter} from "react-icons/bi";
import { SiExpress, SiMysql ,SiPostman,SiJira,SiEclipseche,} from "react-icons/si";
import {
    VscVscode,
    VscCommentUnresolved,
    VscTerminalPowershell
} from "react-icons/vsc";

import { FaGitAlt,FaJenkins,} from "react-icons/fa";
import { MdGroups3 } from "react-icons/md";
// import { FtaXTwitter } from "react-icons/fa6";

// import PROJECT_IMG_1 from '../assets/Images/Profile.jpg'

import PROJECT_IMG_1 from "../assets/Images/DIFP.png"
import PROJECT_IMG_2 from "../assets/Images/DH_Portfolio.jpg"
import PROJECT_IMG_3 from "../assets/Images/Tic_Tac_Toe.jpg"
import PROJECT_IMG_4 from "../assets/Images/sports.jpg"
// import PROJECT_IMG_5 from "../assets/Images/multi_sport.webp"
import PROJECT_IMG_5 from "../assets/Images/sport_betting.jpeg"
import { FaGit } from "react-icons/fa6";


export const MENU_LINKS = [
    { id: "01", label: "Home", offset: -100, to: "hero" },
    { id: "02", label: "Skills", offset: -80, to: "skills" },
    { id: "03", label: "About Me", offset: -80, to: "about" },
    { id: "04", label: "Projects", offset: -80, to: "projects" },
    { id: "05", label: "Contact", offset: -80, to: "contact" },
];


export const STATS = [
    { id: "01", count: "2", label: `Years of \nExperience` },
    { id: "02", count: "9", label: `Certifications \nEarned` },
    { id: "03", count: "6", label: `Projects \Completed` },
];


export const SKILL_TABS = [
    { id: "01", label: "All", value: "all" },
    { id: "02", label: "Frontend", value: "frontend" },
    { id: "03", label: "Backend", value: "Backend" },
    { id: "04", label: "Tools", value: "Tools" },
    { id: "05", label: "Skills", value: "Skills" },
];


export const SKILLS = [
    {
        id: "01",
        icon: FaReact,
        skill: "React JS",
        progress: 95,
        type: "frontend",
        description: "Experienced in building scalable, component-driven web applications using React. js. Proficient in "
    },
    

    {
        id: "02",
        icon: FaHtml5,
        skill: "HTML",
        progress: 95,
        type: "frontend",
        description: "Experienced in building scalable, component-driven web applications using React. js. Proficient in "
    },

    {
        id: "03",
        icon: FaCss3,
        skill: "Css",
        progress: 95,
        type: "frontend",
        description: "Experienced in building scalable, component-driven web applications using React. js. Proficient in "
    },

    {
        id: "04",
        icon: BiLogoTailwindCss,
        skill: "Tailwind Css",
        progress: 95,
        type: "frontend",
        description: "Experienced in building scalable, component-driven web applications using React. js. Proficient in "
    },

    {
        id: "05",
        icon: BiLogoJavascript,
        skill: "JS",
        progress: 95,
        type: "frontend",
        description: "Experienced in building scalable, component-driven web applications using React. js. Proficient in "
    }, 

    {
        id: "06",
        icon: FaJava,
        skill: "Java",
        progress: 95,
        type: "Backend",
        description: "Experienced in building scalable, component-driven web applications using React. js. Proficient in "
    },


    {
        id: "07",
        icon: BiLogoNodejs,
        skill: "node js",
        progress: 95,
        type: "Backend",
        description: "Experienced in building scalable, component-driven web applications using React. js. Proficient in "
    },

    {
        id: "08",
        icon: BiLogoSpringBoot,
        skill: "Spring Boot",
        progress: 95,
        type: "Backend",
        description: "Experienced in building scalable, component-driven web applications using React. js. Proficient in "
    },
    {
        id: "09",
        icon: FaJenkins,
        skill: "Jenkins",
        progress: 95,
        type: "Tools",
        description: "Experienced in building scalable, component-driven web applications using React. js. Proficient in "
    },
    {
        id: "10",
        icon: SiPostman,
        skill: "Postman",
        progress: 95,
        type: "Tools",
        description: "Experienced in building scalable, component-driven web applications using React. js. Proficient in "
    },
    {
        id: "11",
        icon: SiJira,
        skill: "Jira",
        progress: 95,
        type: "Tools",
        description: "Experienced in building scalable, component-driven web applications using React. js. Proficient in "
    },
    {
        id: "12",
        icon: FaReact,
        skill: "Fortify",
        progress: 95,
        type: "Tools",
        description: "Experienced in building scalable, component-driven web applications using React. js. Proficient in "
    },
    {
        id: "13",
        icon: FaReact,
        skill: "Elastic-Search",
        progress: 95,
        type: "Backend",
        description: "Experienced in building scalable, component-driven web applications using React. js. Proficient in "
    },
    {
        id: "14",
        icon: MdGroups3,
        skill: "Collaboration",
        progress: 95,
        type: "Skills",
        description: "Experienced in building scalable, component-driven web applications using React. js. Proficient in "
    },
    {
        id: "15",
        icon: VscCommentUnresolved,
        skill: "Problem Solving",
        progress: 95,
        type: "Skills",
        description: "Experienced in building scalable, component-driven web applications using React. js. Proficient in "
    },
    {
        id: "16",
        icon: FaReact,
        skill: "someother",
        progress: 95,
        type: "Skills",
        description: "Experienced in building scalable, component-driven web applications using React. js. Proficient in "
    },
   
    {
        id: "17",
        icon: SiMysql,
        skill: "SQL",
        progress: 95,
        type: "Backend",
        description: "Experienced in building scalable, component-driven web applications using React. js. Proficient in "
    },
    {
        id: "18",
        icon: FaGitAlt,
        skill: "Git",
        progress: 95,
        type: "Tools",
        description: "Experienced in building scalable, component-driven web applications using React. js. Proficient in "
    },
    {
        id: "19",
        icon: SiEclipseche,
        skill: "Eclipse",
        progress: 95,
        type: "Tools",
        description: "Experienced in building scalable, component-driven web applications using React. js. Proficient in "
    }, {
        id: "20",
        icon: VscVscode,
        skill: "VsCode",
        progress: 95,
        type: "Tools",
        description: "Experienced in building scalable, component-driven web applications using React. js. Proficient in "
    },
   
]
export const ABOUT_ME = {
    content: `Passionate Full-Stack Developer with expertise in both back-end and front-end development. Holding a Bachelor of Engineering in Computer Science, I have hands-on experience in building scalable applications using Java, JavaScript, React, and Spring Boot. Currently working as a Software Developer in the gaming domain, where I:

✅ Develop and maintain highly scalable backend systems using Java (Java 8, Java 17).
✅ Optimize application performance with ElasticSearch logging.
✅ Ensure seamless CI/CD pipelines using Jenkins and Bitbucket.
✅ Collaborate in an Agile environment, leveraging Jira for efficient project tracking.
✅ Debug and analyze logs using Kibana to ensure optimal system performance.
✅ Deliver front-end enhancements using React and JavaScript, improving user experience.`,
    socialLinks: [
        { id: "01", label: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/jamal-veve/" },
        { id: "02", label: "Naukuri", icon:FaLinkedin , link: "https://www.naukri.com/mnjuser/profile" },
        { id: "03", label: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/_xplorin_unseen_/" },
        { id: "04", label: "Twitter", icon: BiLogoTwitter, link: "https://x.com/home?lang=en" },
        { id: "05", label: "GitHub", icon: FaGitAlt, link: "https://github.com/jamalveve" },
    ],
    email: "jamalveve01@gmail.com",
    phone: "918940878122",
    website: "linkedin"
}

export const SOCI = [
    { id: "01", label: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/jamal-veve/" },
    { id: "02", label: "Naukuri", icon:FaLinkedin , link: "https://www.naukri.com/mnjuser/profile" },
    { id: "03", label: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/_xplorin_unseen_/" },
    { id: "04", label: "Twitter", icon: BiLogoTwitter, link: "https://x.com/home?lang=en" },
    { id: "05", label: "GitHub", icon: FaGitAlt, link: "https://github.com/jamalveve" },
];
export const PROJECTS = [
    {
        id: 1, title:
            "FLex Printing Web App using HTML css | Advetisement Website", image: PROJECT_IMG_1,
            tags: ["HTML", "CSS","JS"]
        },

    {
        id: 2, title:
            " Portfolio Website Using HTML Css SQL| Portfolio Website in JS", image: PROJECT_IMG_2,
        tags: [ "HTML", "CSS","JS","SQL"]
    },

    {
        id: 3, title:
            " My Own Tic-Tac-Toe Game! 🎮 |✅ Interactive gameplay with dynamic UI",image: PROJECT_IMG_3,
        tags: ["React", "HTML", "Tailwind css,JS"]
    },
    {
        id: 4, title:
            "Market Templates FrontEnd | Gaming Website in React", image: PROJECT_IMG_4,
        tags: ["React", "HTML", "CSS"]
    },
    {
        id: 5, title:
            "Market Templates BackEnd| Gaming Website in Java", image: PROJECT_IMG_5,
        tags: ["Java", "Spring Boot",]
    },
    // {
    //     id: 6, title:
    //         "Responsive Portfolio Website Using React JS | Portfolio Website in React", image: PROJECT_IMG_6,
    //     tags: ["React", "HTML", "Tailwind CSS"]
    // },
]

