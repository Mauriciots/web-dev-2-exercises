class Seaweed extends Denizen {
  constructor(options) {
    super(options);
    this.position.y += this.height;
    this.imageUri = '/images/seaweed.png';
  }

  update(t) {
    // no physics for Starter
  }
}