import { useEffect, useState } from 'react'
import {
  Image,
  Text,
  Tag,
  Flex,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import StartSvg from '../assets/start.svg'
import { buildSorryDeck, shuffleDeck } from "./sorryConfig.js"
import { FancyCardDeck } from './FancyCardDeck';

let drawPile = buildSorryDeck()
drawPile = shuffleDeck(drawPile)

export const CardDeck = ({ reset, discardPile, setDiscardPile, shuffle }) => {
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

    useEffect(() => {
        drawPile = shuffleDeck(drawPile)
    }, [shuffle])

    const rotateStyle = { transform: 'rotate(180deg)' }

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
            <Tag style={rotateStyle}>{tagText}</Tag>
          </Stack>

          {card
              ? card.img
              : <Image src={StartSvg} alt={'Start'} maxHeight={'20rem'} m={0}
                boxShadow={'0px 0px 40px 10px rgba(0, 0, 0, 0.30)'} borderRadius="10rem" />
          }

          <Stack py={2}>
            <Tag >{tagText}</Tag>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
}

