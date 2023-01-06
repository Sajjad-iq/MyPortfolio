import styled from "styled-components";
interface Props {
    transform: string
}
export const AnimationLabel = styled.p<Props>`
 font-size:5rem;
 white-space: nowrap;
 color:gray;
 font-weight: 700;
 transform: translate(${p => p.transform}px,0%);
 position:absolute;
 left:-100px;
 opacity: 0.2;
 
`