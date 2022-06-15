//Step 1

// class Pizza {
//   constructor() {
//     this.toppings = ['cheese'];
//   }
//   addTopping(topping) {
//     this.toppings.push(topping);
//   }
// }

// let pizza1 = new Pizza();
// console.log(pizza1.toppings); // ["cheese"]
// pizza1.addTopping('mushrooms');
// pizza1.addTopping('peppers');
// console.log(pizza1.toppings); // ["cheese", "mushrooms", "peppers"]

// let pizza2 = new Pizza();
// console.log(pizza2.toppings); // ["cheese"]
// pizza2.addTopping('more cheese');
// console.log(pizza2.toppings); // ["cheese", "more cheese"];

//Step 2

// class Pizza {
//   constructor() {
//     this.toppings = ['cheese'];
//   }
//   addTopping(topping) {
//     this.toppings.push(topping);
//   }
//   bake() {
//     console.log('🍕 on 🔥');
//     setTimeout(() => {
//       console.log('🍕 ready to go!');
//     }, 1000);
//   }
// }

// let pizza1 = new Pizza();
// pizza1.bake();

// Step 3

class Pizza {
  constructor(size, type) {
    this.toppings = ['cheese', 'pizza sauce'];
    this.size = size;
    this.type = type;
  }
  set size(size) {
    this._size = size;
  }
  get size() {
    return this._size;
  }

  addToppings(toppings) {
    return new Promise(
      (resolve) => {
        let i = 0;
        toppings.forEach((topping) => {
          setTimeout(() => {
            console.log(`Adding ${topping}....`);
            this.toppings.push(topping);
          }, 500 * i);
          i++;
        });
        resolve(i);
      },
      (err) => console.log(err)
    );
  }
  bake() {
    console.log('🍕 on 🔥');
    setTimeout(() => {
      console.log('🍕 ready to go!');
    }, 2000);
  }
}

let pizza1 = new Pizza('large', 'veggie');
// let toppings = ['tomato', 'olives', 'spinach', 'pinapple'];
// pizza1.addToppings(toppings).then((i) => {
//   setTimeout(() => {
//     pizza1.bake();
//   }, 500 * (i + 1));
// });

// pizza1.size = 'm';
// console.log(pizza1.size);
// pizza1._size = 'l'; // bad practice
// console.log(pizza1.size);

// const obj = {};

// function createObj() {
//   const obj = {};
//   return obj;
// }

// function Obj() {}

// class Obj {}
// const obj2 = new Obj();

// const obj3 = new Obj();
