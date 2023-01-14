import styled from "styled-components";

export const AnimationSlide = styled.section`
height: 100%;
 background-color: black;
 position:absolute;
 top: 0;
 z-index: 10;
 animation: 1s 1 alternate Sli;

 @keyframes Sli {
  0% {
    transform: translate(-100%,0%);
  }

  50% {
     width: 100%;
     transform: translate(-1%,0%);
    }
 
  100% {
    transform: translate(120%,0%);
    width: 100%;
  }
   
}
`