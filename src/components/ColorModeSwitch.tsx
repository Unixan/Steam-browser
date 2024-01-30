import { HStack, Text, Switch, useColorMode } from "@chakra-ui/react"

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode()
    return (
        <HStack>
            <Text>Dark Moode: </Text><Switch
                id='Darkmode'
                isChecked={colorMode === 'dark'}
                onChange={toggleColorMode} />
        </HStack>
    )
}

export default ColorModeSwitch
