"use client";

import React from 'react';
import useActiveSectionContext from '@/context/useActiveSectionContext';
import { IoIosArrowDropup } from 'react-icons/io';
import Link from 'next/link';

const ScrollToTop = () => {
    const { setActiveSection, setLastClick } = useActiveSectionContext();

    const onClickButtonHandler = React.useCallback(() => {
        setActiveSection("Home");
        setLastClick(Date.now());
    }, [setActiveSection, setLastClick]);

    return (
        <Link
            href='#home'
            className="fixed bottom-5 right-5 bg-white sm:hover:bg-[#8266ff] w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-black/10 border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
            onClick={onClickButtonHandler}
            title='Scroll To Top'
        >
            <IoIosArrowDropup style={{ width: '28px', height: '28px' }} />
        </Link>
    )
}

export default ScrollToTop;