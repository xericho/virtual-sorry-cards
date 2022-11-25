
const sorryDict = {
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

const sorryConfig = {
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

const initSorryDeck = () => {
    const deck = []
    for (const [key, value] of Object.entries(sorryConfig)) {
        for(let i=0; i < value; i++) {
            deck.push({'type': key, 'description': sorryDict[key]})
        }
    }
    return deck
}

export const sorryDeck = initSorryDeck()
