import { Button, Flex, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="form" w="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDir="column">
        <Stack spacing="4">

          <Input name="email" label="E-mail" type="email" />
          <Input name="password" label="Password" type="password" />

        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg">Sign In</Button>

      </Flex>
    </Flex>
  )
}
