import { useEffect, useRef } from 'react'
import { AnimationLabel } from '../../components/common/AnimationLabel'
import { useObserverForSlides } from '../../services/useObserverForSlides'
import { useScrollValueForSlides } from '../../services/useScrollValueForSlides'
import inst from "../../assets/Icons/instagram.png"
import lin from "../../assets/Icons/linkedin.png"
import git from "../../assets/Icons/github.png"
import { IMG } from './IMG.styled'
import { Wrapper } from './Wrapper'

export const ContactMe = () => {

    const ref = useRef<any>()
    const { scrollCounter, setScrollCounter } = useScrollValueForSlides(7000, 8000)
    const observe = useObserverForSlides(ref, { rootMargin: "0px" }, true);

    useEffect(() => {
        if (ref?.current && observe !== null) {
            if (observe.isIntersecting === false) setScrollCounter(0)
        }
    }, [observe])


    return (
        <Wrapper ref={ref} >
            <AnimationLabel transform={(scrollCounter * 3).toString()}>CONTACT</AnimationLabel>
            <a href='https://github.com/Sajjad-iq' target={"_blank"}><IMG src={git} alt="git" /></a>
            <a href='https://www.instagram.com/sajja3kademm/' target={"_blank"}><IMG src={inst} alt="inst" /></a>
            <a href='https://www.linkedin.com/in/sajjad-kademm-a68294209/' target={"_blank"}><IMG src={lin} alt="link" /></a>
        </Wrapper >
    )
}
