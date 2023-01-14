import { AppWrapper } from "./AppWrapper"
import ContextProvider from "./Context/ProjectsApi"
import { ContactMe } from "./Page/ContactME"
import { Header } from "./Page/Header"
import { Projects } from "./Page/projects"
import { Skills } from "./Page/Skills"

function App() {

  return (
    <AppWrapper>
      <ContextProvider>
        <Header />
        <Projects />
        <Skills />
        <ContactMe />
      </ContextProvider>

    </AppWrapper>
  )
}

export default App
