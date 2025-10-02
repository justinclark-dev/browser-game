const deck = [
  { suit: 'Hearts', rank: 'A', value: 11 },
  { suit: 'Hearts', rank: '2', value: 2 },
  { suit: 'Hearts', rank: '3', value: 3 },
  { suit: 'Hearts', rank: '4', value: 4 },
  { suit: 'Hearts', rank: '5', value: 5 },
  { suit: 'Hearts', rank: '6', value: 6 },
  { suit: 'Hearts', rank: '7', value: 7 },
  { suit: 'Hearts', rank: '8', value: 8 },
  { suit: 'Hearts', rank: '9', value: 9 },
  { suit: 'Hearts', rank: '10', value: 10 },
  { suit: 'Hearts', rank: 'J', value: 10 },
  { suit: 'Hearts', rank: 'Q', value: 10 },
  { suit: 'Hearts', rank: 'K', value: 10 },
  { suit: 'Diamonds', rank: 'A', value: 11 },
  { suit: 'Diamonds', rank: '2', value: 2 },
  { suit: 'Diamonds', rank: '3', value: 3 },
  { suit: 'Diamonds', rank: '4', value: 4 },
  { suit: 'Diamonds', rank: '5', value: 5 },
  { suit: 'Diamonds', rank: '6', value: 6 },
  { suit: 'Diamonds', rank: '7', value: 7 },
  { suit: 'Diamonds', rank: '8', value: 8 },
  { suit: 'Diamonds', rank: '9', value: 9 },
  { suit: 'Diamonds', rank: '10', value: 10 },
  { suit: 'Diamonds', rank: 'J', value: 10 },
  { suit: 'Diamonds', rank: 'Q', value: 10 },
  { suit: 'Diamonds', rank: 'K', value: 10 },
  { suit: 'Clubs', rank: 'A', value: 11 },
  { suit: 'Clubs', rank: '2', value: 2 },
  { suit: 'Clubs', rank: '3', value: 3 },
  { suit: 'Clubs', rank: '4', value: 4 },
  { suit: 'Clubs', rank: '5', value: 5 },
  { suit: 'Clubs', rank: '6', value: 6 },
  { suit: 'Clubs', rank: '7', value: 7 },
  { suit: 'Clubs', rank: '8', value: 8 },
  { suit: 'Clubs', rank: '9', value: 9 },
  { suit: 'Clubs', rank: '10', value: 10 },
  { suit: 'Clubs', rank: 'J', value: 10 },
  { suit: 'Clubs', rank: 'Q', value: 10 },
  { suit: 'Clubs', rank: 'K', value: 10 },
  { suit: 'Spades', rank: 'A', value: 11 },
  { suit: 'Spades', rank: '2', value: 2 },
  { suit: 'Spades', rank: '3', value: 3 },
  { suit: 'Spades', rank: '4', value: 4 },
  { suit: 'Spades', rank: '5', value: 5 },
  { suit: 'Spades', rank: '6', value: 6 },
  { suit: 'Spades', rank: '7', value: 7 },
  { suit: 'Spades', rank: '8', value: 8 },
  { suit: 'Spades', rank: '9', value: 9 },
  { suit: 'Spades', rank: '10', value: 10 },
  { suit: 'Spades', rank: 'J', value: 10 },
  { suit: 'Spades', rank: 'Q', value: 10 },
  { suit: 'Spades', rank: 'K', value: 10 }
]

const dealtCards = []

const randomizeCard = () => {
  const cards = {
    ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
    suits: ['Hearts', 'Diamonds', 'Clubs', 'Spades'],
  }
  const rankIdx = Math.floor(Math.random() * cards.ranks.length)
  const suitIdx = Math.floor(Math.random() * cards.suits.length)
  const thisCard = {}
  thisCard.rank = cards.ranks[rankIdx]
  thisCard.suit = cards.suits[suitIdx]
  return thisCard
}
const dealCard = () => {
  while (true) {
    const pick = randomizeCard()
    const card = deck.find(c => c.suit === pick.suit && c.rank === pick.rank)
    const alreadyDealt = dealtCards.some(dc => dc.suit === card.suit && dc.rank === card.rank)
    if (!alreadyDealt) {
      dealtCards.push(card)
      return card
    }
  }
}
const dealHand = () => {
  const playerHand = [dealCard(), dealCard()]
  const dealerHand = [dealCard(), dealCard()]
  return { playerHand, dealerHand }
}
const { playerHand, dealerHand } = dealHand()
console.log("Player's hand:")
playerHand.forEach(c => console.log(`${c.rank} of ${c.suit}`))
console.log("Dealer's hand:")

dealerHand.forEach(c => cconst deck = [
  { suit: 'Hearts', rank: 'A', value: 11 },
  { suit: 'Hearts', rank: '2', value: 2 },
  { suit: 'Hearts', rank: '3', value: 3 },
  { suit: 'Hearts', rank: '4', value: 4 },
  { suit: 'Hearts', rank: '5', value: 5 },
  { suit: 'Hearts', rank: '6', value: 6 },
  { suit: 'Hearts', rank: '7', value: 7 },
  { suit: 'Hearts', rank: '8', value: 8 },
  { suit: 'Hearts', rank: '9', value: 9 },
  { suit: 'Hearts', rank: '10', value: 10 },
  { suit: 'Hearts', rank: 'J', value: 10 },
  { suit: 'Hearts', rank: 'Q', value: 10 },
  { suit: 'Hearts', rank: 'K', value: 10 },
  { suit: 'Diamonds', rank: 'A', value: 11 },
  { suit: 'Diamonds', rank: '2', value: 2 },
  { suit: 'Diamonds', rank: '3', value: 3 },
  { suit: 'Diamonds', rank: '4', value: 4 },
  { suit: 'Diamonds', rank: '5', value: 5 },
  { suit: 'Diamonds', rank: '6', value: 6 },
  { suit: 'Diamonds', rank: '7', value: 7 },
  { suit: 'Diamonds', rank: '8', value: 8 },
  { suit: 'Diamonds', rank: '9', value: 9 },
  { suit: 'Diamonds', rank: '10', value: 10 },
  { suit: 'Diamonds', rank: 'J', value: 10 },
  { suit: 'Diamonds', rank: 'Q', value: 10 },
  { suit: 'Diamonds', rank: 'K', value: 10 },
  { suit: 'Clubs', rank: 'A', value: 11 },
  { suit: 'Clubs', rank: '2', value: 2 },
  { suit: 'Clubs', rank: '3', value: 3 },
  { suit: 'Clubs', rank: '4', value: 4 },
  { suit: 'Clubs', rank: '5', value: 5 },
  { suit: 'Clubs', rank: '6', value: 6 },
  { suit: 'Clubs', rank: '7', value: 7 },
  { suit: 'Clubs', rank: '8', value: 8 },
  { suit: 'Clubs', rank: '9', value: 9 },
  { suit: 'Clubs', rank: '10', value: 10 },
  { suit: 'Clubs', rank: 'J', value: 10 },
  { suit: 'Clubs', rank: 'Q', value: 10 },
  { suit: 'Clubs', rank: 'K', value: 10 },
  { suit: 'Spades', rank: 'A', value: 11 },
  { suit: 'Spades', rank: '2', value: 2 },
  { suit: 'Spades', rank: '3', value: 3 },
  { suit: 'Spades', rank: '4', value: 4 },
  { suit: 'Spades', rank: '5', value: 5 },
  { suit: 'Spades', rank: '6', value: 6 },
  { suit: 'Spades', rank: '7', value: 7 },
  { suit: 'Spades', rank: '8', value: 8 },
  { suit: 'Spades', rank: '9', value: 9 },
  { suit: 'Spades', rank: '10', value: 10 },
  { suit: 'Spades', rank: 'J', value: 10 },
  { suit: 'Spades', rank: 'Q', value: 10 },
  { suit: 'Spades', rank: 'K', value: 10 }
]
const dealtCards = []
const randomizeCard = () => {
  const cards = {
    ranks: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
    suits: ['Hearts', 'Diamonds', 'Clubs', 'Spades'],
  }
  const rankIdx = Math.floor(Math.random() * cards.ranks.length)
  const suitIdx = Math.floor(Math.random() * cards.suits.length)
  const thisCard = {}
  thisCard.rank = cards.ranks[rankIdx]
  thisCard.suit = cards.suits[suitIdx]
  return thisCard
}
const dealCard = () => {
  while (true) {
    const pick = randomizeCard()
    const card = deck.find(c => c.suit === pick.suit && c.rank === pick.rank)
    const alreadyDealt = dealtCards.some(dc => dc.suit === card.suit && dc.rank === card.rank)
    if (!alreadyDealt) {
      dealtCards.push(card)
      return card
    }
  }
}
const dealHand = () => {
  const playerHand = [dealCard(), dealCard()]
  const dealerHand = [dealCard(), dealCard()]
  return { playerHand, dealerHand }
}
const { playerHand, dealerHand } = dealHand()
console.log("Player's hand:")
playerHand.forEach(c => console.log(`${c.rank} of ${c.suit}`))
console.log("Dealer's hand:")
dealerHand.forEach(c => console.log(`${c.rank} of ${c.suit}`))
console.log(`${c.rank} of ${c.suit}`))


