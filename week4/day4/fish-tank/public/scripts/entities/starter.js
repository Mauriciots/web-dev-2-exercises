class Starter extends Denizen {

  constructor(options) {
    super(options);
    this.imageUri = '/images/volcano.jpg';
    this.position.y += this.height;
    this.maxNumberSeeds = 10;
  }

  update(t) {
    // no physics for Starter
  }

  onClick(event) {
    const numberSeeds = Math.ceil(Math.random() * this.maxNumberSeeds);
    new Array(numberSeeds || 1).fill('').forEach(() => {
      var xVel = randRangeInt(-300, 300);
      var yVel = 400 - Math.abs(xVel);
      var s = new Seed({
        tank: this.tank,
        position: this.position,
        velocity: new Vector(xVel, yVel),
        type: this.tank.getRandomSpecies(),
      });
    })
  }
}
