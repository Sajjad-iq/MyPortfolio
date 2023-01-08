import React from 'react'
import { AnimationSlideBox } from './AnimationBox'
import { H1 } from './H1.styled'
import { P } from './P.styled'
import { Wrapper } from './Wrapper'

interface Props {
    projectIndex: string
    header: string
    Skills: string
    description: string
}
export const DetailsCard = (props: Props) => {
    return (
        <Wrapper>
            <AnimationSlideBox Padding='5px 0' marginBottom='35px'><H1 fontSize='0.9rem'>{props.projectIndex}</H1></AnimationSlideBox>
            <AnimationSlideBox Padding='10px 0' marginBottom='15px'><H1 fontSize='2rem'>{props.header}</H1></AnimationSlideBox>
            <AnimationSlideBox Padding='0' marginBottom='10px'><H1 fontSize='1rem'>{props.Skills}</H1></AnimationSlideBox>
            <AnimationSlideBox Padding='0' marginBottom='20px'><P>{props.description}</P></AnimationSlideBox>
            <AnimationSlideBox Padding='0' marginBottom='0px'><P>To See it Live Hit the Devices Below</P></AnimationSlideBox>
        </Wrapper>
    )
}
