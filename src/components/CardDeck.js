import { useEffect, useState, useRef } from 'react'
import {
  Text,
  Tag,
  Flex,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { TinderLikeCard } from 'react-stack-cards'
import { buildSorryDeck, shuffleDeck } from "./sorryConfig.js"

let drawPile = buildSorryDeck()
drawPile = shuffleDeck(drawPile)

export const CardDeck = ({ reset, discardPile, setDiscardPile }) => {
    const [card, setCard] = useState(null)
    const [tagText, setTagText] = useState(`${drawPile.length} cards left`)
    const tinder = useRef(null);
    const arr = ["first", "second", "third", "fourth"]
    const numbers = [0, 1, 2, 3]
    const onTinderSwipe = (t) => {
      t.swipe()
    }

    const drawCard = () => {
        if(drawPile.length === 0) {
            drawPile = buildSorryDeck()
            drawPile = shuffleDeck(drawPile)
        }
        const card = drawPile.pop()
        setCard(card)
        setDiscardPile([card, ...discardPile])
        setTagText(`${drawPile.length} cards left`)
        console.log(card)
    }

    useEffect(() => {
        console.log('Resetting cards...')
        drawPile = buildSorryDeck()
        drawPile = shuffleDeck(drawPile)
        setCard(null)
        setDiscardPile([])
        setTagText(`${drawPile.length} cards left`)
    }, [reset])

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
        boxShadow={'2xl'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        spacing={8}
      >
        <Stack align={'center'} spacing={2}>
          <Stack py={2}>
            <Tag style={rotateStyle}>{tagText}</Tag>
          </Stack>

          {card
              ? card.img
              : <Text fontSize={'xl'} color={'gray.500'} py={8}>Click to draw a card.</Text>
          }

          <Stack py={2}>
            <Tag >{tagText}</Tag>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
}

