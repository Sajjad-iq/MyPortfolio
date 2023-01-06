import styled from "styled-components";
interface Props {
  marginBottom: string
  padding: string
}
export const AnimationWrapper = styled.section<Props>`
 position: relative;
 overflow: hidden;
 margin-bottom:${p => p.marginBottom} ;
 padding:${p => p.padding};
}
`