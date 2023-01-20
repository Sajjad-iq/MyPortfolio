import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const ProjectWrapper = styled.section`
 width: 100%;
 height: 600px;
 display:flex;
 justify-content: flex-end;
 align-items: center;
 flex-direction: column;

  @media ${device.tablet} {
    height: auto;
  }
  @media ${device.laptop} {
    padding:25px;
}
`