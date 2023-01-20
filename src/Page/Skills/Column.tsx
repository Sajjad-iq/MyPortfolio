import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const Column = styled.section`
 width: 90%;
 display:flex;
 justify-content: center;
 align-items: flex-start;
 flex-direction: column;
 margin:15px;

 @media ${device.tablet} {
     margin:30px;
  }
`