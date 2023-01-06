import { useRef } from 'react'
import { useObserver } from '../../../../../services/useObserver'
import { TransformIMG } from './IMG.styled'
import { ProjectWrapper } from './ProjectWrapper'
import { Row } from './Row.styled'
import MockUpPhone from '../../../../../assets/ProjectsMockUps/animeLibrary/iPhone11.png'
import MockUpPhone2 from '../../../../../assets/ProjectsMockUps/animeLibrary/iphone22.png'
import MockUpIpad from '../../../../../assets/ProjectsMockUps/animeLibrary/Pad.png'
import { useScrollValue } from '../../../../../services/useScrollValue'

export const AnimeLibraryCopy = () => {

    const Ref = useRef<any>()
    useObserver(Ref, { rootMargin: "0px" }, 1);
    const scrollCounter = useScrollValue(10000)


    return (
        <ProjectWrapper ref={Ref}>
            <Row>
                <TransformIMG src={MockUpPhone} transform={(scrollCounter * 2).toString()} width='160px' loading='lazy' alt='mockUb' />
                <TransformIMG src={MockUpPhone2} transform={(scrollCounter * 2.5).toString()} width='185px' loading='lazy' alt='mockUb' />
            </Row>
            <TransformIMG src={MockUpIpad} transform={(scrollCounter * 3).toString()} width='340px' loading='lazy' alt='mockUb' />
        </ProjectWrapper>
    )
}
