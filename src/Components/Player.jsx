import { Box, Flex, Image, Input, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Text, keyframes  } from '@chakra-ui/react'
import { useState } from 'react'


const spin = keyframes`  
  from {transform: rotate(0deg);}   
  to {transform: rotate(360deg)} 
`;


const Player = () => {

  const [isPlaying, setIsPlaying] = useState(false)
  const recordRotate = `${spin} infinite 5s linear`;

  return (
    <Flex>
        {/* Player actions */}
        <Flex bg='black' opacity='0.60'  direction='column' zIndex='10'>
            <Image src='../public/img/logo-nula.png' alt='radio nula logo' h='50px' mt='40px'/>

            {/* <Flex mt='150px' justifyContent='center' direction='column'> */}

                {isPlaying ? (
                    <>
                        <Flex mt='150px' justifyContent='center' alignItems='center' gap='50px'>
                            <Flex justifyContent='center' alignItems='center' direction='column'>
                                <Image src='../public/img/nextnn.png' h='70px' cursor='pointer' />
                                <Text mt='15px' fontSize='xs'>NEXT CHANNEL</Text>
                            </Flex>
                            <Flex justifyContent='center' alignItems='center' direction='column'>
                                <Image src='../public/img/stop.png' h='70px' cursor='pointer' onClick={() => setIsPlaying(false)}/>
                                <Text mt='15px' fontSize='xs'>STOP</Text>
                            </Flex>
                        </Flex>

                        <RangeSlider aria-label={['min', 'max']} defaultValue={[0]} min={0} max={100} step={1} m='80px auto' w='80%' 
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
                        <Image src='../public/img/play.png' h='180px' w='180px' cursor='pointer' onClick={() => setIsPlaying(true)}/>
                    </Flex>
                )}
                
            {/* </Flex> */}
        </Flex>

        {/* Vinyl record */}
        <Flex  position='absolute' zIndex='5' alignItems='center' justifyContent='center'>
            <Image src='../public/img/vinyln.png' alt='radio nula logo' h='500px' my='60px' mx='90px'  animation={isPlaying ? recordRotate : ''}  />
        </Flex>
    </Flex>
  )
}

export default Player