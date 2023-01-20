import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const P = styled.p`

font-size:1rem ;
font-weight:700 ;
color: black;
text-align: center;
padding:5px;
text-align: start;
white-space: nowrap;

 @media ${device.tablet} {
   font-size:2.3rem ;
  }
`