import { Box, Stack, HStack } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

export function Pagination() {
  return (
    <Stack
      spacing="6"
      justify="space-between"
      align="center"
      direction={['column', 'row']}
      mt="8"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>{' '}
        registros totais
      </Box>

      <HStack spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
      </HStack>
    </Stack>
  )
}
