import { ElementType } from 'react'

import {
  Text,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Icon,
} from '@chakra-ui/react'

import { ActiveLink } from '../ActiveLink'

interface NavLinkProps extends ChakraLinkProps {
  title: string
  icon: ElementType
  href: string
}

export function NavLink({ title, icon, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href}>
      <ChakraLink
        display="flex"
        align="center"
        _hover={{
          color: 'pink.400'
        }}
        {...rest}
      >
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {title}
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}
