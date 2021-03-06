import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
  isCurrent?: boolean
  number: number
  onPageChange: (page: number) => void
}

export function PaginationItem({
  isCurrent = false,
  onPageChange,
  number
}: PaginationItemProps) {
  if (isCurrent) {
    return (
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
        {number}
      </Button>
    )
  }

  return (
    <Button
      size="sm"
      width="4"
      fontSize="xs"
      bg="gray.700"
      _hover={{
        bg: 'gray.500'
      }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  )
}
