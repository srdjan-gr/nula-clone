import { Box, Flex, HStack, VStack } from '@chakra-ui/react'
import Player from '../Components/Player'
import Playlist from '../Components/Playlist'

const Home = () => {
  return (
    <Flex h='680px' justifyContent='space-around' pb={10}>
      <Player/>
      <Playlist/>
    </Flex>
  )
}

export default Home