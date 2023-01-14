import { useContext, useEffect, useState } from "react";
import { Context } from "../Context/ProjectsApi";

export const useObserver = (ref: any, options: any, ProjectIndex: number, IsFirstOrLast: boolean) => {

    const { rootMargin } = options;
    const [observerEntry, setObserverEntry] = useState<any>(null);
    const { setProjectIndex, setIsPageActive } = useContext(Context)

    useEffect(() => {
        if (!ref?.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setObserverEntry(entry);
                if (IsFirstOrLast && entry.isIntersecting) setProjectIndex(ProjectIndex)
                else {
                    if (entry.isIntersecting) {
                        setProjectIndex(ProjectIndex)
                        setIsPageActive(true)
                    }
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