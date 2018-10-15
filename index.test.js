const assert = require('assert');
const SeeClashRoyale = require('./index');
const scr = new SeeClashRoyale();

const randomCard = scr.getRandomCard();
console.log(randomCard);
assert(Object.keys(randomCard).includes('name'));
assert(Object.keys(randomCard).includes('rarity'));
