import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const Description = styled.p`
 font-size:1.1rem;
 color:black;
 font-weight: 400;
 text-align: center;

  @media ${device.tablet} {
     font-size: 1.8rem;
  }

  @media ${device.laptop} {
     font-size: 1.3rem;
  }

  @media ${device.desktop} {
     font-size: 2.2rem;
  }
`