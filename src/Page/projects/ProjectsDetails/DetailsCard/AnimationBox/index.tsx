import { ReactNode } from 'react'
import { AnimationSlide } from './AnimationSlide.styled'
import { AnimationWrapper } from './AnimationWrapper.styled'

type ChildrenType = {
    children: ReactNode
    marginBottom: string
    Padding: string
}
export const AnimationSlideBox = ({ children, marginBottom, Padding }: ChildrenType) => {
    return (
        <AnimationWrapper padding={Padding} marginBottom={marginBottom}>
            <AnimationSlide></AnimationSlide>
            {children}
        </AnimationWrapper>
    )
}
