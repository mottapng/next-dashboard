import { Flex, IconButton, Icon, useBreakpointValue } from "@chakra-ui/react"
import { RiMenuLine } from "react-icons/ri"
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext"

import { Logo } from "./Logo"
import { Notifications } from "./Notifications"
import { Profile } from "./Profile"
import { Search } from "./Search"

export const Header = () => {
  const { onOpen } = useSidebarDrawer()
  const isWideVersion = useBreakpointValue({ base: false, lg: true })

  return (
    <Flex as="header" w="100%" maxWidth={1480} h="20" mx="auto" mt="4" align="center" px="6">

      {!isWideVersion && (
        <IconButton
          display="flex"
          alignItems="center"
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        >

        </IconButton>
      )}

      <Logo />

      {isWideVersion && <Search />}

      <Flex align="center" ml="auto">
        <Notifications />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}

