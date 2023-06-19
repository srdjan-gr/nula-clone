import { Box, Flex, Image, Input, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Text, keyframes  } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import {Howl, Howler} from 'howler';

import { songsData } from '../data';


const spin = keyframes`  
  from {transform: rotate(0deg);}   
  to {transform: rotate(360deg)} 
`;


const Player = () => {


    // const [songs, setSongs] = useState([]);

    // useEffect(() => {

    //     songsData.map(element => {
    //         setSongs([element.song])
    //     });
    // }, [])


  const [isPlaying, setIsPlaying] = useState(false)
  const recordRotate = `${spin} infinite 4s linear`;


  const [currentSong, setCurrentSong] = useState(songsData[3]);
  const [currentSongId, setCurrentSongId] = useState(null);

//   console.log(songs)

  let sound = new Howl({
    src: [currentSong.song],
    // autoplay: true,
    loop: true,
    html5: true,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });

// const playSound = (src) => {
//     const sound = new Howl ({
//         src,
//         html5: true
//     })
//     sound.play()
// }


  // PLayer options
  const playSong = () => {
    setIsPlaying(true)
    setCurrentSongId(currentSong.id)
    sound.play();
  }

  const pauseSong = () => {
    setIsPlaying(false)
    sound.pause();
  } 





  return (
    <Flex>
        {/* Player actions */}
        <Flex bg='black' opacity='0.60'  direction='column' zIndex='10'>
            <Image src='../public/img/logo-nula.png' alt='radio nula logo' h='50px' mt='40px'/>

            {/* <Flex mt='150px' justifyContent='center' direction='column'> */}
            {/* <Flex justifyContent='center' alignItems='center' direction='column'>
                                <Image src='../public/img/stop.png' h='70px' zIndex='20' cursor='pointer' onClick={() => sound.pause()}/>
                                <Text mt='15px' fontSize='xs'>STOP</Text>
                            </Flex> */}

                {isPlaying ? (
                    <>
                        <Flex mt='150px' justifyContent='center' alignItems='center' gap='50px'>
                            <Flex justifyContent='center' alignItems='center' direction='column'>
                                <Image src='../public/img/nextnn.png' h='70px' cursor='pointer' />
                                <Text mt='15px' fontSize='xs'>NEXT CHANNEL</Text>
                            </Flex>
                            <Flex justifyContent='center' alignItems='center' direction='column'>
                                <Image src='../public/img/stop.png' h='70px' zIndex='20' cursor='pointer' onClick={() => pauseSong()}/>
                                <Text mt='15px' fontSize='xs'>STOP</Text>
                            </Flex>
                        </Flex>

                        <RangeSlider aria-label={['min', 'max']} defaultValue={[50]} min={0} max={100} step={1} m='80px auto' w='80%' 
                            // onChangeEnd={(val) => console.log(val)}
                        >
                                
                            <RangeSliderTrack >
                                <RangeSliderFilledTrack bg='green.900'/>
                            </RangeSliderTrack  >
                            <RangeSliderThumb index={0} />
                        </RangeSlider>
                    </>
                ) : (
                    <Flex mt='150px' justifyContent='space-around' alignItems='center'>
                        <Image src='../public/img/play.png' h='180px' w='180px' cursor='pointer' onClick={() => playSong()}/>
                    </Flex>
                )}
                
            {/* </Flex> */}
        </Flex>

        {/* Vinyl record */}
        <Flex  position='absolute' zIndex='5' alignItems='center' justifyContent='center' >
            <Image src='../public/img/vinyln.png' alt='radio nula logo' h='500px' my='60px' mx='90px'   />
          
          
            {/* Image of current track that is playing */}
            {isPlaying ? ( <Image position='absolute' zIndex='6' src='../public/data/covers/bob-uprising.jpg' alt='radio nula logo' h='260px' w='260px'  borderRadius='50%'  animation={isPlaying ? recordRotate : ''}  />) : ''}

            <Box w='25px' h='25px' bg='black' borderRadius='50%' position='absolute' zIndex='7'></Box>
        </Flex>
    </Flex>
  )
}

export default Player