"use client";

import { LinkName } from '@/lib/types';
import React from 'react';

interface ActiveSectionContextProviderProps {
    children: React.ReactNode;
}

interface ActiveSectionContextType {
    activeSection: LinkName;
    setActiveSection: React.Dispatch<React.SetStateAction<LinkName>>;
    lastClick: number;
    setLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext = React.createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider: React.FC<ActiveSectionContextProviderProps> = (props) => {
    const { children } = props;
    const [activeSection, setActiveSection] = React.useState<LinkName>('Home');
    // we need to keep track of this to disable the observer temporarily when user clicks on a link which is not an immediate sibling of the current active link
    const [lastClick, setLastClick] = React.useState(0);
    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
                lastClick,
                setLastClick
            }}>
            {children}
        </ActiveSectionContext.Provider>
    );
};

export default ActiveSectionContextProvider;