import styled from "styled-components";

export const P = styled.p`

font-size:1rem ;
font-weight:500 ;
color: black;
animation: 1.3s 1 alternate SlideP;

 @keyframes SlideP {
  0% {
    transform: translate(-100%,0%);
  }
  75% {
    transform: translate(-100%,0%);
  }
  100% {
    transform: translate(0%,0%);
  }

`