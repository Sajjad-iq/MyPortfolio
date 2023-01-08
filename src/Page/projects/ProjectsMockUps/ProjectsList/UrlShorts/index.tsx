import { useRef } from 'react'
import { useObserver } from '../../../../../services/useObserver'
import { TransformIMG } from '../../../../../components/common/IMG.styled'
import { ProjectWrapper } from '../../../../../components/shared/ProjectWrapper'
import { Row } from '../../../../../components/shared/Row.styled'
import MockUpPhone from '../../../../../assets/ProjectsMockUps/urlShorts/p1.png'
import MockUpPhone2 from '../../../../../assets/ProjectsMockUps/urlShorts/p2.png'
import MockUpLab from '../../../../../assets/ProjectsMockUps/urlShorts/l1.png'
import { useScrollValue } from '../../../../../services/useScrollValue'
import { stockData } from '../../../stockData'

export const UrlShorts = () => {
    const index = 1
    const Ref = useRef<any>()
    useObserver(Ref, { rootMargin: "0px" }, index);
    const scrollCounter = useScrollValue(index)


    return (
        <ProjectWrapper ref={Ref}>
            <Row>
                <a href={stockData[index].url} target={"_blank"}><TransformIMG src={MockUpPhone} transform={(scrollCounter * -2).toString()} width='160px' loading='lazy' alt='mockUb' /></a>
                <a href={stockData[index].url} target={"_blank"}><TransformIMG src={MockUpPhone2} transform={(scrollCounter * -1.5).toString()} width='185px' loading='lazy' alt='mockUb' /></a>
            </Row>
            <a href={stockData[index].url} target={"_blank"}><TransformIMG src={MockUpLab} transform={(scrollCounter * -0.5).toString()} width='340px' loading='lazy' alt='mockUb' /></a>
        </ProjectWrapper>
    )
}