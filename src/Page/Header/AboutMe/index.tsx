import { useEffect, useRef, useState } from "react"
import { Description } from "../../../components/common/Description"
import { useScrollValueWithLimit } from "../../../services/useScrollValueWithLimit"
import { AnimationLabel } from "./AnimationLabel"
import { Wrapper } from "./Wrapper"


export const AboutMe = () => {

    const scrollCounter = useScrollValueWithLimit(-1, 800)

    return (
        <Wrapper>
            <AnimationLabel transform={(scrollCounter * 3).toString()}>ABOUT ME</AnimationLabel>
            <Description>Serious passion for A Front-End and new technologies. </Description>
        </Wrapper>
    )
}
