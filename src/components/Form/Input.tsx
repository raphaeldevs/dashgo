import { forwardRef, ForwardRefRenderFunction } from 'react'

import { FieldError } from 'react-hook-form'

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={Boolean(error)}>
      {Boolean(label) && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        id={name}
        name={name}
        variant="filled"
        bgColor="gray.900"
        focusBorderColor="pink.500"
        sz="lg"
        _hover={{
          bgColor: 'gray.900'
        }}
        ref={ref}
        {...rest}
      />

      {Boolean(error) && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
