import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'

import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-04-03T00:00:00.0000Z',
      '2021-04-04T00:00:00.0000Z',
      '2021-04-05T00:00:00.0000Z',
      '2021-04-06T00:00:00.0000Z',
      '2021-04-07T00:00:00.0000Z',
      '2021-04-08T00:00:00.0000Z',
      '2021-04-09T00:00:00.0000Z'
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.7,
    }
  }
}

const series = [
  { 
    name: 'series1',
    data: [31, 500, 10, 83, 32, 19, 256]
  }
]

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex
        maxWidth={1480}
        w="100%"
        my="6"
        mx="auto"
        px="6"
      >
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth={320}
          align="flex-start"
        >
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">Inscritos da semana</Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>

          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">Taxa de abertura</Text>
            <Chart type="area" height={160}  options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
