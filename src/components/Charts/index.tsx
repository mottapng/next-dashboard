import { Box, Text } from "@chakra-ui/react"
import dynamic from "next/dynamic"
import options from "./options"
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

interface ChartProps {
  title: string;
  series: any;
}

export const ChartTemplate = ({ title, series }: ChartProps) => {
  return (
    <Box p="8" bg="gray.800" borderRadius={8} pb="4">
      <Text fontSize="lg" mb="4">{title}</Text>
      <Chart options={options} series={series} type="area" height={160} />
    </Box>
  )
}
