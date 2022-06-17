$(() => {

  window.fishtank = new Fishtank('fishtank');             // making it global to make debugging 1% easier.  shhhh.
  window.fishtank.registerSpecies(SwitchFish, GoFish, BiteFish);
  var starter = new Starter({
    tank: window.fishtank,     // look, it's Dependency Injection!  Pretend you care!
    position: new Vector(0, 0)
  });
  [
    new Vector(200, 150),
    new Vector(-200, 500),
    new Vector(-570, 350),
    new Vector(570, 740),
  ].forEach(position => {
    new Seaweed({
      tank: window.fishtank,     // look, it's Dependency Injection!  Pretend you care!
      position,
    });
  })
});



