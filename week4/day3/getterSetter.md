# Getters and Setters

Getters and setters are special methods that are used to get the value of a property or set the value of a property.

```js
class Pizza {
  constructor() {
    this.toppings = ['cheese'];
  }
  addTopping(topping) {
    this.toppings.push(topping);
  }

  setSize(size) {
    this.size = size;
  }
  getSize() {
    return this.size;
  }
}

// DRIVER CODE
const pizza = new Pizza();
pizza.setSize('m');
pizza.getSize(); // m
```

This might seem kind of pointless. Why don't we just access pizza.size directly? There are many reasons you might want to use getters and setters in your app.

Let's go over two main reasons right now:

- Validating data before assigning it to a property
- Computing a value on the fly instead of simply pulling it out of a property

## Validating data

If our pizzas can only have one of the following sizes: 's', 'm', 'l'; then it would be bad if someone set the size of their pizza to '🤗' (man, I love emojis a bit too much, eh?). Using a setter method instead of setting the size property directly, we can have the object validate the value before it gets set.

```js
class Pizza {
  // ...

  // setSize now includes data validation
  setSize(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this.size = size;
    }
    // else we could throw an error, return false, etc.
    // We choose here to ignore all other values!
  }
}

// DRIVER CODE
let pizza = new Pizza();
pizza.setSize('s');
```

## Computed value

We could create a property to keep track of the price of a pizza. Every time the size or toppings change, we could just update this price property. But that involves constantly keeping track of the price. It would be easier to just compute the price of the pizza when it's needed.

```js
class Pizza {

    // ...

    getPrice() {
        const basePrice = 10;
        const toppingPrice = 2;
        return basePrice + (this.toppings.length \* toppingPrice);
    }
}

// DRIVER CODE
let pizza = new Pizza();
pizza.getPrice();
```

## A better way! get and set

Since the need for getters and setters is a very common use case in OOP, Javascript classes have special get and set keywords that we can use to implement getters and setters more easily. However, in order to make this work properly, we'll have to make sure we change the property we store the size into a different name from the setter. Otherwise we'll end up in an infitite loop where the setter calls this.size which then calls the setter ...

Check it out:

```js
class Pizza {
  // ...

  // replace our custom getters / setters with these ones!
  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + this.toppings.length * toppingPrice;
  }

  set size(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this._size = size;
    }
  }
}
let pizza = new Pizza();

pizza.price; // instead of getPrice()
pizza.size = 's'; // instead of setSize(size)
```

The only new things here are the get and set keywords in front of the getter and setter methods. The main difference we get from using these is that price and size will now be accessed as if they were value properties instead of method properties. This gives us a slightly nicer interface:

```js
let pizza = new Pizza();

pizza.price; // instead of getPrice()
pizza.size = 's'; // instead of setSize(size)
```

Wait... What? Is it a function or a value? It's both?! This may seem confusing at first because price and size are defined as functions, not values. Behind the scenes, The get and set syntax binds an object's property to a function that will be called when that value is looked up. Although not needed, often times it's nice to create an interface to a class's properties like this, where a method appears as a value. It creates a more simple interface that you or other developers are exposed to. Not all getter and setter methods have to be defined this way, though, and it really depends on our needs.

## Conclusion

We explored the concept of getters and setters and how to use the get and set keywords in JavaScript. Setters allow us to validate data before assigning it to a property and getters allow us to compute a value on the fly instead of simply pulling it out of a property. The get and set keywords just make our object's interface more simple.
