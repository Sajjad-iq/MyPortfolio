import styled from "styled-components";
interface Props {
    width: string
    transform: string
}
export const TransformIMG = styled.img<Props>`
 width: ${p => p.width};
 transform: translate(0px,${p => p.transform}px);
`