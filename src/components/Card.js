import React from 'react'
import {
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import {
    sorryImgs,
    sorryImgsDark
} from "./sorryConfig.js"
import 'animate.css'


export const Card = ({ cardIdx }) => {

    let transform = { position: 'absolute', margin: 'auto'}
    let cardImg = useColorModeValue(sorryImgs[cardIdx], sorryImgsDark[cardIdx])

    {/* boxShadow={'0px 0px 40px 10px rgba(0, 0, 0, 0.30)'} */}
    return (
        <Image src={cardImg} alt={cardIdx} maxHeight={'500px'} style={transform}
            className={'animate__animated animate__faster animate__rotateInDownLeft'}
            left={{ base: 0, md: 60 }}
            right={0}
            top={0}
            bottom={0}
            px={4}
            borderRadius="1.5rem" />
    )
}

