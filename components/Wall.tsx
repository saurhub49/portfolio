"use client";

import React, { useCallback, useEffect, useState } from 'react';
import { useSectionInView } from './hooks/useSectionInView';
import { Post } from '@/lib/types';
import SectionHeader from './helpers/SectionHeader';
import { HiMiniArrowTopRightOnSquare } from 'react-icons/hi2';
import Image from 'next/image';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '@/components/css/wall.css';
import { blogLink } from '@/lib/data';

const Wall = () => {
    const { ref } = useSectionInView('Wall');
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    const query = `
    query Publication {
        user(username: "saurabhthedev") {
          id
          username
          posts(page: 1, pageSize: 2) {
            nodes {
              id
              url
              title
              coverImage {
                url
              }
              brief
              publishedAt
              readTimeInMinutes
            }
          }
        }
      }
    `;

    const fetchPosts = useCallback(async () => {
        setLoading(true);
        const response = await fetch("https://gql.hashnode.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
        });
        const result = await response.json();
        const nodes = result.data.user.posts.nodes;
        setPosts(nodes);
        setLoading(false);
    }, [query])

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);
    return (
        <section ref={ref} className='mt-32'>
            <SectionHeader urlId='wall' title='Wall' description="My Literary Haven, Tales & Chronicles" />
            <motion.div
                className='flex flex-col justify-center items-center gap-5 py-5 xl:px-48'
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: 'tween',
                    duration: 0.2
                }}
            >
                {!!posts.length && !loading &&
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
                        {posts.slice(0, 2).map((post) => (
                            <div key={post.id} className="flex flex-col basis-1/2 items-center justify-between min-w-80 2xl:min-w-[450px] max-w-max h-[500px] 2xl:h-[600px] bg-[#e2e8f0] border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 p-5">
                                <a href="#">
                                    <Image
                                        className="rounded-lg items-center justify-center"
                                        src={post.coverImage.url}
                                        alt=""
                                        width={0}
                                        height={0}
                                        style={{ width: '700px', height: 'auto' }}
                                    />
                                </a>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 hidden 2xl:block">{post.brief}</p>
                                <a href={post.url} target="_blank" className="inline-flex w-fit self-end gap-1 items-center px-3 py-2 bg-white sm:hover:bg-[#8266ff] bg-opacity-80 backdrop-blur-[0.5rem] border border-black/10 border-opacity-40 shadow-2xl rounded-full justify-center hover:scale-[1.10] active:scale-105 transition-all dark:bg-gray-950">
                                    Read more
                                    <HiMiniArrowTopRightOnSquare />
                                </a>
                            </div>
                        ))}
                    </div>}
                <a href={blogLink} target="_blank" className="inline-flex w-fit gap-1 items-center px-3 py-2 text-lg font-medium text-center rounded-lg hover:underline">
                    See more blogs
                    <HiMiniArrowTopRightOnSquare />
                </a>
            </motion.div>

            {/* <motion.div
                className='whoami py-8 xl:px-48 max-w-full'
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: 'tween',
                    duration: 0.2
                }}
            >
                <div className='gallery'>
                    {
                        wallPictures.map((wallPicture) => (
                            <div key={wallPicture.name} className='pics-container'>
                                <div className='pics'>
                                    <Image
                                        src={wallPicture.image}
                                        alt={wallPicture.name}
                                        width={0}
                                        height={0}
                                        style={{ height: 'auto', width: '100%' }}
                                    />
                                    <div className='overlay text-gray-950 dark:text-white'>
                                        <p className='px-5'>
                                            {wallPicture.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </motion.div> */}
        </section>

    )
}

export default Wall;