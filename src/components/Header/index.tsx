import { Flex } from '@chakra-ui/react'

import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {
  return (
    <Flex
      as="header"
      align="center"
      maxWidth={1480}
      w="100%"
      h="20"
      mx="auto"
      mt="4"
      px="6"
    >
      <Logo />

      <SearchBox />
    
      <Flex align="center" ml="auto">
        <NotificationsNav />
        
        <Profile />
      </Flex>
    </Flex>
  )
}