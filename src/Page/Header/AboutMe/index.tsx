import { Description } from "../../../components/common/Description"
import { AnimationLabel } from "../../../components/common/AnimationLabel"
import { Wrapper } from "./Wrapper"
import { useScrollValueForSlides } from "../../../services/useScrollValueForSlides"
import { useEffect, useRef } from "react"
import { useObserverForSlides } from "../../../services/useObserverForSlides"


export const AboutMe = () => {
    const ref = useRef<any>()
    const { scrollCounter, setScrollCounter } = useScrollValueForSlides(0, 500)
    const observe = useObserverForSlides(ref, { rootMargin: "0px" });

    useEffect(() => {
        if (ref?.current && observe !== null) {
            if (observe.isIntersecting === false) setScrollCounter(0)
        }
    }, [observe])

    return (
        <Wrapper ref={ref}>
            <AnimationLabel transform={(scrollCounter * 3).toString()}>ABOUT ME</AnimationLabel>
            <Description>Serious passion for A Front-End and new technologies. </Description>
        </Wrapper>
    )
}
