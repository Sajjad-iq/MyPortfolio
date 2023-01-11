import { useEffect, useState } from "react";

export const useObserverForSlides = (ref: any, options: any) => {

    const { rootMargin } = options;
    const [observerEntry, setObserverEntry] = useState<any>(null);

    useEffect(() => {
        if (!ref?.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setObserverEntry(entry);
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