import { Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar"

function App() {

  return (<>
    <NavBar />
    <Show above="lg">
      <SideBar />
    </Show>
  </>
  )
}

export default App
