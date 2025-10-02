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


////////////////////////////
const dealtCards = []
// { rank: '10', suit: 'Clubs' }


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

    let thisCard = randomizeCard()
    let keepGoing = false
    let hasCardBeenDealt = false
    let counter = 0

    do {
        // get card from deck
        for (const card of deck) {
            if (card.suit === thisCard.suit && card.rank === thisCard.rank) {
                counter++
                // should not push yet !!!!!!!!!    
                if (dealtCards.length === 0) {
                    dealtCards.push(card)
                }
            }
        }

        if (dealtCards.length > 0) {
            // found the card in the deck
            for (const dealtCard of dealtCards) {
                // the card has already been dealt
                if (dealtCard.suit === thisCard.suit && dealtCard.rank === thisCard.rank) {
                    // randomly choose another card
                    hasCardBeenDealt = true
                    thisCard = randomizeCard()
                    keepGoing = true

                } else {
                    dealtCards.push(thisCard)
                    return thisCard
                }
            }

        }


    } while (keepGoing)

}

const playerContainer = document.querySelector('#player')
const dealerContainer = document.querySelector('#dealer')
const playerTitle = document.querySelector('#player-title')
const dealerTitle = document.querySelector('#dealer-title')
const playerMessage = document.querySelector('#player-message')

const dealerHand = []
for (let i = 0; i < 2; i++) {
    dealerHand.push(dealCard())
}

const playerHand = []
for (let i = 0; i < 2; i++) {
    playerHand.push(dealCard())
}

const displayHand = (user, userCards) => {

    let dealerFirstCard

    if (user === 'dealer') {
        // only show the second card
        const div2 = document.createElement('div')
        div2.classList.add('card')
        div2.innerText = '???'
        dealerContainer.appendChild(div2)
    }

    for (const cardInHand of userCards) {
        const div = document.createElement('div')
        div.classList.add('card')

        if (cardInHand.suit === 'Hearts' || cardInHand.suit === 'Diamonds') {
            div.classList.add('suitColorRed')
        }

        div.innerHTML = `
            ${cardInHand.suit} ${cardInHand.rank}
        `
        if (user === 'player') {
            playerTitle.innerHTML = user
            playerContainer.appendChild(div)
        }
        if (user === 'dealer') {

            // only show the second card
            if (userCards.indexOf(cardInHand) !== 0) {
                dealerTitle.innerHTML = user
                dealerContainer.appendChild(div)
            }
        }
    }
}




///////////////////////////////////////////////////////
// game logic

//this function evaluates your hand, recieves array with card objs
function evaluateHand(hand) {
    let value = 0;
    let aces = 0;

    for (let card of hand) {
        if (card.rank === 'A') {
            aces += 1;
        } else if (['J', 'Q', 'K'].includes(card.rank)) {
            value += 10;
        } else {
            value += parseInt(card.rank);
        }
    }
    for (let i = 0; i < aces; i++) {
        if (value + 11 <= 21) {
            value += 11;
        } else {
            value += 1;
        }
    }
    return value;
}

const yesBtn = document.querySelector('#yes-btn')
const noBtn = document.querySelector('#no-btn')

let hit = ''



// const button = document.getElementById('myButton');
// button.addEventListener('click', function() {
//     console.log('Button clicked!');
// });

let dealerHandValue = 0
let playerHandValue = 0

// let continueGame = true
// while (continueGame) {



///////////////////////////////////////////////////////////////////////////
    const playerButtons = document.querySelector('.player-buttons')
    playerButtons.addEventListener('click', (event) => {
    
        console.log(event.target.innerText)

        if (event.target.innerText === 'Y') {
            console.log('Yes')
            hit = 'Y'
        }
        if (event.target.innerText === 'N') {
            hit = 'N'
        }

        console.log('.................'+hit)
    })
///////////////////////////////////////////////////////////////////////////




    // deal hands
    displayHand('player', playerHand)
    displayHand('dealer', dealerHand)

    //score hands
    dealerHandValue = evaluateHand(dealerHand)
    playerHandValue = evaluateHand(playerHand)

    // TESTING ONLY ////////////////////////////
    dealerHandValue = 20
    playerHandValue = 20
    // TESTING ONLY ////////////////////////////

    console.log(`dealerHandValue: ${dealerHandValue}`)
    console.log(`playerHandValue: ${playerHandValue}`)

    let continueRound = false 
    if (dealerHandValue === 21 && playerHandValue <21) {
        // dealer wins automatically
        console.log('dealer wins')

    } else if (dealerHandValue < 21 && playerHandValue === 21) {
        // play wins automatically 
        console.log('player wins')
    } else if (dealerHandValue === 21 && playerHandValue === 21) {
        // Game is a push (game is tied automatically)
        console.log('game is tied')
    } else {
        console.log('keep going')



        
        playerMessage.innerHTML = 'Do you want to hit? Y/N: '

        console.log('here')
        console.log(`hit...... ${hit}`)

        if (hit === 'Y') {

            playerHand.push(dealCard())
            displayHand('player', playerHand)
            playerHandValue = evaluateHand(playerHand);
            console.log(`playerHandValue: ${playerHandValue}`)
            
        } else if (hit === 'N') {

            console.log('play says no')
        }

        console.log(`hit...... ${hit}`)





    }
    console.log(`hit...... ${hit}`)

//     continueGame = false

// }