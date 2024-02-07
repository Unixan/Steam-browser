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
import { GameQuery } from "../data/Interfaces";
import GenreList from "./GenreList";
import SearchInput from "./SearchInput";
import SortSelector from "./SortSelector";
import PlatformSelector from "./PlatformSelector";

interface Props {
  gameQuery: GameQuery;
  onGameQuery: (gameQuery: GameQuery) => void;
}

const BurgerMenu = ({ gameQuery, onGameQuery }: Props) => {
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
              <SearchInput
                currentSearchString={gameQuery.searchText}
                onSearch={(searchText) =>
                  onGameQuery({ ...gameQuery, searchText })
                }
              />
              {/* <HStack align="flex-start"> */}
              <PlatformSelector
                onSelectPlatform={(platform) =>
                  onGameQuery({ ...gameQuery, platform })
                }
                selectedPlatform={gameQuery.platform}
              />
              <SortSelector
                onSelectSortOrder={(sortOrder) =>
                  onGameQuery({ ...gameQuery, sortOrder })
                }
                sortOrder={gameQuery.sortOrder}
              />
              {/* </HStack> */}
              <GenreList
                onSelectGenre={(genre) => onGameQuery({ ...gameQuery, genre })}
                selectedGenre={gameQuery.genre}
              />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default BurgerMenu;
