import styled from "styled-components";
import { device } from "../../../../../assets/breackPoints";
interface Props {
  marginBottom: string
  padding: string
}
export const AnimationWrapper = styled.section<Props>`
 position: relative;
 overflow: hidden;
 margin-bottom:${p => p.marginBottom} ;
 padding:${p => p.padding};

 @media ${device.laptopL} {
 margin-bottom: 30px;
}
`