import { useEffect, useRef } from 'react'
import { AnimationLabel } from '../../components/common/AnimationLabel'
import { useObserverForSlides } from '../../services/useObserverForSlides'
import inst from "../../assets/Icons/instagram.png"
import lin from "../../assets/Icons/linkedin.png"
import git from "../../assets/Icons/github.png"
import { IMG } from './IMG.styled'
import { Wrapper } from './Wrapper'
import { useScrollValue } from '../../services/useScrollValue'

export const ContactMe = () => {

    const ref = useRef<any>()
    const observe = useObserverForSlides(ref, { rootMargin: "0px" });
    const { scrollCounter } = useScrollValue(observe, true)

    return (
        <Wrapper key={"Contact"} ref={ref} >
            <AnimationLabel style={{ transform: `translate(${(scrollCounter * 3).toString()}px,0px)` }}>CONTACT</AnimationLabel>

            <a href='https://github.com/Sajjad-iq' target={"_blank"}><IMG src={git} alt="git" /></a>
            <a href='https://www.instagram.com/sajja3kademm/' target={"_blank"}><IMG src={inst} alt="inst" /></a>
            <a href='https://www.linkedin.com/in/sajjad-kademm-a68294209/' target={"_blank"}><IMG src={lin} alt="link" /></a>
        </Wrapper >
    )
}
