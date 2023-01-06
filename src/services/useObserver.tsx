import { useContext, useEffect, useState } from "react";
import { Context } from "../Context/ProjectsApi";

export const useObserver = (ref: any, options: any, ProjectIndex: number) => {

    const { rootMargin } = options;
    const [observerEntry, setObserverEntry] = useState<any>(null);
    const { setProjectIndex, setIsPageActive } = useContext(Context)

    useEffect(() => {
        if (!ref?.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setObserverEntry(entry);
                if (entry.isIntersecting) {
                    setProjectIndex(ProjectIndex)
                    setIsPageActive(true)
                } if (!entry.isIntersecting) {
                    setIsPageActive(false)
                }

            },
            { rootMargin }
        );

        observer.observe(ref.current);
    }, [ref, rootMargin]);

    return observerEntry;
};