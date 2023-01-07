import { useEffect, useState } from 'react'

export const useScrollValueWithLimit = (start: number, limit: number) => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollCounter, setScrollCounter] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        if ((position < limit && position >= start)) {
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
    }, [scrollPosition]);
    return scrollCounter
}
