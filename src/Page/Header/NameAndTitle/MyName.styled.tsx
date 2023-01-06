import styled from "styled-components";

export const MyName = styled.h1`
 font-size: 3rem;
 color:black ;
 font-family: 'Yellowtail',cursive;
 animation: 1.7s 1 alternate ShowMyName;


 @keyframes ShowMyName {
  from {
    transform: translate(0px,200%);
  }
  to {
    transform: translate(0px, 0%);
  }
}
`