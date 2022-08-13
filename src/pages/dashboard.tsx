import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react"
import dynamic from "next/dynamic"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '18 Mar',
      '19 Mar',
      '20 Mar',
      '21 Mar',
      '22 Mar',
      '23 Mar',
      '24 Mar',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
}

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

          <Box p="8" bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">Subscribers of the week</Text>
            <Chart options={options} series={series1} type="area" height={160} />
          </Box>

          <Box p="8" bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">Open rate</Text>
            <Chart options={options} series={series2} type="area" height={160} />
          </Box>

        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

export default dashboard