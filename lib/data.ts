import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Education, Experience, Hero, LinkType, Project, ProjectTag, Social, Technology, Testimonial } from "./types";
import { akash, aws, bharati, bootstrap, company, csharp, css, docker, dotnet, emeraldoasis, git, github, html, java, javascript, lambda, manasi, mui, mysql, nextjs, opus, portfolio, portfolio3d, postgresql, prafull, python, reactjs, redux, s3, sppu, springboot, springframework, sujit, sunbeam, tailwind, typescript } from "./assets";
import { FaXTwitter } from "react-icons/fa6";

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
        name: 'X',
        link: 'https://twitter.com/CodeWizSaurabh/',
        icon: FaXTwitter,
        iconColor: '#000000'
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
                name: "Tailwind",
                color: "#A855F7",
            },
            {
                name: "Framer",
                color: "#FF7EB6",
            },
            {
                name: "Swiper",
                color: "#FED7AA",
            },
        ] as ProjectTag[],
        image: portfolio,
        link: "https://github.com/saurabhthecodewizard/portfolio",
    },
    {
        name: "3d Portfolio",
        description:
            "The 3D Portfolio Project is an innovative web application that leverages cutting-edge 3D components to showcase a software developer's skills, projects, experiences, and achievements. This visually appealing and interactive portfolio serves as a dynamic digital resume, offering a unique platform for the developer to present their professional journey and accomplishments with a focus on the immersive 3D elements integrated throughout the project with the help of the three js library.",
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

export const educations: Education[] = [
    {
        id: 1,
        degree: 'PostGraduate Diploma in Advance Computing',
        grade: '84.63%',
        university: 'Sunbeam Institute of Information Technology, Pune, India',
        date: 'Sep 2021 - Apr 2022',
        icon: sunbeam,
        iconBg: '#FAF9F6',
        points: [
            'Honored to possess a PG Diploma in Advanced Computing and securing All India Rank 1 in the CCAT entrance exam.',
            'The diverse syllabus covered critical subjects such as OS, Software Development Methodologies, OOP, DSA, Database Technologies, Web-based Java Programming, Web Programming, and .NET, shaping my skill set.',
            'Led restaurant management website project, guiding team to develop a robust solution using Spring, React, and MySQL, showcasing technical acumen and effective leadership.',
            'Top-ranking academic excellence combined with practical project leadership provides a versatile skill set for tackling complex challenges in software development.',
        ]
    },
    {
        id: 2,
        degree: 'Bachelor of Engineering (Mechanical)',
        grade: '7.59',
        university: 'Savitribai Phule Pune University, India',
        date: 'Aug 2017 - Nov 2020',
        icon: sppu,
        iconBg: '#FAF9F6',
        points: [
            'Sponsorship Coordinator role in the final year showcased strategic thinking and effective coordination, directly transferrable to software development.',
            'Department Head role in the third year honed project management and organizational abilities, emphasizing precision and attention to detail—qualities seamlessly transitioned into the software engineering role.',
            'Leadership experiences contribute to a results-oriented mindset and collaborative approach, enhancing the ability to thrive in cross-functional software development teams.'
        ]
    },
    {
        id: 3,
        degree: 'Diploma in Mechanical Engineering',
        grade: '81.53%',
        university: 'Bharati VidyaPeeth Deemed University Pune, India',
        date: 'Aug 2014 - Jun 2017',
        icon: bharati,
        iconBg: '#FAF9F6',
        points: [
            'Diploma and diverse co-curriculars strengthened hands-on problem-solving skills for software engineering challenges.',
            'Active project participation showcased adeptness in applying engineering principles, fostering crucial collaborative and communication skills.',
            'Unique blend of strategic thinking, organizational prowess, and hands-on problem-solving equips tools to address complex software challenges with confidence, fostering a dynamic work environment.'
        ]
    }
];

export const testimonials: Testimonial[] = [
    {
        testimonial:
            "I highly recommend Saurabh as a dedicated and knowledgeable professional in software development. His invaluable contributions during our postgraduate course were evident in both technical discussions and project development. Saurabh's exceptional problem-solving skills make him an asset to any team or project.",
        name: "Prafull Bagde",
        designation: "Product Manager",
        company: "Qollabra",
        image: prafull,
    },
    {
        testimonial:
            "What sets Saurabh apart is not just his technical prowess, but his unwavering commitment to helping others succeed. His mentorship has been instrumental in guiding fellow students through complex subjects, demonstrating both patience and a genuine passion for knowledge sharing.",
        name: "Akash Deshpande",
        designation: "Project Engineer",
        company: "CDAC ACTS",
        image: akash,
    },
    {
        testimonial:
            "Saurabh's support went beyond just coding. He took the time to understand each team member's learning style.  His collaborative spirit and encouragement created a space where everyone felt comfortable expressing ideas.",
        name: "Sujit Kadam",
        designation: "Software Engineer",
        company: "Bajaj Finserv",
        image: sujit,
    },
    {
        testimonial:
            "I highly recommend Saurabh for his outstanding contributions as the sponsorship coordinator for our college tech fest. His meticulous research and strategic approach led to successful negotiations, ensuring optimal visibility for sponsors.",
        name: "Manasi Kulkarni",
        designation: "Student",
        company: "UCD Smurfit School",
        image: manasi,
    },
];