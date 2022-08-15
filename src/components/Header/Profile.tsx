import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

export const Profile = () => {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Victor Motta</Text>
        <Text color="gray.300" fontSize="small">
          victormotta7@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Victor Motta" />
    </Flex>
  )
}
