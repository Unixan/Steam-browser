import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, IconButton, Img, Spacer } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box margin={2} >
      <Flex minWidth="max-content" alignItems="center">
        <Img src="src\assets\SteamLogo.png" alt='Steam logo' boxSize='80px' objectFit='cover'/>
        <Spacer />
        <Heading>Steam Browser</Heading>
        <Spacer />
        <IconButton aria-label="Menu" icon={<HamburgerIcon boxSize={10}/>} bg='transparent' marginRight={4}/>
      </Flex>
    </Box>
  );
};

export default NavBar;
