import { Box, Flex } from "@chakra-ui/react"
import { Header } from "../../components/Header"
import { Pagination } from "../../components/Pagination"
import { Sidebar } from "../../components/Sidebar"
import { UsersTable } from "../../components/UserList"
import { ListHead } from "../../components/UserList/ListHead"

const UserList = () => {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <ListHead />
          <UsersTable />
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}

export default UserList