import { Text, Heading, Link, Switch, VStack, HStack, Divider, useColorMode } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

const MenuItems = () => {

    return (
        <VStack spacing={5} align='left' >
            <NavLink to='#'><Heading fontSize={20}>Home</Heading></NavLink>
            <NavLink to='#'><Heading fontSize={20}>Players</Heading></NavLink>
            <NavLink to='#'><Heading fontSize={20}>Games</Heading></NavLink>
        </VStack>
    )
}

export default MenuItems
