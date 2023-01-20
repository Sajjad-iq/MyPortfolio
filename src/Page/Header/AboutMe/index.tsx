import { Description } from "../../../components/common/Description"
import { AnimationLabel } from "../../../components/common/AnimationLabel"
import { Wrapper } from "./Wrapper"
import { useRef } from "react"
import { useObserverForSlides } from "../../../services/useObserverForSlides"
import { useScrollValue } from "../../../services/useScrollValue"


export const AboutMe = () => {
    const ref = useRef<any>()
    const observe = useObserverForSlides(ref, { rootMargin: "0px" });
    const { scrollCounter } = useScrollValue(observe, true)

    return (
        <Wrapper key={"About Me"} ref={ref}>
            <AnimationLabel style={{ transform: `translate(${(scrollCounter * 3).toString()}px,0px)` }}>ABOUT ME</AnimationLabel>
            <Description>Serious passion for A Front-End and new technologies. </Description>
        </Wrapper>
    )
}
