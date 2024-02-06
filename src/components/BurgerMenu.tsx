import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import GenreList from "./GenreList";
import PlatformSelector from "./PlatformSelector";
import SearchInput from "./SearchInput";
import SortSelector from "./SortSelector";
import { GameQuery } from "../App";

const BurgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        onClick={onOpen}
        variant="outline"
        aria-label="Menu"
        icon={<HamburgerIcon boxSize={10} />}
        bg="transparent"
        marginRight={4}
      />
      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            borderBottomWidth="1px"
            textAlign="center"
            fontSize={40}
            fontWeight={500}
          >
            Menu
          </DrawerHeader>
          <DrawerBody>
            <VStack paddingY={10}>
              <HStack align="flex-start"></HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default BurgerMenu;
