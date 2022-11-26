import {
  Image,
} from '@chakra-ui/react';
import card1 from '../assets/1.svg'
import card2 from '../assets/2.svg'
import card3 from '../assets/3.svg'
import card4 from '../assets/4.svg'
import card5 from '../assets/5.svg'
import card7 from '../assets/7.svg'
import card8 from '../assets/8.svg'
import card10 from '../assets/10.svg'
import card11 from '../assets/11.svg'
import card12 from '../assets/12.svg'
import cardsorry from '../assets/sorry.svg'


const sorryDescriptions = {
    1: "Move a pawn from START or if in play, move forward 1 space.",
    2: "Move a pawn from START or if in play, move forward 2 space.",
    3: "Move forward 3.",
    4: "Move backward 4.",
    5: "Move forward 5.",
    7: "Move forward 7 or split the move between two of your pawns.",
    8: "Move forward 8.",
    10: "Move forward 10 or move backward 1.",
    11: "Move forward 11 or change places with an opponent.",
    12: "Move forward 12.",
    "Sorry!": "Move a pawn from your start area to take the place of another player's pawn, which must return to its own start area. Or move forward 4.",
}

const sorryImgs = {
    1: card1,
    2: card2,
    3: card3,
    4: card4,
    5: card5,
    7: card7,
    8: card8,
    10: card10,
    11: card11,
    12: card12,
    "Sorry!": cardsorry,
}

const sorryDist = {
    1: 5,
    2: 4,
    3: 4,
    4: 4,
    5: 4,
    7: 4,
    8: 4,
    10: 4,
    11: 4,
    12: 4,
    "Sorry!": 4,
}


/*
 * Fisher-Yates shuffling algorithm
 */
export const shuffleDeck = (deck) => {
  for (let remaining = deck.length - 1; remaining > 0; remaining--) {
    const swap = Math.floor(Math.random() * (remaining + 1));
    [deck[remaining], deck[swap]] = [deck[swap], deck[remaining]];
  }
  return deck;
}


export const buildSorryDeck = () => {
    const deck = []
    for (const [key, value] of Object.entries(sorryDist)) {
        for(let i=0; i < value; i++) {
            deck.push({
                'type': key,
                'description': sorryDescriptions[key],
                'img': <Image src={sorryImgs[key]} alt={key} maxHeight={'500px'} m={0}
                        boxShadow={'0px 0px 40px 10px rgba(0, 0, 0, 0.30)'} borderRadius="1.5rem" />
            })
        }
    }
    return shuffleDeck(deck)
}


