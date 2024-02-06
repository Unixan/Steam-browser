import { Grid, GridItem, Show } from "@chakra-ui/react"
import { useState } from "react"
import Footer from "./components/Footer"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import NavBar from "./components/NavBar"
import { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/useGames"


const Layout = () => {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

    return (
        <Grid templateAreas={{
            base: `"Head" "Main"`,
            lg: `"Head Head" "Side Main" "Foot Foot"`
        }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr"
            }}
            gridTemplateRows={{
                base: `"80px" "1fr"`,
                lg: `"80px" "1fr" "32px"`
            }}>
            <GridItem area='Head'>
                <NavBar />
            </GridItem>
            <GridItem area='Main'>
                <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)} />
                <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
            </GridItem>
            <Show above="lg">
                <GridItem area='Side' paddingX={5}>
                    <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
                </GridItem>
                <GridItem area='Foot'>
                    <Footer />
                </GridItem>
            </Show>
        </Grid>
    )
}

export default Layout