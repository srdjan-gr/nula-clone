import { Box, Flex, HStack, VStack } from '@chakra-ui/react'
import Player from '../Components/Player'
import Playlist from '../Components/Playlist'

const Home = () => {
  return (
    <Flex justifyContent='center'>
      <Flex h='680px' w='1200px' pb={10} flexDir={{sm: 'column', md: 'column', lg: 'row'}} justifyContent='space-between'>
        <Player/>
        <Playlist/>
      </Flex>
    </Flex>
  )
}

export default Home