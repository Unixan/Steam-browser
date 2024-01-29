import { Box, Flex, Heading, Hide, Img, Spacer } from "@chakra-ui/react";
import BurgerMenu from "./BurgerMenu";

const NavBar = () => {
  return (
    <Box margin={2} >
      <Flex minWidth="max-content" alignItems="center">
        <Img src="src\assets\SteamLogo.png" alt='Steam logo' boxSize='80px' objectFit='cover' />
        <Spacer />
        <Heading>Steam Browser</Heading>
        <Spacer />
        <Hide above="lg">
          <BurgerMenu />
        </Hide>
      </Flex>
    </Box>
  );
};

export default NavBar;
