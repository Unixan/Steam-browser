import { SimpleGrid } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import "../styles.css"

const MenuItems = () => {
    return (

        <nav id='menu'>
            <SimpleGrid columns={1} spacing={{
                base:"20px",
                lg: "50px"
            }} textAlign='center'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/Players'>Players</NavLink>
                <NavLink to='/Games'>Games</NavLink>
            </SimpleGrid>
        </nav >
    )
}

export default MenuItems
