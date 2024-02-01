import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import { Grid, GridItem, Show } from "@chakra-ui/react"
import Footer from "../components/Footer"
import SideBar from "../components/SideBar"

const Layout = () => {
    return (
        <>
            <Grid templateAreas={{
                base: `"Head" "Main"`,
                lg: `"Head Head" "Side Main" "Foot Foot"`
            }}
                templateColumns={{
                    base: "1fr",
                    lg: "300px 1fr"
                }}
                gridTemplateRows={{
                    base: `"80px" "1fr"`,
                    lg: `"80px" "1fr" "32px"`
                }}>
                <GridItem area='Head'>
                    <NavBar />
                </GridItem>
                <GridItem area='Main'>
                    <Outlet />
                </GridItem>
                <Show above="lg">
                    <GridItem area='Side'>
                        <SideBar />
                    </GridItem>
                    <GridItem area='Foot'>
                        <Footer />
                    </GridItem>
                </Show>
            </Grid>
        </>
    )
}

export default Layout