import { useContext, useEffect, useState } from "react";
import { Context } from "../Context/ProjectsApi";

export const useObserver = (ref: any, options: any, projectIndex: number) => {

    const { rootMargin } = options;
    const [observerEntry, setObserverEntry] = useState<any>(null);
    const { setProjectIndex, setIsPageActive, IsPageActive, ProjectIndex } = useContext(Context)

    useEffect(() => {
        if (!ref?.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setObserverEntry(entry);
                if (entry.isIntersecting) {
                    setProjectIndex(projectIndex)
                    setIsPageActive(entry.isIntersecting)
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