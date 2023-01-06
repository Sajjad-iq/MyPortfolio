import { useEffect, useRef, useState } from "react"
import { Description } from "../../../components/common/Description"
import { useScrollValue } from "../../../services/useScrollValue"
import { AnimationLabel } from "./AnimationLabel"
import { Wrapper } from "./Wrapper"


export const AboutMe = () => {

    const scrollCounter = useScrollValue(800)

    return (
        <Wrapper>
            <AnimationLabel transform={(scrollCounter * 3).toString()}>ABOUT ME</AnimationLabel>
            <Description>Serious passion for A Front-End and new technologies. </Description>
        </Wrapper>
    )
}
