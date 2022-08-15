import { Flex, SimpleGrid } from "@chakra-ui/react"
import { ChartTemplate } from "../components/Charts"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"

const series1 = [
  { name: 'series1', data: [31, 120, 10, 28, 61, 18, 109] }
]

const series2 = [
  { name: 'series2', data: [62, 21, 110, 36, 92, 12, 52] }
]

const dashboard = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
          <ChartTemplate title="Subscribers of the week" series={series1} />
          <ChartTemplate title="Open rate" series={series2} />
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

export default dashboard