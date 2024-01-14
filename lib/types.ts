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

export interface ProjectTag {
    name: string;
    color: string;
}

export interface Project {
    name: string;
    description: string;
    tags: ProjectTag[];
    image: StaticImageData;
    link: string;
    extraLink?: string;
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