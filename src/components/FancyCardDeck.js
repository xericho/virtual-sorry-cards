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
} from "./sorryConfig.js"
import { Card } from './Card.js'


let drawPile = buildSorryDeck()
drawPile = shuffleDeck(drawPile)

export const FancyCardDeck = ({ reset, discardPile, setDiscardPile }) => {
    const [card, setCard] = useState(null)
    const [tagText, setTagText] = useState(``)

    const drawCard = () => {
        if(drawPile.length === 0) {
            drawPile = buildSorryDeck()
            drawPile = shuffleDeck(drawPile)
        }
        const card = drawPile.pop()
        setCard(card)
        setDiscardPile([...discardPile, card])
        setTagText(`${drawPile.length} cards left`)
    }

    useEffect(() => {
        drawPile = buildSorryDeck()
        drawPile = shuffleDeck(drawPile)
        setCard(null)
        setDiscardPile([])
        setTagText(``)
    }, [reset])

    const rotateText = { transform: 'rotate(180deg)' }

    const cards = discardPile.map((cardIdx, i) => <Card cardIdx={cardIdx} key={i}/>)

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
          <Stack py={2} style={{ position: 'absolute', top: '8rem' }}>
            <Tag bg={''}>{tagText}</Tag>
          </Stack>

          {card
              ? cards.slice(-2)
              : <Image src={StartSvg} alt={'Start'} maxHeight={'20rem'} style={{ position: 'absolute', margin: 'auto', top: 0, bottom: 0 }}
                boxShadow={'0px 0px 40px 10px rgba(0, 0, 0, 0.30)'} borderRadius="full" />
          }

          <Stack py={2} style={{ position: 'absolute', bottom: '8rem' }}>
            <Tag bg={''} style={rotateText}>{tagText}</Tag>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
}

