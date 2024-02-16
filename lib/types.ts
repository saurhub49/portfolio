import { IconType } from "react-icons";
import { links } from "./data";
import { StaticImageData } from "next/image";

export interface LinkType {
    name: string;
    href: string;
}

export type LinkName = typeof links[number]['name'];

export interface Hero {
    name: string;
    profession: string;
    tagLine: string;
}

export interface Social {
    name: string;
    link: string;
    icon: IconType;
    iconColor: string;
}

export interface Experience {
    id: number;
    title: string;
    companyName: string;
    date: string;
    icon: StaticImageData;
    iconBg: string;
    points: string[];
}

export interface Technology {
    name: string;
    icon: StaticImageData;
}

export interface SkillCategory {
    title: string;
    technologies: Technology[];
}

export interface ProjectTag {
    name: string;
    color: string;
}

export interface Project {
    name: string;
    description: string;
    tags: ProjectTag[];
    image: StaticImageData;
    link?: string;
    repository: string;
    extraRepository?: string;
}

export interface Education {
    id: number;
    degree: string;
    grade: string;
    university: string;
    date: string;
    icon: StaticImageData;
    iconBg: string;
    points: string[];
}

export interface WallPicture {
    name: string;
    description: string;
    image: StaticImageData;
}

export interface Testimonial {
    testimonial: string;
    name: string;
    designation: string;
    company: string;
    image: StaticImageData;
}

export interface Post {
    id: string;
    url: string;
    title: string;
    coverImage: {
        url: string
    }
    brief: string;
    publishedAt: string;
    readTimeInMinutes: number;
}