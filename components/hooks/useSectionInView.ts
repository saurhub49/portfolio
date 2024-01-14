import React from "react";
import useActiveSectionContext from "@/context/useActiveSectionContext";
import { useInView } from "react-intersection-observer";
import { LinkName } from "@/lib/types";

export function useSectionInView(linkName: LinkName, threshold = 0.75) {
    const { ref, inView } = useInView({
        threshold,
    });
    const { setActiveSection, lastClick } = useActiveSectionContext();

    React.useEffect(() => {
        if (inView && Date.now() - lastClick > 1000) {
            setActiveSection(linkName);
        }
    }, [inView, setActiveSection, lastClick, linkName]);

    return {
        ref,
    };
}