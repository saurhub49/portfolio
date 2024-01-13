import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Hero, LinkType, Social } from "./types";

export const links: LinkType[] = [
    {
        name: "Home",
        href: "#home",
    },
    {
        name: "About",
        href: "#about",
    },
    {
        name: "Experience",
        href: "#experience",
    },
    {
        name: "Skills",
        href: "#skills",
    },
    {
        name: "Projects",
        href: "#projects",
    },
    {
        name: "Education",
        href: "#education",
    },
    {
        name: "Testimonials",
        href: "#testimonials",
    },
    {
        name: "Contact",
        href: "#contact",
    },
];

export const heroData: Hero = {
    name: 'Saurabh',
    profession: 'Full-stack developer',
    tagLine: 'Building the future, one line of code at a time.'
};

export const socials: Social[] = [
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/saurabh-mahajan-dev/',
        icon: FaLinkedin
    },
    {
        name: 'Github',
        link: 'https://github.com/saurabhthecodewizard/',
        icon: FaGithub
    },
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/eirinikos._/',
        icon: FaInstagramSquare
    }
];