import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';

interface TimelineIconProps {
    alt: string;
    src: StaticImport;
}

const TimelineIcon: React.FC<TimelineIconProps> = (props) => {
    const { alt, src } = props;
    return (
        <Image alt={alt} src={src} />
    )
}

export default TimelineIcon;