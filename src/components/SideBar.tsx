import { VStack } from '@chakra-ui/react'
import MenuItems from './MenuItems'

const SideBar = () => {
  return (
    <VStack height='calc(100vh - (3rem + 80px))' width='300px' bg='red' paddingTop={14}>
      <MenuItems />
    </VStack>

  )
}

export default SideBar
