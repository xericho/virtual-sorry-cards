import { useEffect, useState } from 'react'
import {
  Divider,
  Tag,
  Flex,
  Stack,
  Heading,
  Text,
  Button,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FiArrowRight,
} from 'react-icons/fi';
import { Dealer, standardDeck } from "card-dealer";
import { sorryDeck } from "./config.js"


let dealer = new Dealer(sorryDeck);
dealer.shuffle()

export const CardDeck = ({ reset }) => {
    const [card, setCard] = useState(null)
    const [cardsLeft, setCardsLeft] = useState(dealer.remainingCards())
    const [headerText, setHeaderText] = useState(null)
    const [bodyText, setBodyText] = useState("Please draw a card")
    const [tagText, setTagText] = useState(`${dealer.remainingCards()} cards left`)

    const drawCard = () => {
        if(dealer.remainingCards() == 0) {
            dealer = new Dealer(sorryDeck);
            dealer.shuffle()
        }
        const card = dealer.draw(1)[0]
        setCard(card)
        setCardsLeft(dealer.remainingCards())
        setHeaderText(card.type)
        setBodyText(card.description)
        setTagText(`${dealer.remainingCards()} cards left`)
        console.log(card)
    }

    useEffect(() => {
        console.log('Resetting cards...')
        dealer = new Dealer(sorryDeck);
        dealer.shuffle()
        setHeaderText(null)
        setBodyText("Please draw a card")
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
        px={10}
        spacing={8}
        align={'center'}>
        <Stack align={'center'} spacing={2}>
          <Stack pt={2}>
            <Tag style={rotateStyle}>{tagText}</Tag>
          </Stack>
          <Text fontSize={'xl'} color={'gray.500'} style={rotateStyle} py={8}>
            {bodyText}
          </Text>
          <Heading
            pt={3}
            style={{ transform: 'rotate(180deg)' }}
            textTransform={'uppercase'}
            fontSize={'4xl'}
            color={useColorModeValue('gray.800', 'gray.200')}>
            {headerText}
          </Heading>
        </Stack>
        <Divider />
        <Stack align={'center'}>
          <Heading
            pt={3}
            textTransform={'uppercase'}
            fontSize={'4xl'}
            color={useColorModeValue('gray.800', 'gray.200')}>
            {headerText}
          </Heading>
          <Text fontSize={'xl'} color={'gray.500'} py={8}>
            {bodyText}
          </Text>
          <Stack pb={2}>
            <Tag >{tagText}</Tag>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
}

