# Introduction to Inheritance

As we start to create different types of objects, inevitably we start to notice some code duplication.

Here is one such example.

## The Duplication Problem

```js
class Student {
  // this constructor is identical to that of a instructor!
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  // here is a method that is specific to students
  enroll(cohort) {
    this.cohort = cohort;
  }

  // identical! Smells of code duplication
  bio() {
    return;
    `My name is ${this.name}.\n 
    Here's my quirky fact: ${this.quirkyFact}`;
  }
}

class Instructor {
  // this constructor is identical to that of a student!
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  // specific to instructors
  goOnShift() {
    this.onShift = true;
  }

  // specific to instructors
  goOffShift() {
    this.onShift = false;
  }

  // identical! Smells of code duplication
  bio() {
    return `My name is ${this.name}.\n 
    Here's my quirky fact: ${this.quirkyFact}`;
  }
}
```

Here, the Student and Instructor classes have identical constructor and bio methods. They also share some properties (name and quirkyFact) but not all of them. We have two classes that share the same behaviour and state information.

## A Solution with Inheritance

Perhaps we could remove this duplication by moving the shared code from two classes into yet another class. We are going to use a technique in OOP known as inheritance.

With inheritance, we can build a new class based on an existing class. In this scenario, we will call this new class Person since both instructors and students share things common to all people. It will contain all the similar code.

```js
// This class represents all that is common between Student and Instructor
class Person {
  // moved here b/c it was identical
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }

  // moved here b/c it was identical
  bio() {
    return `My name is ${this.name}.\n
    Here's my quirky fact: ${this.quirkyFact}`;
  }
}

class Student extends Person {
  // stays in Student class since it's specific to students only
  enroll(cohort) {
    this.cohort = cohort;
  }
}

class Instructor extends Person {
  // specific to instructors
  goOnShift() {
    this.onShift = true;
  }

  // specific to instructors
  goOffShift() {
    this.onShift = false;
  }
}
```

Now there is a general Person class that contains the shared code. Student and Instructor inherit behaviour and state information from Person using the keyword extends. They also have their own code that reflects behaviour and information only pertaining to themselves.

Student and Instructor are subclasses of the Person class, since they are extensions of that class. Person is the superclass in this relationship.

## Conclusion

You learned about using inheritance to reduce duplicate code. You became familiar with how to create a subclass of another class using the _extends_ keyword. This gives the subclass all the state and behavior of the class it inherits from, its superclass.
