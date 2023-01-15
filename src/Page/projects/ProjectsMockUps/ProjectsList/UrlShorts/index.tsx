import { useEffect, useRef } from 'react'
import { useObserver } from '../../../../../services/useObserver'
import { TransformIMG } from '../../../../../components/common/IMG.styled'
import { ProjectWrapper } from '../../../../../components/shared/ProjectWrapper'
import { Row } from '../../../../../components/shared/Row.styled'
import MockUpPhone from '../../../../../assets/ProjectsMockUps/urlShorts/p1.png'
import MockUpPhone2 from '../../../../../assets/ProjectsMockUps/urlShorts/p2.png'
import MockUpLab from '../../../../../assets/ProjectsMockUps/urlShorts/l1.png'
import { useScrollValue } from '../../../../../services/useScrollValue'
import { stockData } from '../../../stockData'
import { Section } from '../../../../../components/common/Section'

export const UrlShorts = () => {
    const index = 2
    const Ref = useRef<any>()
    const observe = useObserver(Ref, { rootMargin: "0px" }, index, false);
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
                    <a href={stockData[index].url} target={"_blank"}><TransformIMG src={MockUpPhone} transform={(scrollCounter * -13).toString()} width='165px' loading='lazy' alt='mockUb' /></a>
                    <a href={stockData[index].url} target={"_blank"}><TransformIMG src={MockUpPhone2} transform={(scrollCounter * -7).toString()} width='155px' loading='lazy' alt='mockUb' /></a>
                </Row>
                <a href={stockData[index].url} target={"_blank"}><TransformIMG src={MockUpLab} transform={(scrollCounter * -3).toString()} width='340px' loading='lazy' alt='mockUb' /></a>
            </Section>
        </ProjectWrapper>
    )
}