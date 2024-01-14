import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Experience, Hero, LinkType, Social } from "./types";
import { company } from "./assets";

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

export const experiences: Experience[] = [
    {
        id: 1,
        title: "Software Engineer",
        companyName: "NetSPI",
        icon: company,
        iconBg: "#e9edf6",
        date: "July 2023 - Present",
        points: [
            "Led the successful implementation of Multi-Factor Authentication (MFA) in Spring Framework with Java, enhancing user security via phone number and Microsoft Authenticator app, which resulted in a 30% reduction in unauthorised intrusion attempts.",
            "Initiated an innovative login flow in React with Typescript supporting features like MFA, password expiration, and prevention of reuse.",
            "Mentored and empowered new team members through comprehensive training in product, code, and technology practices for swift integration and impactful contributions to product advancement.",
            "Demonstrated adaptability through a swift transition to a new project, with a driven mindset and delivering valuable contributions that accelerated the timeline by 15%.",
        ],
    },
    {
        id: 2,
        title: "Associate Software Engineer",
        companyName: "NetSPI",
        icon: company,
        iconBg: "#e9edf6",
        date: "May 2022 - June 2023",
        points: [
            "Led the BAS (Breach and Attack Simulation) transition from a company-centric to an operation-centric focus, fostering collaboration through discussions with team members to optimize dashboards and APIs, resulting in a 25% improvement in detecting and mitigating potential security threats.",
            "Liaised transparent communication channels during untested status implementation for detection control level, aligning efforts with teammates on operation-centered dashboards.",
            "Cultivated a collaborative culture while working on features like MITRE Tag import with STIX models in C#, ensuring collective exploration of the best solutions, increasing team efficiency and problem-solving speed by 15%.",
            "Coordinated the product reporting feature using the pdfmake library in React, with a unique JavaScript and Web workers solution, which reduced report generation time by 60%, showcasing both efficiency and creative problem-solving.",
            "Implemented advanced filtering functionality for TTP Coverages with .NET Core, resulting in a 40% improvement in data analysis speed and accuracy, optimizing the platform for large-scale data processing.",
        ],
    },
];