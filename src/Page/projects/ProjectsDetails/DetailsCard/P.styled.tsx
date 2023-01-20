import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";

export const P = styled.p`

font-size:1rem ;
font-weight:500 ;
color: black;
animation: 0.7s 1 alternate SlideP;

 @media ${device.tablet} {
     font-size:1.5rem ;
  }
  @media ${device.PortraitTablet} {
     font-size:2rem ;
  }
  @media ${device.laptop} {
     font-size:1rem ;
  }
  @media ${device.laptopL} {
     font-size:1.2rem ;
  }
  @media ${device.desktop} {
     font-size:1.7rem ;
  }

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