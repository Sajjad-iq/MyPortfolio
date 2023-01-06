import { AppWrapper } from "./AppWrapper"
import ContextProvider from "./Context/ProjectsApi"
import { Header } from "./Page/Header"
import { Projects } from "./Page/projects"

function App() {

  return (
    <AppWrapper>
      <Header />
      <ContextProvider>
        <Projects />
      </ContextProvider>
    </AppWrapper>
  )
}

export default App
