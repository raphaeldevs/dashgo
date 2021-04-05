import { Flex, Button, Stack } from '@chakra-ui/react'

import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'

import { Input } from '../components/Form'

type SignInFormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({ resolver: yupResolver(signInFormSchema) })

  const handleSignIn: SubmitHandler<SignInFormData> = (data, event) => {
    console.log('A', data)
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
          <Input
            {...register('email')}
            error={errors.email}
            type="email"
            label="E-mail"
          />
          <Input
            {...register('password')}
            error={errors.password}
            type="password"
            label="Senha"
          />
        </Stack>

        <Button
          type="submit"
          sz="lg"
          mt="6"
          colorScheme="pink"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
