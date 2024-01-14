"use client";

import React from 'react'
import SectionHeader from './helpers/SectionHeader';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { educations } from '@/lib/data';
import { useSectionInView } from './hooks/useSectionInView';
import TimelineIcon from './helpers/TimelineIcon';

const Education = () => {
    const { ref } = useSectionInView('Education', 0.3);
    return (
        <section ref={ref}>
            <SectionHeader urlId='education' title='Education' description='Exploring My Educational Background' />
            <VerticalTimeline lineColor=''>
                {
                    educations.map((education) => (
                        <React.Fragment key={education.id}>
                            <VerticalTimelineElement
                                visible={true}
                                contentStyle={{
                                    backgroundColor: '#f3f4f6',
                                    border: '1px solid rgba(0, 0, 0, 0.05)',
                                    textAlign: 'left',
                                    padding: '1.3 rem 2rem'
                                }}
                                contentArrowStyle={{
                                    borderRight: '0.4rem solid #93ca3af'
                                }}
                                date={education.date}
                                icon={<TimelineIcon src={education.icon} alt={education.university} />}
                                iconStyle={{
                                    background: education.iconBg,
                                    fontSize: '1.5rem',
                                    padding: '12px'
                                }}
                            >
                                <h3 className='font-bold capitalize'>{education.degree}</h3>
                                <p className='pb-3 text-gray-500 !mt-0'>{education.university}</p>
                                <p className='pb-3 text-gray-500 !mt-0'>{education.grade}</p>
                                <ul className='list-disc list-inside'>
                                    {
                                        education.points.map((point, index) => (
                                            <li key={index} className='mt-2'>
                                                {point}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </VerticalTimelineElement>
                        </React.Fragment>
                    ))
                }
            </VerticalTimeline>
        </section>
    )
}

export default Education;