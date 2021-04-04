import { Flex, Input, Icon } from '@chakra-ui/react'

import { RiSearchLine } from 'react-icons/ri'

export function SearchBox() {
  return (
    <Flex
      as="label"
      flex="1"
      maxWidth={400}
      alignSelf="center"
      align="center"
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
  )
}
