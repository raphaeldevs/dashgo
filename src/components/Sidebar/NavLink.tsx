import { ElementType } from 'react'

import Link from 'next/link'

import { Text, Link as ChakraLink, Icon, LinkProps as ChakraLinkProps } from '@chakra-ui/react'

interface NavLinkProps extends ChakraLinkProps {
  title: string
  icon: ElementType
  href: string
}

export function NavLink({ title, icon, href, ...rest }: NavLinkProps) {
  return (
    <Link href={href}>
      <ChakraLink
        display="flex"
        align="center"
        _hover={{
          color: 'pink.400'
        }}
        {...rest}
      >
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{title}</Text>
      </ChakraLink>
    </Link>
  )
}
