const obj = {};

function Person(name, from) {
  this.name = name;
  this.from = from;
  this.greeting = function () {
    return `Hi, my name is ${this.name} and I am from ${this.from}.`;
  };
}
// const person1 = new Person();
// const person2 = new Person('Helena', 'Brazil');

// console.log(person1);
// console.log(person2);
// console.log(Person);

class Person2 {
  constructor(name, from) {
    this.name = name;
    this._from = from;
  }
  get from() {
    return this._from;
  }
  set from(from) {
    this._from = from;
  }
}

const person = new Person2('Me', 'Here');
console.log(person.from);
person.from = 'There';
console.log(person.from);
