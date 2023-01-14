import { useContext, useEffect, useState } from "react";
import { Context } from "../Context/ProjectsApi";

export const useObserverForSlides = (ref: any, options: any, OnBottom: boolean) => {

    const { rootMargin } = options;
    const [observerEntry, setObserverEntry] = useState<any>(null);
    const { setIsPageActive } = useContext(Context)

    useEffect(() => {
        if (!ref?.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setObserverEntry(entry);
                if (OnBottom) if (entry.isIntersecting) setIsPageActive(false)
                if (!OnBottom) {
                    if (entry.isIntersecting) setIsPageActive(false)
                    if (!entry.isIntersecting) setIsPageActive(true)
                }
            },
            { rootMargin }
        );

        observer.observe(ref.current);
        return () => {
            if (ref?.current) observer.unobserve(ref.current)
        }
    }, [ref, rootMargin]);

    return observerEntry;
};