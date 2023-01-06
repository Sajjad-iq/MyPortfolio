import { AboutMe } from "./AboutMe"
import { NameAndTitle } from "./NameAndTitle"
import { Wrapper } from "./Wrapper"

export const Header = () => {
    return (
        <Wrapper>
            <NameAndTitle />
            <AboutMe />
        </Wrapper>
    )
}
