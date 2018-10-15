const getRandomInt = require('./random');
const clashRoyaleCards = require('./clash-royale-cards.json');

class SeeClashRoyale {
  getRandomCard() {
    const cardsLength = clashRoyaleCards.cards.length;
    const randomCard = getRandomInt(cardsLength)
    return clashRoyaleCards.cards[randomCard];
  }
}

module.exports = SeeClashRoyale;