import { useEffect, useRef } from 'react'
import { useObserver } from '../../../../../services/useObserver'
import MockUpPhone from '../../../../../assets/ProjectsMockUps/Space/P1.png'
import MockUpPhone2 from '../../../../../assets/ProjectsMockUps/Space/P2.png'
import MockUpPage from '../../../../../assets/ProjectsMockUps/Space/pad.png'
import { useScrollValue } from '../../../../../services/useScrollValue'
import { TransformIMG } from '../../../../../components/common/IMG.styled'
import { ProjectWrapper } from '../../../../../components/shared/ProjectWrapper'
import { Row } from '../../../../../components/shared/Row.styled'
import { stockData } from '../../../stockData'
import { Section } from '../../../../../components/common/Section'

export const Space = () => {

    const index = 0
    const Ref = useRef<any>()
    const observe = useObserver(Ref, { rootMargin: "0px" }, index, true);
    let { scrollCounter, setScrollCounter } = useScrollValue(index)

    useEffect(() => {
        if (Ref?.current && observe !== null) {
            if (observe.isIntersecting === false) setScrollCounter(0)
        }
    }, [observe])

    return (
        <ProjectWrapper ref={Ref}>
            <Section >
                <Row>
                    <a href={stockData[index].url} target={"_blank"}><TransformIMG src={MockUpPhone} transform={(scrollCounter * -7).toString()} width='185px' loading='lazy' alt='mockUb' /></a>
                    <a href={stockData[index].url} target={"_blank"}><TransformIMG src={MockUpPhone2} transform={(scrollCounter * -13).toString()} width='160px' loading='lazy' alt='mockUb' /></a>
                </Row>
                <a href={stockData[index].url} target={"_blank"}><TransformIMG src={MockUpPage} transform={(scrollCounter * -3).toString()} width='340px' loading='lazy' alt='mockUb' /></a>
            </Section>
        </ProjectWrapper>
    )
}
