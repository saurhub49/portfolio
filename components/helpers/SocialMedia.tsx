import { useTheme } from '@/context/useTheme';
import { socials } from '@/lib/data';
import React from 'react';

const SocialMedia = () => {
    const { theme } = useTheme();
    return (
        <div className='flex flex-row gap-2 pt-2 sm:pt-0'>
            {
                socials.map((social) => (
                    <a key={social.name} href={social.link} target='_blank' className='bg-white p-3 text-gray-700 flex items-center gap-2 rounded-full shadow-md focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 dark:bg-gray-600 active:scale-105 transition cursor-pointer'>
                        {React.createElement(social.icon, {
                            style: { width: '24px', height: '24px', color: theme == 'light' ? social.iconColor : 'rgb(255 255 255 / 0.6)' }
                        })}
                    </a>
                ))
            }
        </div>
    )
}

export default SocialMedia;