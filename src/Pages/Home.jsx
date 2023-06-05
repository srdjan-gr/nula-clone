import { Box, Flex, HStack, VStack } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <Flex h='90vh' justifyContent='space-around' pb={10}>
        <HStack border='1px' borderColor='gray.300'>
            <Box>
            PLayer

            </Box>
        </HStack>
        <VStack border='1px' borderColor='gray.300'>
            <Box>
            PLal list

            </Box>
        </VStack>
    </Flex>
  )
}

export default Home