class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  run() {
    console.log('vruuum!');
  }
}

class Animal {
  constructor(kind, color) {
    this.kind = kind;
    this.color = color;
  }
  eat() {
    console.log('yum!');
  }
}

const car1 = new Car('Ford', 'Mustang');
const animal1 = new Animal('dog', 'lilac');

// animal1.run();
animal1.prototype = {
  sleep: () => {
    console.log('zzzzz');
  },
  eat: () => {
    console.log('yum!');
  },
};
// console.log('animal proto', animal1.prototype);
car1.__proto__ = animal1;
console.log('car proto', Object.getOwnPropertyNames(car1.prototype));
console.log('car proto proto', Object.getOwnPropertyNames(Object.__proto__));
