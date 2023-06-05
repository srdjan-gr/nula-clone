import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { Box } from '@chakra-ui/react'

const MainLayout = () => {

  const location = useLocation()

  return (
    <Box 
      bgImage={location.pathname === '/organic' ? "url('../public/img/organic.jpg')" : location.pathname === '/beatz' ? "url('../public/img/beatz.jpg')" : "url('../public/img/classic.jpg')"}
      color='white'
      bgSize='cover'
    >
        <Navbar/>
        <Outlet />
    </Box>
  )
}

export default MainLayout