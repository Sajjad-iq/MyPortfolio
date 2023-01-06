import styled from "styled-components";

interface Props {
    display: string
}
export const Wrapper = styled.section<Props>`
 width: 100%;
 display:${p => p.display};
 justify-content: center;
 align-items: center;
 flex-direction: column;
 position:fixed;
 top: 0;
 z-index: 10; 
`