import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Donate = () => {
  return (
    <Box as='section' h='250px' bg='#222325' borderY='1px' borderColor='#717673' >
        <Flex h='100%' alignItems='flex-end' justifyContent='center' gap='100px'>
            <Image 
                src='../public/img/donate.png' alt='donate image' 
                h='230px'
            />

            
            <Flex h='100%' alignItems='center' justifyContent='center' direction='column' gap={5}>
                <Text as='h2' fontWeight='500'>Please consider donating and help us keep Radio NULA ads free.</Text>

                <Button  width='140px' height='43px' colorScheme='white' variant='outline'
                    _hover={{borderColor: 'gray.700'}}
                >DONATE</Button>

                <Text as='h2' fontSize='xs'>We are currently accepting Paypal donations.</Text>
            </Flex>
            
        </Flex>
    </Box>
  )
}

export default Donate