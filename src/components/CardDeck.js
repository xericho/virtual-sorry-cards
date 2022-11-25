import { useEffect, useState } from 'react'
import {
  Text,
  Tag,
  Flex,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { Dealer } from "card-dealer";
import { sorryDeck } from "./config.js"


let dealer = new Dealer(sorryDeck);
dealer.shuffle()

export const CardDeck = ({ reset }) => {
    const [card, setCard] = useState(null)
    const [cardsLeft, setCardsLeft] = useState(dealer.remainingCards())
    const [tagText, setTagText] = useState(`${dealer.remainingCards()} cards left`)

    const drawCard = () => {
        if(dealer.remainingCards() === 0) {
            dealer = new Dealer(sorryDeck);
            dealer.shuffle()
        }
        const card = dealer.draw(1)[0]
        setCard(card)
        setCardsLeft(dealer.remainingCards())
        setTagText(`${dealer.remainingCards()} cards left`)
        console.log(card)
    }

    useEffect(() => {
        console.log('Resetting cards...')
        dealer = new Dealer(sorryDeck);
        dealer.shuffle()
        setCard(null)
        setCardsLeft(dealer.remainingCards())
        setTagText(`${dealer.remainingCards()} cards left`)
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

