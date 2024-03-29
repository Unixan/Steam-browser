import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import Footer from "./components/Footer";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SearchInput from "./components/SearchInput";
import SortSelector from "./components/SortSelector";
import { GameQuery } from "./data/Interfaces";

const Layout = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"Head" "Main"`,
        lg: `"Head Head" "Side Main" "Foot Foot"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      gridTemplateRows={{
        base: `"80px" "1fr"`,
        lg: `"80px" "1fr" "32px"`,
      }}
    >
      <GridItem area="Head">
        <NavBar
          onGameQuery={(gameQuery) => setGameQuery(gameQuery)}
          gameQuery={gameQuery}
        />
      </GridItem>
      <GridItem area="Main">
        <HStack spacing={5} paddingLeft={3} marginBottom={5}>
          <Show above="lg">
            <SearchInput
              onSearch={(searchText) =>
                setGameQuery({ ...gameQuery, searchText })
              }
            />
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Show>
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
      <Show above="lg">
        <GridItem area="Side" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
        <GridItem area="Foot">
          <Footer />
        </GridItem>
      </Show>
    </Grid>
  );
};

export default Layout;
