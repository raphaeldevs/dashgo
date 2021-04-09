import Link from 'next/link'

import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Table,
  Th,
  Thead,
  Tr,
  Checkbox,
  Tbody,
  Td,
  Text,
  Spinner,
  useBreakpointValue
} from '@chakra-ui/react'

import { useQuery } from 'react-query'

import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'

type User = {
  name: string
  email: string
  createdAt: string
}

export default function UserList() {
  const { data, isLoading, isFetching, error } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users')
    const data = await response.json()

    const users: User[] = data.users.map((user: User) => ({
      ...user,
      createdAt: new Date(user.createdAt).toLocaleString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }))

    return users
  })

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />

      <Flex maxWidth={1480} w="100%" my="6" mx="auto" px={['4', '4', '6']}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              
              {!isLoading && isFetching && (
                <Spinner size="sm" color="gray.500" ml="4" />
              )}
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados de usuários :(</Text>
            </Flex>
          ) : (
            <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th width="8" px={['4', '4', '6']} color="gray.300">
                    <Checkbox colorScheme="pink" />
                  </Th>
                  <Th>Nome</Th>
                  {isWideVersion && <Th>Data de cadastro</Th>}
                  <Th width="4"></Th>
                </Tr>
              </Thead>

              <Tbody>
                {data.map(user => (
                  <Tr>
                    <Td px={['4', '4', '6']}>
                      <Checkbox colorScheme="pink" />
                    </Td>

                    <Td>
                      <Box>
                        <Text fontWeight="bold">{user.name}</Text>
                        <Text fontSize="small" color="gray.300">
                          {user.email}
                        </Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td>{user.createdAt}</Td>}
                    <Td>
                      {isWideVersion && (
                        <Button
                          as="a"
                          size="sm"
                          fontSize="sm"
                          colorScheme="purple"
                          leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                        >
                          Editar
                        </Button>
                      )}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
