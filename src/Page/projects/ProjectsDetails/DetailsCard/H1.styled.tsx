import styled from "styled-components";
interface Props {
  fontSize: string
}
export const H1 = styled.h1<Props>`
font-size:${p => p.fontSize} ;
font-weight:900 ;
color:black ;
animation: 0.7s 1 alternate SlideH;

 @keyframes SlideH {
  0% {
    transform: translate(-100%,0%);
  }
  75% {
    transform: translate(-100%,0%);
    color:red ;
  }
  100% {
    transform: translate(0%,0%);
  }
 
}
`