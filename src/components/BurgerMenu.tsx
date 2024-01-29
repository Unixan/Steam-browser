import { HamburgerIcon } from "@chakra-ui/icons"
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, IconButton, useDisclosure } from "@chakra-ui/react"

const BurgerMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <IconButton onClick={onOpen} variant='outline' aria-label="Menu" icon={<HamburgerIcon boxSize={10} />} bg='transparent' marginRight={4} />
            <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                    <DrawerBody>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default BurgerMenu
