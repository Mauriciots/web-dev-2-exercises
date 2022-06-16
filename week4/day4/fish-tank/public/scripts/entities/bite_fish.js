class BiteFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/bite-fish.png';
    this.maxSwimSpeed = 30;
  }

  updateOneTick() {
    super.updateOneTick();
  }

  onClick(event) {
    super.kill(0.1);
  }
}