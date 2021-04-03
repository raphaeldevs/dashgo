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
  Text
} from '@chakra-ui/react'

import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex
        maxWidth={1480}
        w="100%"
        my="6"
        mx="auto"
        px="6"
      >
        <Sidebar />

        <Box
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
        >
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th width="8" px="6" color="gray.300">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Nome</Th>
                <Th>Data de cadastro</Th>
                <Th width="4"></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Raphael Corrêa</Text>
                    <Text fontSize="small" color="gray.300">raphaeldeoliveiracorrea@gmail.com</Text>
                  </Box>
                </Td>
                <Td>03 de abr de 2021</Td>
                <Td width="4">
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  )
}
