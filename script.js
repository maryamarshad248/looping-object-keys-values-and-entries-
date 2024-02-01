'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelievery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`order Received! ${this.starterMenu[starterIndex]} and
    ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient, otherIngredient);
  },
};

// properties name:
const properties = Object.keys(openingHours);
console.log(properties);
console.log(`we are open at ${properties.length} days`);

let openStr = `we are open at ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);
for (const day of Object.keys(openingHours)) {
  console.log(day);
}

// values

const values = Object.values(openingHours);
console.log(values);

// entries
const entries = Object.entries(openingHours);
console.log(entries);
for (const x of entries) {
  console.log(x);
}
// foe [key and values]
for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we are open at ${open} and we are close at ${close}`);
}
