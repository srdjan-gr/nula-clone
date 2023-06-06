import { Flex } from '@chakra-ui/react'

import Player from '../Components/Player'
import Playlist from '../Components/Playlist'


const Organic = () => {
  return (
    <Flex h='90vh' justifyContent='space-around' pb={10}>
      <Player/>
      <Playlist/>
   </Flex>
  )
}

export default Organic