import { Flex, Button, Stack } from '@chakra-ui/react'

import { useForm, SubmitHandler } from 'react-hook-form'

import { Input } from '../components/Form'

type SignInFormData = {
  email: string
  password: string
}

export default function SignIn() {
  const { register, handleSubmit } = useForm()

  const handleSignIn: SubmitHandler<SignInFormData> = (data, event) => {
    console.log(data)
  }

  return (
    <Flex w="100vw" h="100vh" justify="center" align="center">
      <Flex
        as="form"
        maxWidth={360}
        width="100%"
        flexDir="column"
        p="8"
        bg="gray.800"
        borderRadius={8}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input {...register('email')} type="email" label="E-mail" />
          <Input {...register('password')} type="password" label="Senha" />
        </Stack>

        <Button type="submit" sz="lg" mt="6" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
