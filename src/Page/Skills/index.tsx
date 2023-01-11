import { useRef, useEffect } from 'react'
import { AnimationLabel } from '../../components/common/AnimationLabel'
import { Row } from '../../components/shared/Row.styled'
import { useObserverForSlides } from '../../services/useObserverForSlides'
import { useScrollValueForSlides } from '../../services/useScrollValueForSlides'
import { Column } from './Column'
import { P } from './P.styled'
import { Wrapper } from './Wrapper'

export const Skills = () => {

    const ref = useRef<any>()
    const { scrollCounter, setScrollCounter } = useScrollValueForSlides(6000, 7000)
    const observe = useObserverForSlides(ref, { rootMargin: "0px" });

    useEffect(() => {
        if (ref?.current && observe !== null) {
            if (observe.isIntersecting === false) setScrollCounter(0)
        }
    }, [observe])

    return (
        <Wrapper ref={ref}>
            <AnimationLabel transform={(scrollCounter * 3).toString()}>Skills</AnimationLabel>
            <Column>
                <P>Html</P>
                <P>Css</P>
                <P>JavaScript</P>

            </Column>

            <Column>
                <P>TypeScript</P>
                <P>Sass</P>
                <P>React</P>
            </Column>

            <Column>
                <P>Redux</P>
                <P>Web Performance</P>
                <P>Web Security</P>
                <P>Responsive Web Design</P>
            </Column>

        </Wrapper>
    )
}
