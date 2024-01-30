import { HamburgerIcon } from "@chakra-ui/icons"
import { Box, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, IconButton, VStack, useDisclosure } from "@chakra-ui/react"
import MenuItems from "./MenuItems"
import Footer from "./Footer"
import ColorModeSwitch from "./ColorModeSwitch"

const BurgerMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <IconButton onClick={onOpen}
                variant='outline'
                aria-label="Menu"
                icon={<HamburgerIcon boxSize={10} />}
                bg='transparent'
                marginRight={4} />
            <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px' textAlign='center'>Menu</DrawerHeader>
                    <DrawerBody>
                        <VStack paddingY={10}>
                            <MenuItems />
                        </VStack>
                        <Box bottom={0} position='absolute' w='100%'>
                            <VStack>
                                <ColorModeSwitch />
                                <Divider />
                                <Footer />
                            </VStack>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default BurgerMenu
