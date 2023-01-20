import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const Wrapper = styled.section`
 width: 100%;
 display:flex;
 justify-content: space-around;
 align-items: center;
 overflow: hidden;
 position: relative;
 margin:30px 0;
 flex-wrap: wrap;
 flex-direction: column;
 padding : 200px 0;

 @media ${device.tablet} {
 flex-direction: row;
}
`