import { Box, Flex, HStack, VStack, List, ListItem, UnorderedList, Image, Text } from '@chakra-ui/react'
import usePlayedHistory from "../store/playedHistory";
import useCurrentSong from "../store/currentSong";

const Playlist = () => {

  const { historyData } = usePlayedHistory((state) => ({
    historyData: state.historyData
  }))

  const { currentSongData } = useCurrentSong((state) => ({
    currentSongData: state.currentSongData
  }))


  return (
    <Flex  direction="column" zIndex="10" bg="#0000002d" p='25px' h={{sm: '640px'}}>

      {/* Current song that is playing */}
      <Text mb='15px' textTransform='uppercase' >Now Playing</Text>
      <Flex mb='30px' mr='60px'>
        <Image w='30px' h='30px'  src={currentSongData.song.cover}/>
        <Text ml='10px' fontSize='15px'>{currentSongData.song.artist} - {currentSongData.song.title}</Text>
      </Flex>


      {/* Played Songs history */}
      <Text mb='15px' textTransform='uppercase' >Previously played</Text>
      <UnorderedList m='0' overflowY='scroll' className='custom-scrollbar'>
        {
          historyData.map((single, idx) => {
            return(
              <Flex key={idx} mb='15px' mr='60px'>
                <Image w='30px' h='30px'  src={single.songInfo.cover}/>
                <ListItem ml='10px' listStyleType='none' fontSize='15px'>{single.songInfo.artist} - {single.songInfo.title}</ListItem>
              </Flex>
            )
          })
        }
      </UnorderedList>

    </Flex>
  )
}

export default Playlist