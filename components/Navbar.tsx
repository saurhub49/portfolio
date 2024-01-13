"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import { BsMoon, BsSun } from 'react-icons/bs';
import { name } from '@/lib/assets';
import Image from 'next/image';
import { styles } from '@/lib/styles';
import { BiMenu, BiX } from 'react-icons/bi';

const Navbar = () => {
    const [theme, setTheme] = React.useState("light");
    const [toggle, setToggle] = React.useState<boolean>(false);
    const menuRef = React.useRef<HTMLDivElement>(null);

    const toggleTheme = React.useCallback(() => {
        if (theme == "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, [theme]);

    const onClickToggleHandler = React.useCallback(() => {
        setToggle(!toggle)
    }, [toggle]);

    const handleLinkClickHandler = React.useCallback(() => {
        setToggle(false);
    }, []);

    const handleClickOutsideHandler = React.useCallback(
        (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setToggle(false);
            }
        },
        [menuRef]
    );

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutsideHandler);
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideHandler);
        };
    }, [handleClickOutsideHandler]);

    return (
        <nav className='z-[999] relative flex items-center justify-center'>
            <div className={`fixed flex top-6 lg:top-10 gap-3 w-full justify-between items-center bg-opacity-80 backdrop-blur-[0.5rem] ${styles.paddingX}`}>
                <motion.div
                    ref={menuRef}
                    className={`${toggle ? 'block z-50' : 'hidden'} lg:hidden fixed top-12 ml-2 py-4 rounded-2xl  max-h-[32rem] w-60 bg-white`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: toggle ? 1 : 0, scale: toggle ? 1 : 0.9 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <ul className='flex flex-col items-center justify-center h-full gap-y-4 text-[1rem] font-medium text-gray-500'>
                        {links.map((link) => (
                            <motion.li key={link.href} className='flex items-center justify-center w-full'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.2, delay: 0.1 }}
                            >
                                <Link onClick={handleLinkClickHandler} href={link.href} className='px-3 py-2 hover:text-gray-950 transition'>
                                    {link.name}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div className='lg:flex items-center gap-2'
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                >
                    {toggle
                        ? <BiX onClick={onClickToggleHandler} className='w-10 h-10 cursor-pointer bg-opacity-80 backdrop-blur-[0.5rem] active:scale-105 transition-all lg:hidden' />
                        : <BiMenu onClick={onClickToggleHandler} className='w-10 h-10 cursor-pointer bg-opacity-80 backdrop-blur-[0.5rem] active:scale-105 transition-all lg:hidden' />}
                    <Image src={name} alt={'Saurabh Mahajan'} className="lg:block w-[18rem] object-contain hidden" />
                </motion.div>

                <motion.div className='flex gap-3 h-[3.25rem]'
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <div className='lg:flex hidden top-[1.7rem h-[initial] rounded-full border border-white border-opacity-40 bg-white shadow-lg shadow-black/[0.05] px-3'>
                        <ul className='flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500'>
                            {
                                links.map((link) => (
                                    <motion.li key={link.href} className='h-3/4 flex items-center justify-center'
                                        initial={{ y: -100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                    >
                                        <Link href={link.href} className='flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition'>
                                            {
                                                link.name
                                            }
                                        </Link>
                                    </motion.li>
                                ))
                            }
                        </ul>
                    </div>
                    <button
                        className={`bg-white hover:bg-[#8266ff] w-[3.25rem] h-[3.25rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center justify-self-end hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950`}
                        onClick={toggleTheme}
                    >
                        {theme === "light" ? <BsSun /> : <BsMoon />}
                    </button>
                </motion.div>
            </div>
        </nav>
    );
};

export default Navbar;