import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { Box, Flex } from '@chakra-ui/react'

import Navbar from '../Components/Navbar'
import Donate from '../Components/Donate'
import Coments from '../Components/Coments'
import Mearch from '../Components/Mearch'




const MainLayout = () => {

  const location = useLocation()

  return (
    <Box color='white' bgSize='cover'>

        <Box   
          bgImage={location.pathname === '/organic' ? "url('../public/img/organic.jpg')" : location.pathname === '/beatz' ? "url('../public/img/beatz.jpg')" : "url('../public/img/classic.jpg')"}>

          <Navbar/>
          <Outlet />
        </Box>

        <Donate/>

        <Box as='section' bg='#222325'>
          {/* <Flex justifyContent='center' w='1000px' border='1px' borderColor='white' m='0 auto'> */}
          <Flex justifyContent='center' w='1200px' m='0 auto' gap={10}>
            <Coments />
            <Mearch />
          </Flex>
        </Box>

    </Box>
  )
}

export default MainLayout