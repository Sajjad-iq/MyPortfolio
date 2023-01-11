import { useEffect, useRef } from 'react'
import { useObserver } from '../../../../../services/useObserver'
import MockUpPhone from '../../../../../assets/ProjectsMockUps/rockPaperGame/P1.png'
import MockUpPhone2 from '../../../../../assets/ProjectsMockUps/rockPaperGame/P2.png'
import MockUpPage from '../../../../../assets/ProjectsMockUps/rockPaperGame/Pad.png'
import { useScrollValue } from '../../../../../services/useScrollValue'
import { TransformIMG } from '../../../../../components/common/IMG.styled'
import { ProjectWrapper } from '../../../../../components/shared/ProjectWrapper'
import { Row } from '../../../../../components/shared/Row.styled'
import { stockData } from '../../../stockData'

export const PaperRockGame = () => {

    const index = 3
    const Ref = useRef<any>()
    const observe = useObserver(Ref, { rootMargin: "0px" }, index);
    let { scrollCounter, setScrollCounter } = useScrollValue(index)

    useEffect(() => {
        if (Ref?.current && observe !== null) {
            if (observe.isIntersecting === false) setScrollCounter(0)
        }
    }, [observe])
    return (
        <ProjectWrapper ref={Ref}>
            <Row>
                <a href={stockData[index].url} target={"_blank"}><TransformIMG src={MockUpPhone} transform={(scrollCounter * -13).toString()} width='170px' loading='lazy' alt='mockUb' /></a>
                <a href={stockData[index].url} target={"_blank"}><TransformIMG src={MockUpPhone2} transform={(scrollCounter * -7).toString()} width='150px' loading='lazy' alt='mockUb' /></a>
            </Row>
            <a href={stockData[index].url} target={"_blank"}><TransformIMG src={MockUpPage} transform={(scrollCounter * -3).toString()} width='340px' loading='lazy' alt='mockUb' /></a>
        </ProjectWrapper>
    )
}


