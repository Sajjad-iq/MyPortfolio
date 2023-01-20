import styled from "styled-components";
import { device } from "../../../../assets/breackPoints";


export const Wrapper = styled.section`
 width: 100%;
 height: 100%;
 display:flex;
 justify-content: flex-start;
 align-items: flex-start;
 flex-direction: column;
 padding:20px;

  @media ${device.laptop} {
     width: 50%;
  }
`