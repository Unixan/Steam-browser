import { Heading, Link, VStack } from "@chakra-ui/react"

const MenuItems = () => {
    return (
        <VStack spacing={5} align='left' >
            <Link href='#'><Heading fontSize={20}>Home</Heading></Link>
            <Link href='#'><Heading fontSize={20}>Players</Heading></Link>
            <Link href='#'><Heading fontSize={20}>Games</Heading></Link>
        </VStack>
    )
}

export default MenuItems
