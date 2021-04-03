import { Flex, Input, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'

export default function Home() {
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
        color="red.200"
        borderRadius={8}
      >
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              variant="filled"
              bgColor="gray.900"
              focusBorderColor="pink.500"
              sz="lg"
              _hover={{
                bgColor: 'gray.900'
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
              variant="filled"
              bgColor="gray.900"
              focusBorderColor="pink.500"
              sz="lg"
              _hover={{
                bgColor: 'gray.900'
              }}
            />
          </FormControl>
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
