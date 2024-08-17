import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import html from "../../../public/assets/skills/html.svg";
import css from "../../../public/assets/skills/css3.svg";
import bootstrap from "../../../public/assets/skills/bootstrap.svg";
import javascript from "../../../public/assets/skills/javascript.svg";
import react from "../../../public/assets/skills/react.svg";
// import css from '../../../public/assets/skills/css3.svg';
import git from "../../../public/assets/skills/git.svg";
import saas from "../../../public/assets/skills/sass.png";
import tailwind from "../../../public/assets/skills/tailwindcss.png";
import next from "../../../public/assets/skills/nextjs.png";

const MyNavbarLinks = [
  { title: "home" },
  {
    title: "about"
  },
  {
    title: "skills"
  },
  {
    title: "projects"
  },
  {
    title: "contact"
  },
];

const MyLinks = [
  {
    href: "https://github.com/Sebastine-thrive",
    icon: <FaGithub />,
  },
  {
    href: "https://www.linkedin.com/in/sebastine-ogu-b36324144",
    icon: <FaLinkedinIn />,
  },
  {
    href: "mailto:sebastinoptimum@gmail.com",
    icon: <AiOutlineMail />,
  },
  {
    href: "https://twitter.com/sebasious1",
    icon: <FaTwitter />,
  },
];

const Skillset = [
  {
    id: "html",
    name: "HTML",
    image: html,
    url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
  },
  {
    id: "css",
    name: "CSS",
    image: css,
    url: "https://developer.mozilla.org/en-US/docs/Learn/CSS",
  },
  {
    id: "Git",
    name: "git",
    image: git,
    url: "https://git-scm.com/",
  },
  {
    id: "bootstrap",
    name: "bootstrap",
    image: bootstrap,
    url: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
  },
  {
    id: "Saas",
    name: "Saas",
    image: saas,
    url: "https://sass-lang.com/",
  },
  {
    id: "TailwindCSS",
    name: "TailwindCSS",
    image: tailwind,
    url: "https://tailwindcss.com/",
  },
  {
    id: "Javascript",
    name: "Javascript",
    image: javascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: "React",
    name: "React",
    image: react,
    url: "https://reactjs.org/",
  },
  {
    id: "Next",
    name: "Next Js",
    image: next,
    url: "https://nextjs.org/",
  },
];

export { Skillset, MyLinks, MyNavbarLinks };
