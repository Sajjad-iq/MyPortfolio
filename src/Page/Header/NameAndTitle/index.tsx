import { AnimationBox } from "./AnimationBox.styled"
import { MyName } from "./MyName.styled"
import { MyTitle } from "./MyTitle.styled"
import { Wrapper } from "./Wrapper"

export const NameAndTitle = () => {
  return (
    <Wrapper>
      <AnimationBox>
        <MyName>Sajjad Kademm</MyName>
      </AnimationBox>

      <AnimationBox>
        <MyTitle>Front-end Developer</MyTitle>
      </AnimationBox>
    </Wrapper>
  )
}
