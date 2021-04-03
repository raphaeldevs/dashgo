import { Flex, Icon, Input, Text } from '@chakra-ui/react'

import { RiSearchLine } from 'react-icons/ri'

export function Header() {
  return (
  <Flex
    as="header"
    align="center"
    maxWidth={1480}
    w="100%"
    h="20"
    mx="auto"
    mt="4"
    px="6"
  >
    <Text
      w="64"
      fontSize="3xl"
      fontWeight="bold"
      letterSpacing="tight"
    >
      dashgo 
      <Text as="span" ml="1" color="pink.500">.</Text>
    </Text>

    <Flex
      as="label"
      flex="1"
      maxWidth={400}
      alignSelf="center"
      py="4"
      px="8"
      ml="6"
      color="gray.200"
      bg="gray.800"
      borderRadius="full"
      position="relative"
    >
      <Input 
        variant="unstyled"
        px="4"
        mr="4"
        color="gray.50"
        placeholder="Buscar na plataforma"
        _placeholder={{
          color: 'gray.400'
        }}
      />

      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  </Flex>
  )
}
