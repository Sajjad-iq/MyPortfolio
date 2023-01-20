import styled from "styled-components";
import { device } from "../../assets/breackPoints";

export const TransformIMG = styled.img.attrs<any>((props) => ({

}))` 
  width: 170px;

@media ${device.tablet} {
  width: 275px;
}
@media ${device.laptop} {
  width: 200px;
}
@media ${device.laptopL} {
  width: 250px;
}
@media ${device.desktop} {
  width: 325px;
}

`