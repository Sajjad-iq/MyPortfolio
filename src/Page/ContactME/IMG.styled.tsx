import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const IMG = styled.img`
 width: 75px;
 margin:30px 0;

 @media ${device.tablet} {
  width: 100px;
}
`