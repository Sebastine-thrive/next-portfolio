import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

import html from '../../../public/assets/skills/html.svg';
import css from '../../../public/assets/skills/css3.svg';
import bootstrap from '../../../public/assets/skills/bootstrap.svg';
import javascript from '../../../public/assets/skills/javascript.svg';
import react from '../../../public/assets/skills/react.svg';
// import css from '../../../public/assets/skills/css3.svg';
import git from '../../../public/assets/skills/git.svg';
import saas from '../../../public/assets/skills/sass.png';
import tailwind from '../../../public/assets/skills/tailwindcss.png';
// import tailwind from '../../../public/assets/skills/tailwind.png';

const  MyLinks = [
    {
        "href": 'https://github.com/Sebastine-thrive',
        "icon": <FaGithub />
    },
    {
        "href": 'https://www.linkedin.com/in/sebastine-ogu-b36324144',
        "icon": <FaLinkedinIn />
    },
    {
        "href": 'mailto:sebastinoptimum@gmail.com',
        "icon": <AiOutlineMail />
    },
    {
        "href": 'https://twitter.com/sebasious1',
        "icon": <FaTwitter />
    },
]

const Skillset = [
    {
        "id": "html",
        "name": "HTML",
        "image": html,
        "url": "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
    },
    {
        "id": "css",
        "name": "CSS",
        "image": css
    },
    {
        "id": "bootstrap",
        "name": "bootstrap",
        "image": bootstrap
    },
    {
        "id": "Saas",
        "name": "Saas",
        "image": saas
    },
    {
        "id": "TailwindCSS",
        "name": "TailwindCSS",
        "image": tailwind
    },
    {
        "id": "Javascript",
        "name": "Javascript",
        "image": javascript
    },
    {
        "id": "React",
        "name": "React",
        "image": react
    },
    {
        "id": "Git",
        "name": "git",
        "image": git
    },

  
]

export {Skillset, MyLinks};