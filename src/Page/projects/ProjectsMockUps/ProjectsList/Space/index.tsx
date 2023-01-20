import { useContext, useEffect, useRef, useState } from 'react'
import { useObserver } from '../../../../../services/useObserver'
import MockUpPhone from '../../../../../assets/ProjectsMockUps/Space/P1.png'
import MockUpPhone2 from '../../../../../assets/ProjectsMockUps/Space/P2.png'
import MockUpPage from '../../../../../assets/ProjectsMockUps/Space/pad.png'
import { useScrollValue } from '../../../../../services/useScrollValue'
import { TransformIMG } from '../../../../../components/common/TransformIMG.styled'
import { ProjectWrapper } from '../../../../../components/shared/ProjectWrapper'
import { Row } from '../../../../../components/shared/Row.styled'
import { stockData } from '../../../stockData'
import { Section } from '../../../../../components/common/Section'
import React from 'react'
import { LandScapeTransformIMG } from '../../../../../components/common/LandScapeTransformIMG.styled'

export const Space = React.memo(() => {

    const index = 0
    const Ref = useRef<any>()
    const observe = useObserver(Ref, { rootMargin: "0px" }, index);
    let { scrollCounter } = useScrollValue(observe, false)

    return (
        <ProjectWrapper >
            <Section ref={Ref} key={"space"} >
                <Row >
                    <a href={stockData[index].url} target={"_blank"}>
                        <TransformIMG src={MockUpPhone}
                            style={{ transform: `translate(0px,${(scrollCounter * -23).toString()}px)` }}
                            loading='lazy' alt='mockUb'
                        />
                    </a>
                    <a href={stockData[index].url} target={"_blank"}>
                        <TransformIMG src={MockUpPhone2}
                            style={{ transform: `translate(0px,${(scrollCounter * -17).toString()}px)` }}
                            loading='lazy' alt='mockUb'
                        />
                    </a>
                </Row>
                <a href={stockData[index].url} target={"_blank"}>
                    <LandScapeTransformIMG src={MockUpPage}
                        style={{ transform: `translate(0px,${(scrollCounter * -13).toString()}px)` }}
                        loading='lazy' alt='Ipad'
                    />
                </a>
            </Section>
        </ProjectWrapper>
    )
})
