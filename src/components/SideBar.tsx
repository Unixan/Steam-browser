import { Box, VStack } from '@chakra-ui/react'
import MenuItems from './MenuItems'
import ColorModeSwitch from './ColorModeSwitch'

const SideBar = () => {
  return (
    <>
      <VStack height='calc(100vh - (3rem + 80px))' width='300px' paddingTop={14} justify='space-between' paddingBottom={2}>
        <MenuItems />
        <ColorModeSwitch />
              </VStack>
    </>
  )
}

export default SideBar
