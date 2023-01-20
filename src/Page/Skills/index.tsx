import { useRef } from 'react'
import { AnimationLabel } from '../../components/common/AnimationLabel'
import { useObserverForSlides } from '../../services/useObserverForSlides'
import { useScrollValue } from '../../services/useScrollValue'
import { Column } from './Column'
import { P } from './P.styled'
import { Wrapper } from './Wrapper'

export const Skills = () => {

    const ref = useRef<any>()
    const observe = useObserverForSlides(ref, { rootMargin: "0px" });
    const { scrollCounter } = useScrollValue(observe, true)

    return (
        <Wrapper key={"Skills"} ref={ref}>
            <AnimationLabel style={{ transform: `translate(${(scrollCounter * 3).toString()}px,0px)` }}>Skills</AnimationLabel>
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
