import { Box, Flex, Text } from '@chakra-ui/react'
import { Link, useLocation, useParams } from 'react-router-dom'

const Navbar = () => {

  const location = useLocation()

  // const lc = location.pathname.slice('/')
  


  return (
    <Flex  h='84px' justifyContent='space-around' alignItems='center' borderBottom='1px' borderColor='#717673' mb='10'>

        <Box _after={location.pathname !== '/organic' && location.pathname !== '/beatz' ? { content: '" "',  height: '2px', w: '100%', bg: 'white', display: 'block' } : ''} h='79px' px={{sm: 2, md: 4, xl: 8}} >
          <Flex h='100%'   direction='column'  justifyContent='center' px={6}> 
              <Link to='/'  >
                <Text fontSize='md' as='h2' textAlign='center' letterSpacing='wide' fontWeight='500'>CLASSIC</Text>
                <Text fontSize='xs' fontWeight='500'>Soul - Funk - Disco - Hip-Hop and all Jazz</Text>
              </Link> 
          </Flex>
        </Box>

        <Box 
        _after={location.pathname === '/organic' ? { content: '" "',  height: '2px', w: '100%', bg: 'white', display: 'block' } : ''} h='79px' px={{sm: 2, md: 4, xl: 8}} 
        // _hover={{content: '" "',  height: '2px', bg: 'white', display: 'block'}}
        >
          <Flex h='100%'   direction='column'  justifyContent='center' px={6}> 
              <Link to='/organic'  >
                <Text fontSize='md' as='h2' textAlign='center' letterSpacing='wide' fontWeight='500'>ORGANIC</Text>
                <Text fontSize='xs' fontWeight='500'>Mosty organic Soul- Funk - Disco - Jazz</Text>
              </Link> 
          </Flex>
        </Box>

        <Box _after={location.pathname === '/beatz' ? { content: '" "',  height: '2px', w: '100%', bg: 'white', display: 'block' } : ''} h='79px' px={{sm: 2, md: 4, xl: 8}} >
          <Flex h='100%'   direction='column'  justifyContent='center' px={6}> 
            <Link to='/beatz'  >
              <Text fontSize='md' as='h2' textAlign='center' letterSpacing='wide' fontWeight='500'>BEATZ</Text>
              <Text fontSize='xs' fontWeight='500'>Dusty, smoke beats to zone out and chill</Text>
            </Link> 
          </Flex>
        </Box>

    </Flex>
  )
}

export default Navbar