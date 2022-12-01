import { useEffect, useState } from 'react'
import {
  Image,
  Tag,
  Flex,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import StartSvg from '../assets/start.svg'
import {
    buildSorryDeck,
    shuffleDeck,
    sorryImgs,
    sorryImgsDark
} from "./sorryConfig.js"

let drawPile = buildSorryDeck()
drawPile = shuffleDeck(drawPile)

export const CardDeck = ({ reset, discardPile, setDiscardPile }) => {
    const [card, setCard] = useState(null)
    const [tagText, setTagText] = useState(`${drawPile.length} cards left`)

    const drawCard = () => {
        if(drawPile.length === 0) {
            drawPile = buildSorryDeck()
            drawPile = shuffleDeck(drawPile)
        }
        const card = drawPile.pop()
        setCard(card)
        setDiscardPile([card, ...discardPile])
        setTagText(`${drawPile.length} cards left`)
    }

    useEffect(() => {
        drawPile = buildSorryDeck()
        drawPile = shuffleDeck(drawPile)
        setCard(null)
        setDiscardPile([])
        setTagText(`${drawPile.length} cards left`)
    }, [reset])

    const rotateText = { transform: 'rotate(180deg)' }

    let cardImg = useColorModeValue(sorryImgs[card], sorryImgsDark[card])

  return (
    <Flex
      minH={'70vh'}
      align={'center'}
      justify={'center'}
      >
      <Stack
        w={'500px'}
        onClick={drawCard}
        cursor={'pointer'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.100', 'gray.900')}
        rounded={'xl'}
        spacing={8}
      >
        <Stack align={'center'} spacing={2}>
          <Stack py={2}>
            <Tag>{tagText}</Tag>
          </Stack>

          {card
              ? <Image src={cardImg} alt={card} maxHeight={'500px'} m={0}
                  boxShadow={'0px 0px 40px 10px rgba(0, 0, 0, 0.30)'} borderRadius="1.5rem" />
              : <Image src={StartSvg} alt={'Start'} maxHeight={'20rem'} m={0}
                boxShadow={'0px 0px 40px 10px rgba(0, 0, 0, 0.30)'} borderRadius="full" />
          }

          <Stack py={2}>
            <Tag style={rotateText}>{tagText}</Tag>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
}

