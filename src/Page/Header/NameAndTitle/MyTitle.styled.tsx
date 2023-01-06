import styled from "styled-components";

export const MyTitle = styled.h1`
 font-size: 1.2rem;
 color:black ;
 font-weight: 300;
 animation: 1.3s infinite alternate ShowMyTitle;

 @keyframes ShowMyTitle {
  from {
    transform: translate(0px,15%);
  }
  to {
    transform: translate(0px, -10%);
  }
}
`