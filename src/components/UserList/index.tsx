import { Checkbox, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react"
import { UserItem } from "./UserItem"

export const UsersTable = () => {
  return (
    <Table colorScheme="whiteAlpha">
      <Thead>
        <Tr>
          <Th px="6" color="gray.300" w="8">
            <Checkbox colorScheme="pink" />
          </Th>
          <Th>Users</Th>
          <Th>Registration date</Th>
          <Th w="8"></Th>
        </Tr>
      </Thead>
      <Tbody>
        <UserItem name='Victor Motta' email="victormotta7@gmail.com" registrationDate="07 April, 2022" />
      </Tbody>
    </Table>
  )
}
