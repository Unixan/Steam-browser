import { Box, Flex, Heading, Hide, Img, Spacer } from "@chakra-ui/react";
import BurgerMenu from "./BurgerMenu";
import { GameQuery } from "../data/Interfaces";

interface Props {
  gameQuery: GameQuery;
  onGameQuery: (gameQuery: GameQuery) => void;
}

const NavBar = ({ gameQuery, onGameQuery }: Props) => {
  return (
    <Box margin={2}>
      <Flex minWidth="max-content" alignItems="center">
        <Img
          src="src\assets\SteamLogo.png"
          alt="Steam logo"
          boxSize="80px"
          objectFit="cover"
        />
        <Spacer />
        <Heading>Game Hub</Heading>
        <Spacer />
        <Hide above="lg">
          <BurgerMenu
            onGameQuery={(gameQuery) => onGameQuery(gameQuery)}
            gameQuery={gameQuery}
          />
        </Hide>
      </Flex>
    </Box>
  );
};

export default NavBar;
