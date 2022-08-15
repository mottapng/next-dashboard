import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData?: boolean;
}

export const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Victor Motta</Text>
          <Text color="gray.300" fontSize="small">
            victormotta7@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Victor Motta" />
    </Flex>
  )
}
