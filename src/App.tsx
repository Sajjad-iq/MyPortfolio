import { AppWrapper } from "./AppWrapper"
import ContextProvider from "./Context/ProjectsApi"
import { Header } from "./Page/Header"
import { Projects } from "./Page/projects"
import { Skills } from "./Page/Skills"

function App() {

  return (
    <AppWrapper>
      <Header />
      <ContextProvider>
        <Projects />
      </ContextProvider>
      <Skills />
    </AppWrapper>
  )
}

export default App
