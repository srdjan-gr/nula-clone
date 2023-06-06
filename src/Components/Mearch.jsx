import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

const Mearch = () => {
  return (

    <Box w='45%'>
        <Flex direction='column'>
            <Image src='../public/img/shop/shop-1.png' alt='buy mearch banner'
                w='100%'
                mb={8}
                cursor='pointer'
                _hover={{transform: 'scale(1.02)', transition: 'transform .15s linear'}}
            />
            <Image src='../public/img/shop/shop-2.png' alt='buy mearch banner'
                w='100%'
                mb={8}
                borderRadius='md'
                cursor='pointer'
                _hover={{transform: 'scale(1.02)', transition: 'transform .15s linear'}}
                />
            <Image src='../public/img/shop/shop-3.png' alt='buy mearch banner'
                w='100%'
                mb={8}
                borderRadius='md'
                cursor='pointer'
                _hover={{transform: 'scale(1.02)', transition: 'transform .15s linear'}}
            />
            <Image src='../public/img/shop/shop-4.jpg' alt='buy mearch banner'
                w='100%'
                mb={8}
                borderRadius='md'
                cursor='pointer'
                _hover={{transform: 'scale(1.02)', transition: 'transform .15s linear'}}
            />
            <Image src='../public/img/shop/shop-5.jpg' alt='buy mearch banner'
                w='100%'
                mb={8}
                borderRadius='md'
                cursor='pointer'
                _hover={{transform: 'scale(1.02)', transition: 'transform .15s linear'}}
            />
            <Image src='../public/img/shop/shop-6.jpg' alt='buy mearch banner'
                w='100%'
                mb={8}
                borderRadius='md'
                cursor='pointer'
                _hover={{transform: 'scale(1.02)', transition: 'transform .15s linear'}}
            />
        </Flex>
    </Box>
  )
}

export default Mearch