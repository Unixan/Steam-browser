import { Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar"
import Footer from "./components/Footer"

function App() {

  return (<>
    <NavBar />
    <Show above="lg">
      <SideBar />
      <Footer/>
    </Show>
  </>
  )
}

export default App
