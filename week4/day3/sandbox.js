const sushi = {
  ingredients: ['rice', 'seaweed', 'strawberry', 'nutella'],
  roll: function () {
    console.log('rolling and rolling');
  },
};

class Pokemon {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  attacks() {
    console.log(' 🔥 ');
  }
}

// pokemon.roll();
const char = new Pokemon('Charizard', 'fire');
sushi.__proto__ = char;
// char.__proto__ = sushi; cannot create cycles ERROR!!!!
sushi.attacks();
console.log(Pokemon.prototype);
Pokemon.prototype.eatSushi = function () {
  console.log('gross!');
};
sushi.eatSushi();
// sushi.evolve();
// asks sushi obj for evolve method
// ask sushi proto (char) for evolve method
// ask char proto (Object) for evolve method

console.log(Pokemon.prototype);

const arr = [];
const arr2 = new Array();
console.log(typeof Object);
