// const deckOfCards = require('./deck.js');

const deck = [
  // Hearts
  { suit: 'Hearts', rank: 'A', value: 1 },
  { suit: 'Hearts', rank: '2', value: 2 },
  { suit: 'Hearts', rank: '3', value: 3 },
  { suit: 'Hearts', rank: '4', value: 4 },
  { suit: 'Hearts', rank: '5', value: 5 },
  { suit: 'Hearts', rank: '6', value: 6 },
  { suit: 'Hearts', rank: '7', value: 7 },
  { suit: 'Hearts', rank: '8', value: 8 },
  { suit: 'Hearts', rank: '9', value: 9 },
  { suit: 'Hearts', rank: '10', value: 10 },
  { suit: 'Hearts', rank: 'J', value: 11 },
  { suit: 'Hearts', rank: 'Q', value: 12 },
  { suit: 'Hearts', rank: 'K', value: 13 },

  // Diamonds
  { suit: 'Diamonds', rank: 'A', value: 1 },
  { suit: 'Diamonds', rank: '2', value: 2 },
  { suit: 'Diamonds', rank: '3', value: 3 },
  { suit: 'Diamonds', rank: '4', value: 4 },
  { suit: 'Diamonds', rank: '5', value: 5 },
  { suit: 'Diamonds', rank: '6', value: 6 },
  { suit: 'Diamonds', rank: '7', value: 7 },
  { suit: 'Diamonds', rank: '8', value: 8 },
  { suit: 'Diamonds', rank: '9', value: 9 },
  { suit: 'Diamonds', rank: '10', value: 10 },
  { suit: 'Diamonds', rank: 'J', value: 11 },
  { suit: 'Diamonds', rank: 'Q', value: 12 },
  { suit: 'Diamonds', rank: 'K', value: 13 },

  // Clubs
  { suit: 'Clubs', rank: 'A', value: 1 },
  { suit: 'Clubs', rank: '2', value: 2 },
  { suit: 'Clubs', rank: '3', value: 3 },
  { suit: 'Clubs', rank: '4', value: 4 },
  { suit: 'Clubs', rank: '5', value: 5 },
  { suit: 'Clubs', rank: '6', value: 6 },
  { suit: 'Clubs', rank: '7', value: 7 },
  { suit: 'Clubs', rank: '8', value: 8 },
  { suit: 'Clubs', rank: '9', value: 9 },
  { suit: 'Clubs', rank: '10', value: 10 },
  { suit: 'Clubs', rank: 'J', value: 11 },
  { suit: 'Clubs', rank: 'Q', value: 12 },
  { suit: 'Clubs', rank: 'K', value: 13 },

  // Spades
  { suit: 'Spades', rank: 'A', value: 1 },
  { suit: 'Spades', rank: '2', value: 2 },
  { suit: 'Spades', rank: '3', value: 3 },
  { suit: 'Spades', rank: '4', value: 4 },
  { suit: 'Spades', rank: '5', value: 5 },
  { suit: 'Spades', rank: '6', value: 6 },
  { suit: 'Spades', rank: '7', value: 7 },
  { suit: 'Spades', rank: '8', value: 8 },
  { suit: 'Spades', rank: '9', value: 9 },
  { suit: 'Spades', rank: '10', value: 10 },
  { suit: 'Spades', rank: 'J', value: 11 },
  { suit: 'Spades', rank: 'Q', value: 12 },
  { suit: 'Spades', rank: 'K', value: 13 }
]

const dealtCards = []

const randomizeCard = () => {
    const cards = {
        ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
        suits: ['Hearts', 'Diamonds', 'Clubs', 'Spades'],
    }

    const rankIdx = Math.round(Math.random() * 12)
    const suitIdx = Math.round(Math.random() * 3);

    const thisCard = {};
    thisCard.rank = cards.ranks[rankIdx]; 
    thisCard.suit = cards.suits[suitIdx];

    // console.log(thisCard)
    return thisCard
}

const dealCard = () => {

    const thisCard = randomizeCard()
    console.log(thisCard)

    let keepGoing = false

    do {
        // get card from deck
        for (const card of deck) {
            if (card.suit === thisCard.suit && card.rank === thisCard.rank) {
                console.log('found it')

                // found the card in the deck
                for (const dealtCard of dealtCards) {
                    // the card has already been dealt
                    console.log('already dealt')
                    if (dealtCard.suit === thisCard.suit && dealtCard.rank === thisCard.rank) {
                        // randomly choose another card
                        console.log('card already dealt')
                        thisCard = randomizeCard()
                        keepGoing = true

                    } else {
                        console.log('card found first time')
                        console.log(thisCard)
                        return thisCard
                    }
                }
            }
        }

    } while (keepGoing)

    // check if card has been dealt

    
   
}

const showCard = dealCard()
console.log(showCard)


// dealtCards.push(card)