class Pizza {
  /**
   * @param {number} size
   * @param {...string} toppings
   */
  constructor(size = 8, ...toppings) {
    this.size = size;
    this.toppings = ["cheese", ...toppings];
  }

  /**
   * @param  {...string} toppings
   */
  addToppings(...toppings) {
    if (!toppings) {
      return;
    }

    this.toppings = [...this.toppings, ...toppings];
  }

  /**
   * @returns {string} number of people this pizza size is ideal for
   */
  goodFor() {
    return `This size is perfect for ${this.size / 2} people`;
  }
}

const marguerita = new Pizza();
marguerita.addToppings("basil", "tomato");
console.log(marguerita);
console.log(marguerita.goodFor());
