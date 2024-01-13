import { IconType } from "react-icons";

export interface LinkType {
    name: string;
    href: string;
}

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