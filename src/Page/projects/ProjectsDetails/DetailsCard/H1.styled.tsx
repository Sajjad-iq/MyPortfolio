import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";
interface Props {
  fontSize: string
}
export const H1 = styled.h1<Props>`
font-size:${p => p.fontSize} ;
font-weight:900 ;
color:black ;
animation: 0.7s 1 alternate SlideH;

${p => p.fontSize === "1rem" ?
    `@media ${device.tablet} {font-size:1.4rem}` :
    `@media ${device.tablet} {font-size:2.5rem}`
  }

  ${p => p.fontSize === "1rem" ?
    `@media ${device.PortraitTablet} {font-size:2rem}` :
    `@media ${device.PortraitTablet} {font-size:3.5rem}`
  }

   ${p => p.fontSize === "1rem" ?
    `@media ${device.laptop} {font-size:1.2rem}` :
    `@media ${device.laptop} {font-size:2rem}`
  }

  ${p => p.fontSize === "1rem" ?
    `@media ${device.laptopL} {font-size:1.5rem}` :
    `@media ${device.laptopL} {font-size:2.8rem}`
  }
  
  ${p => p.fontSize === "1rem" ?
    `@media ${device.desktop} {font-size:1.8rem}` :
    `@media ${device.desktop} {font-size:3.5rem}`
  }




  ${p => p.fontSize === "0.9rem" ?
    `@media ${device.tablet} {font-size:1.6rem}` : ""
  }
  ${p => p.fontSize === "0.9rem" ?
    `@media ${device.PortraitTablet} {font-size:2rem}` : ""
  } 
  ${p => p.fontSize === "0.9rem" ?
    `@media ${device.laptop} {font-size:1rem}` : ""
  }
  ${p => p.fontSize === "0.9rem" ?
    `@media ${device.laptopL} {font-size:1.4rem}` : ""
  }
  ${p => p.fontSize === "0.9rem" ?
    `@media ${device.desktop} {font-size:1.8rem}` : ""
  }



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