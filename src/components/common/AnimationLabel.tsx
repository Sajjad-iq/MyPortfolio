import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const AnimationLabel = styled.p.attrs<any>((props) => ({

}))`
 font-size:5rem;
 white-space: nowrap;
 color:gray;
 font-weight: 700;
 position:absolute;
 left:-100px;
 opacity: 0.2;
 
  @media ${device.tablet} {
     font-size: 8rem;
  }

  @media ${device.laptop} {
     font-size: 5rem;
  }

  @media ${device.desktop} {
     font-size: 9rem;
  }
`