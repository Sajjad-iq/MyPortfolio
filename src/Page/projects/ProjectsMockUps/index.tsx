
import { AnimeLibrary } from './ProjectsList/AnimyLibrary'
import { PaperRockGame } from './ProjectsList/PaperRockGame'
import { Space } from './ProjectsList/Space'
import { UrlShorts } from './ProjectsList/UrlShorts'
import { Wrapper } from './Wrapper'

export const ProjectsMockUps = () => {

    return (
        <Wrapper>
            <AnimeLibrary />
            <UrlShorts />
            <PaperRockGame />
            <Space />
        </Wrapper>
    )
}
