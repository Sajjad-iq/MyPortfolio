import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const Wrapper = styled.section`
 width: 100%;
 height: 100%;
 display:flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 position: relative;
 z-index:20;

 @media ${device.laptop} {
     align-items: flex-end;
  }
`