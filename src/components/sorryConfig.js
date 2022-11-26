import card1_dark from '../assets/1_dark.svg'
import card2_dark from '../assets/2_dark.svg'
import card3_dark from '../assets/3_dark.svg'
import card4_dark from '../assets/4_dark.svg'
import card5_dark from '../assets/5_dark.svg'
import card7_dark from '../assets/7_dark.svg'
import card8_dark from '../assets/8_dark.svg'
import card10_dark from '../assets/10_dark.svg'
import card11_dark from '../assets/11_dark.svg'
import card12_dark from '../assets/12_dark.svg'
import cardsorry_dark from '../assets/sorry_dark.svg'
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


export const sorryDescriptions = {
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
    "Sorry?": "Move a pawn from your start area to take the place of another player's pawn, which must return to its own start area. Or move forward 4.",
}

export const sorryImgsDark = {
    1: card1_dark,
    2: card2_dark,
    3: card3_dark,
    4: card4_dark,
    5: card5_dark,
    7: card7_dark,
    8: card8_dark,
    10: card10_dark,
    11: card11_dark,
    12: card12_dark,
    "Sorry?": cardsorry_dark,
}

export const sorryImgs = {
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
    "Sorry?": cardsorry,
}

const sorryDistribution = {
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
    "Sorry?": 4,
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
    let deck = []
    for (const [key, value] of Object.entries(sorryDistribution)) {
        deck = [...deck, ...Array(value).fill(key)]
    }
    return shuffleDeck(deck)
}


