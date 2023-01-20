import styled from "styled-components";
import { device } from "../../../assets/breackPoints";

export const Wrapper = styled.section`
 width: 95%;
 justify-content: center;
 display:flex;
 align-items: center;
 flex-direction: column;
 padding-top:650px;
 padding-bottom:350px;
 z-index:1;

 @media ${device.PortraitTablet} {
    padding-top:950px;
   }

   @media ${device.laptop} {
     width: 50%;
  }
`