import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const LandScapeTransformIMG = styled.img.attrs<any>((props) => ({

}))` 
width: 360px;

@media ${device.tablet} {
  width: 700px;
}

@media ${device.laptop} {
  width: 500px;
}

@media ${device.laptopL} {
  width: 600px;
}

@media ${device.desktop} {
  width: 900px;
}
`