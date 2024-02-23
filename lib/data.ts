import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Education, Experience, Hero, LinkType, Post, Project, ProjectTag, SkillCategory, Social, Technology, Testimonial, WallPicture } from "./types";
import { akash, aws, bharati, bootstrap, chief, company, csharp, css, docker, dockercompose, dotnet, emeraldoasis, git, github, githubactions, html, java, javascript, jira, manasi, mui, mysql, nextjs, office, opus, portfolio, portfolio3d, postgresql, prafull, python, rank, reactjs, redux, sponsorship, sppu, springboot, springframework, sujit, sunbeam, tailwind, team, techtonic, typescript } from "./assets";
import { FaHashnode, FaXTwitter } from "react-icons/fa6";

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
        name: "Wall",
        href: "#wall",
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
    profession: 'Full Stack Software Engineer',
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
        name: 'Hashnode',
        link: 'https://blog.saurabhmahajan.com/',
        icon: FaHashnode,
        iconColor: '#007AFF'
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
            "Pioneering the integration of Multi-Factor Authentication (MFA) using the Spring Framework with Java, boosting security measures through phone verification and Microsoft Authenticator, and decreasing unauthorized access by 30%.",
            "Facilitating seamless data management and storage solutions by integrating AWS S3 and an AWS Lambda-based data importer into a Spring application for MITRE, enhancing operational efficiency by 15%.",
            "Revolutionizing a new login flow using React and TypeScript, incorporating MFA, password expiry, and reuse prevention features to elevate security and user experience.",
            "Developing client admin functionality with controlled admin privileges to client users using PostgreSQL joins, views, and complex authorization scope handling in Java with Spring, complemented by its user management UI in React.",
            "Played a key role in developing a microservices-based architecture utilizing Docker containers, resulting in a 30% improvement in deployment efficiency and a significant increase in overall system scalability.",
            "Providing mentorship to newly joined team members, empowering, and helping them through comprehensive training in product, code, and tech practices and ensuring their effective contribution to the project's advancement.",
        ],
    },
    {
        id: 2,
        title: "Associate Full Stack Engineer",
        companyName: "NetSPI",
        icon: company,
        iconBg: "#e9edf6",
        date: "May 2022 - June 2023",
        points: [
            "Led the transformation of the Breach and Attack Simulation (BAS) application from a company-centric to a more operation-centric approach, and improved security threat detection and mitigation by 25% through enhanced dashboard and API optimization.",
            "Fostered a collaborative team environment, and significantly improved problem-solving efficiency and team productivity by 15% through innovative feature development and efficient code practices while working on features like MITRE Software and Group import with the STIX model in C# as well as JAVA.",
            "Engineered a novel product reporting feature utilising a PDF generation library in React and achieved a 60% reduction in report generation time with a unique JavaScript and Web workers solution.",
            "Enhanced data filtering and analysis capabilities for TTP Coverages using .NET Core with a 40% increase in speed and accuracy for large-scale data processing.",
            "Demonstrating exceptional adaptability with cross-functional and globally dispersed teams by swiftly transitioning and excelling in a new project, contributing to a 15% faster project advancement."
        ],
    },
];

export const skillCategories: SkillCategory[] = [
    {
        title: 'Languages',
        technologies: [
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
                name: "MySQL",
                icon: mysql,
            },
            {
                name: "PostgreSQL",
                icon: postgresql,
            }
        ]
    },
    {
        title: 'Frameworks & Libraries',
        technologies: [
            {
                name: "CSS 3",
                icon: css,
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
            }
        ]
    },
    {
        title: 'Tools & Products',
        technologies: [
            {
                name: "Git",
                icon: git,
            },
            {
                name: "GitHub",
                icon: github,
            },
            {
                name: "GitHub Actions",
                icon: githubactions,
            },
            {
                name: "Docker",
                icon: docker,
            },
            {
                name: "Docker Compose",
                icon: dockercompose,
            },
            {
                name: "AWS",
                icon: aws,
            },
            {
                name: "Jira",
                icon: jira,
            }
        ]
    }
]

export const projects: Project[] = [
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
            {
                name: "SMTP",
                color: "#00ADD8 ",
            },
            {
                name: "AWS",
                color: "#68A063    ",
            },
            {
                name: "CI/CD",
                color: "#FF6F61   ",
            },
        ] as ProjectTag[],
        image: opus,
        link: 'https://opus-verse.vercel.app/',
        repository: "https://github.com/saurabhthecodewizard/opus"
    },
    {
        name: "Portfolio",
        description:
            "The Portfolio Project serves as an extensive online platform crafted for personal branding and to highlight the expertise, projects, professional journey, and accomplishments of a user. This web application is meticulously designed to present a captivating and interactive display of the user's skills and experiences. Functioning as a dynamic digital resume, the portfolio offers a unique space for the user to showcase their career path, skills, and noteworthy achievements in a visually appealing manner.",
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
                color: "#FB923C",
            },
            {
                name: "Vercel",
                color: "#A5F3EB",
            },
            {
                name: "CI/CD",
                color: "#D4A5A5",
            },
        ] as ProjectTag[],
        image: portfolio,
        link: 'https://portfolio.saurabhmahajan.com/',
        repository: "https://github.com/saurabhthecodewizard/portfolio",
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
                color: "#FB923C",
            },
            {
                name: "Netlify",
                color: "#A5F3EB",
            },
            {
                name: "CI/CD",
                color: "#D4A5A5",
            },
        ] as ProjectTag[],
        image: portfolio3d,
        link: 'https://saurabh-the-dev.netlify.app/',
        repository: "https://github.com/saurabhthecodewizard/3d-portfolio-for-dev",
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
                color: "#FB923C",
            },
        ] as ProjectTag[],
        image: emeraldoasis,
        repository: "https://github.com/saurabhthecodewizard/Emerald-Oasis",
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
            'Honored to secure All India Rank 1 in the CCAT entrance exam and possess a PG Diploma in Advanced Computing with Grade A.',
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

export const blogs: Post[] = [
    {
        "id": "65cd1e2229935acc57e4e4b6",
        "url": "https://blog.saurabhmahajan.com/dockerizing-a-fullstack-application-crafted-in-mysql-spring-boot-react-with-docker-compose",
        "title": "Dockerizing a Fullstack Application crafted in MySQL, Spring Boot & React with Docker Compose",
        "coverImage": {
            "url": "https://cdn.hashnode.com/res/hashnode/image/upload/v1706115113114/727a9d78-9507-4b47-8c1d-8a260ea96abb.png"
        },
        "brief": "Welcome to the core of modern development practices, where Docker Compose orchestrates a symphony for your fullstack app. As a dynamic Fullstack Software Engineer, you grasp the pivotal role containerization plays in shaping software development.\nThi...",
        "publishedAt": "2024-02-14T20:10:10.459Z",
        "readTimeInMinutes": 12
    },
    {
        "id": "65be4868e2445c08eb35dde4",
        "url": "https://blog.saurabhmahajan.com/navigating-the-coding-odyssey-my-100daysofcode-challenge-journey",
        "title": "Navigating the Coding Odyssey: My 100DaysOfCode Challenge Journey",
        "coverImage": {
            "url": "https://cdn.hashnode.com/res/hashnode/image/upload/v1706466884968/d7d80bc0-0384-4618-9d07-d906e3ed701c.png"
        },
        "brief": "Embarking on a journey of self-improvement was a path often paved with challenges, victories, and the relentless pursuit of growth. In the realm of coding, this journey took the form of the 100DaysOfCode challenge - a commitment to spend a dedicated ...",
        "publishedAt": "2024-02-03T14:06:32.546Z",
        "readTimeInMinutes": 14
    }
]

export const wallPictures: WallPicture[] = [
    {
        name: 'Rank',
        description: "Felicitated by a goverment official for acquiring All India Rank 1 in the CDAC'S C-CAT 2021 section A+B and completed the PG-DAC course in April 2022 with A Grade. After the results, I was interviewed by a local news channel in the native language so as to motivate the local youth towards education and technology",
        image: rank
    },
    {
        name: 'Techtonic',
        description: 'In my bachelor third year, assuming the role of Department Head honed my project management and organizational abilities, placing a strong emphasis on precision and attention to detail—qualities that seamlessly transitioned into my current role in software engineering. Leveraging this diverse skill set, I thrive in creating and managing impactful software solutions.',
        image: techtonic
    },
    {
        name: 'Office',
        description: 'Fast faced Full-stack Software Engineer leading transformative tech initiatives and pushing the boundaries of digital innovation. Adept at bridging complex problems with solutions, I thrive on continuous learning, innovation, mentoring talents, and collaboration in the tech community.',
        image: office
    },
    {
        name: 'Chief Guest',
        description: ' Grateful for the opportunity to serve as the Chief Guest at Shree Swaminarayan English Medium School, Faizpur, where I had the privilege of engaging with bright minds from grades 6 to 12. It was inspiring to witness their curiosity and enthusiasm for technology.',
        image: chief
    },
    {
        name: 'Sponsorship',
        description: 'In my bachelor final year, excelling as a Sponsorship Coordinator honed strategic thinking and coordination which is seamlessly applied in software development. Thriving on diverse experiences, I contribute to cutting-edge projects with unwavering commitment.',
        image: sponsorship
    },
    {
        name: 'Team',
        description: 'Versatile team player excelling in seamless collaboration both in-office and across geographically dispersed teams worldwide. Proficient in fostering open communication, bridging cultural gaps, and aligning efforts for coordinated success in our endeavors.',
        image: team
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

export const blogLink = 'https://blog.saurabhmahajan.com/';