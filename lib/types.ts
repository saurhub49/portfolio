import { IconType } from "react-icons";
import { links } from "./data";

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
}