import { Button, Flex, Heading, Icon } from "@chakra-ui/react"
import { RiAddLine } from "react-icons/ri"

export const ListHead = () => {
  return (
    <Flex mb="8" justify="space-between" align="center">
      <Heading size="lg" fontWeight="normal">Users</Heading>
      <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
        Create new
      </Button>
    </Flex>
  )
}
