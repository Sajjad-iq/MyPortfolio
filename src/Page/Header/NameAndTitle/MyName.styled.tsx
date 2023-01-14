import styled from "styled-components";
import { device } from "../../../assets/breackPoints";

export const MyName = styled.h1`
 font-size: 3rem;
 color:black ;
 font-family: 'Yellowtail',cursive;
 animation: 1.7s 1 alternate ShowMyName;

  @media ${device.tablet} {
     font-size: 5.5rem;
  }

 @keyframes ShowMyName {
  from {
    transform: translate(0px,200%);
  }
  to {
    transform: translate(0px, 0%);
  }

}
`