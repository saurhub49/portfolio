import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Experience, Hero, LinkType, Project, ProjectTag, Social, Technology } from "./types";
import { aws, bootstrap, company, csharp, css, docker, dotnet, emeraldoasis, git, github, html, java, javascript, lambda, mui, mysql, nextjs, opus, portfolio, portfolio3d, postgresql, python, reactjs, redux, s3, springboot, springframework, tailwind, typescript } from "./assets";

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
        icon: FaLinkedin,
        iconColor: '#0077b5'
    },
    {
        name: 'Github',
        link: 'https://github.com/saurabhthecodewizard/',
        icon: FaGithub,
        iconColor: '#333'
    },
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/eirinikos._/',
        icon: FaInstagramSquare,
        iconColor: '#E1306C'
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

export const skills: Technology[] = [
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Python",
        icon: python,
    },
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
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "C#",
        icon: csharp,
    },
    {
        name: "Spring Boot",
        icon: springboot,
    },
    {
        name: "Spring Framework",
        icon: springframework,
    },
    {
        name: ".NET Core",
        icon: dotnet,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "PostgreSQL",
        icon: postgresql,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Next JS",
        icon: nextjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "Github",
        icon: github,
    },
    {
        name: "Material UI",
        icon: mui,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "AWS",
        icon: aws,
    },
    {
        name: "AWS S3",
        icon: s3,
    },
    {
        name: "AWS Lambda",
        icon: lambda,
    }
];

export const projects: Project[] = [
    {
        name: "Portfolio",
        description:
            "The Portfolio Project serves as an extensive online platform crafted to highlight the expertise, projects, professional journey, and accomplishments of a software developer. This web application is meticulously designed to present a captivating and interactive display of the developer's skills and experiences. Functioning as a dynamic digital resume, the portfolio offers a unique space for the developer to showcase their career path, skills, and noteworthy achievements in a visually appealing manner.",
        tags: [
            {
                name: "React",
                color: "#60A5FA",
            },
            {
                name: "NextJS",
                color: "#6EE7B7",
            },
            {
                name: "Typescript",
                color: "#FCD34D",
            },
            {
                name: "Swiper",
                color: "#A855F7",
            },
            {
                name: "Framer",
                color: "#FF7EB6",
            }
        ] as ProjectTag[],
        image: portfolio,
        link: "https://github.com/saurabhthecodewizard/portfolio",
    },
    {
        name: "3d Portfolio",
        description:
            "The 3d Portfolio Project is a comprehensive web application designed to showcase a software developer's skills, projects, experiences, and achievements in a visually appealing and interactive manner. This portfolio acts as a digital resume and a platform for the developer to present their professional journey, skills, and accomplishments.",
        tags: [
            {
                name: "React",
                color: "#60A5FA",
            },
            {
                name: "Tailwind",
                color: "#6EE7B7",
            },
            {
                name: "TypeScript",
                color: "#FCD34D",
            },
            {
                name: "ThreeJS",
                color: "#A855F7",
            },
            {
                name: "Framer",
                color: "#FF7EB6",
            },
            {
                name: "React-tilt",
                color: "#FED7AA",
            },
        ] as ProjectTag[],
        image: portfolio3d,
        link: "https://github.com/saurabhthecodewizard/3d-portfolio-for-dev",
    },
    {
        name: "Opus",
        description:
            "A corporate management system which is a specialized solution designed to facilitate efficient management of resources within an organization. This comprehensive system streamlines various HR processes, including employee onboarding, attendance tracking, project and task management.",
        tags: [
            {
                name: "Java",
                color: "#60A5FA",
            },
            {
                name: "Spring Boot",
                color: "#6EE7B7",
            },
            {
                name: "OpenAPI",
                color: "#FCD34D",
            },
            {
                name: "MySQL",
                color: "#A855F7",
            },
            {
                name: "JavaScript",
                color: "#FF7EB6",
            },
            {
                name: "TypeScript",
                color: "#FB923C",
            },
            {
                name: "React",
                color: "#A5F3EB",
            },
            {
                name: "Redux",
                color: "#D4A5A5",
            },
            {
                name: "MUI",
                color: "#FED7AA",
            },
        ] as ProjectTag[],
        image: opus,
        link: "https://github.com/saurabhthecodewizard/opus-client",
        extraLink: "https://github.com/saurabhthecodewizard/opus-server",
    },
    {
        name: "Emerald Oasis",
        description:
            "A Multi-Cuisine Food Ordering System which revolutionizes the dining experience for customers of the restaurant chain, Emerald Oasis. This intuitive system offers an online ordering solution that allows customers to explore a diverse multi-cuisine menu, place orders, all from the comfort of their homes or on-the-go.",
        tags: [
            {
                name: "Java",
                color: "#60A5FA",
            },
            {
                name: "Spring Boot",
                color: "#6EE7B7",
            },
            {
                name: "MySQL",
                color: "#FCD34D",
            },
            {
                name: "JavaScript",
                color: "#A855F7",
            },
            {
                name: "React",
                color: "#FF7EB6",
            },
            {
                name: "Bootstrap",
                color: "#FED7AA",
            },
        ] as ProjectTag[],
        image: emeraldoasis,
        link: "https://github.com/saurabhthecodewizard/Emerald-Oasis",
    },
];