import { Flex, Box, Button, HStack } from '@chakra-ui/react'

export function Pagination() {
  return (
    <Flex mt="8" justify="space-between" align="center">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>{' '}
        registros totais
      </Box>

      <HStack spacing="2">
        <Button
          size="sm"
          width="4"
          fontSize="xs"
          colorScheme="pink"
          _disabled={{
            bg: 'pink.500',
            cursor: 'default'
          }}
          disabled
        >
          1
        </Button>

        <Button
          size="sm"
          width="4"
          fontSize="xs"
          bg="gray.700"
          _hover={{
            bg: 'gray.500'
          }}
        >
          2
        </Button>

        <Button
          size="sm"
          width="4"
          fontSize="xs"
          bg="gray.700"
          _hover={{
            bg: 'gray.500'
          }}
        >
          3
        </Button>

        <Button
          size="sm"
          width="4"
          fontSize="xs"
          bg="gray.700"
          _hover={{
            bg: 'gray.500'
          }}
        >
          4
        </Button>
      </HStack>
    </Flex>
  )
}
