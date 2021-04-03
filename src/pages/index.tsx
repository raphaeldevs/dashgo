import { Flex, Button, Stack } from '@chakra-ui/react'

import { Input } from '../components/Form'

export default function SignIn() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      justify="center"
      align="center"
    >
      <Flex
        as="form"
        maxWidth={360}
        width="100%"
        flexDir="column"
        p="8"
        bg="gray.800"
        borderRadius={8}
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" />

          <Input name="password" type="password" label="Senha" />
        </Stack>

        <Button
          sz="lg"
          mt="6"
          colorScheme="pink"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
