import { useContext, useEffect, useState } from 'react'
import { Context } from '../Context/ProjectsApi';

export const useScrollValue = (entry: any, IsSlide: boolean) => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollCounter, setScrollCounter] = useState(0);
    const { IsPageActive, ProjectIndex } = useContext(Context)

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
        if (entry) {
            if (entry.isIntersecting && IsPageActive) {
                if (position > scrollPosition) setScrollCounter(scrollCounter + 1)
                if (position < scrollPosition) setScrollCounter(scrollCounter - 1)
            }
            else if (entry.isIntersecting && IsSlide) {
                if (position > scrollPosition) setScrollCounter(scrollCounter + 1)
                if (position < scrollPosition) setScrollCounter(scrollCounter - 1)
            }
            else if (!entry.isIntersecting) setScrollCounter(0)
        }

    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);
    return { scrollCounter, setScrollCounter, IsPageActive, ProjectIndex }
}
