import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import { Show } from "@chakra-ui/react"
import Footer from "../components/Footer"
import SideBar from "../components/SideBar"

const Layout = () => {
    return (
        <>
            <NavBar />
            <Show above="lg">
                <SideBar />
                <Footer />
            </Show>
            <Outlet />
        </>
    )
}

export default Layout