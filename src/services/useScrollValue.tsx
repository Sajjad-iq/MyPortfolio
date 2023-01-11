import { useContext, useEffect, useState } from 'react'
import { Context } from '../Context/ProjectsApi';

export const useScrollValue = (Index: number) => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollCounter, setScrollCounter] = useState(0);
    const { ProjectIndex, IsPageActive } = useContext(Context)


    const handleScroll = () => {
        const position = window.scrollY;
        if ((IsPageActive && ProjectIndex == Index)) {
            setScrollPosition(position);
            if (position > scrollPosition) setScrollCounter(scrollCounter + 1)
            if (position < scrollPosition) setScrollCounter(scrollCounter - 1)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition, IsPageActive]);
    return { scrollCounter, setScrollCounter }
}
