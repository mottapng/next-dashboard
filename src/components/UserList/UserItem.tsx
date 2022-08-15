import { Box, Button, Checkbox, Icon, Td, Text, Tr } from "@chakra-ui/react"
import { RiPencilLine } from "react-icons/ri"

interface UserItemProps {
  name: string;
  email: string;
  registrationDate: string;
}

export const UserItem = ({ name, email, registrationDate }: UserItemProps) => {
  return (
    <Tr>
      <Td px="6">
        <Checkbox colorScheme="pink" />
      </Td>
      <Td>
        <Box>
          <Text fontWeight="bold">{name}</Text>
          <Text fontSize="sm" color="gray.300">{email}</Text>
        </Box>
      </Td>
      <Td>{registrationDate}</Td>
      <Td>
        <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
          Edit
        </Button>
      </Td>
    </Tr>
  )
}
