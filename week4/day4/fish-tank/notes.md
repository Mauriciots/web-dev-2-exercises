This assignment has you building and refactoring object oriented code using the concepts that have been covered so far.

# Assignment

# Fish Tank with OO

You've been recruited to work on an interactive fish tank app. This app has already been started and heavily uses OO. Your job will be to add the next features.

## Setup

### Step 1:

Navigate to the root directory(`week4/day4/fish-tank`) of the the project and run npm install to install any dependencies, then run npm start to start the server.

This will start a node server at port 8080.

### Step 2:

In your browser, navigate to http://localhost:8080/

You will see a white page with a volcano at the bottom.

- Clicking on the volcano will spawn new seeds into the tank.
- Clicking on a seed will hatch a new fish.
- Clicking on a fish will do different things depending on which fish you click.
- The main code controlling all of this is the code in the public/scripts directory.

### Step 3:

Open up that directory and browse the code in the javascript files.

`fishtank.js` contains the Fishtank class. This class contains all code that controls the fishtank environment. Things like generating new seeds and fish, and the physics that controls the fish is all in this class.

`driver.js` contains the code that sets up the fish tank object and interacts with the DOM. We will only need to update this code when we add a new object to the fish tank.
helpers.js contains all the global helper functions. We can mostly leave this file alone.

`entities/denizen.js` contains the Denizen class that is the superclass for all the sprites int the fish tank. That means that anything that appears on the screen: fish, seeds, volcano; they all inherit from Denizen.

In case you're wondering what a sprite is:

Sprite: "a computer graphic that may be moved on-screen and otherwise manipulated as a single entity".

## Entities

This is a list of the current entities in the fish tank:

class Starter extends Denizen
class Fish extends Denizen
class Seed extends Denizen
class SwitchFish extends Fish
class GoFish extends Fish

### Denizen

The Denizen class contains all the setup code that any sprite in the fishtank will need. A new instance of Denizen will never be created. You will never write new Denizen() but instead just subclass from Denizen. This makes Denizen an abstract class, a class that is only inherited from and never instantiated directly.

There are three subclasses of Denizen:

- Starter: The volcano that spits out new seeds
- Seed: The seed that comes out of the volcano that turn into fish
- Fish: The superclass for all the fish that appear on the screen

### Fish

The Fish class contains all the setup code that any moving fish in the fishtank will need.

And there are two subclasses of Fish:

GoFish: A fish the speeds up when you click it
SwitchFish: A fish that changes direction when you click it
A subclass of Denizen or Fish might look like this:

```js
class <SomeSubClass> extends Denizen {
constructor(options) {
super(options); // Make sure to call super so that Denizen's constructor is called properly
this.imageUri = // The image that will be used for the sprite: "/images/image-name.png"
this.waterFriction = // Optional: The rate at which the sprite will slow down in the water. "0.3" means "lose 30% of speed per second"
this.height = // Optional: The height of the sprite in pixels. This defaults to 60
this.width = // Optional: The width of the sprite in pixels. This defaults to 60

    // Any other custom things you want to do on initialization

}

updateOneTick() {
// This method gets called every PHYSICS_TICK_SIZE_S which is currently every 0.010 seconds
// This is where you update the position of the sprite.
}

onClick(event) {
// Do any custom things when a sprite is clicked on
}

}
```

## Features

Test out the app and get comfortable with some of the code, then let's start adding new features.

The first new feature that you're going to work on is adding a new fish to the fish tank called BiteFish.

### Feature 1: Bite Fish

Before we add a new fish to the fishtank, let's take a look at the other two fish classes. Currently there are two subclasses of fish SwitchFish in switch_fish.js and GoFish in go_fish.js.

SwitchFish is simple, it just overrides one method, onClick. In this method, switch fish calls this.makeNewVelocity(50); which will cause it to change direction randomly when clicked.

GoFish is a little more interesting. It overrides constructor, updateOneTick, and onClick so that when you click the fish, it temporarily speeds up. onClick sets the number of seconds to speed up for and the updateOneTick method handles the speed changes.

Use the code from these classes as examples when you implement the new features.

#### Step 1:

> Create a new file called bite_fish.js and add a new class called BiteFish to the file. Make sure BiteFish subclasses Fish.

Now you can override the constructor, updateOneTick, and onClick methods to change how this fish behaves. Let's update the constructor to change the way BiteFish looks.

#### Step 2:

> Download a new image for the Bite Fish from https://imgur.com/fzYjRZ9 and put the image in the project's images folder.

#### Step 3:

> Override BiteFish's constructor so that it uses this new image:

```js
constructor(options) {
    super(options); // Call super to run the code inside `Fish`'s constructor
    this.imageUri = '/images/bite-fish.gif'; // Set the image
}
```

Now that the BiteFish is set up, let's add this new fish to the fish tank.

#### Step 4:

> First, navigate to index.html and add another script tag to load in your new bite_fish.js, much like the existing tags that load in go_fish.js or switch_fish.js

#### Step 5:

> Also, navigate to driver.js and add the BiteFish class to the list of classes in the registerSpecies method:

```js
window.fishtank.registerSpecies(SwitchFish, GoFish, BiteFish);
```

If you go back to the web page and spawn new fish, some of them should now be BiteFish

### Next Features

Now it's your turn to add some new features to the fish tank. For this assignment, you can get creative and add whatever you like. Here are some suggestions, but feel free to do something different.

- Update the images for each fish.
- Make it so that a fish gets "eaten" when a bite fish gets too close.
- Create some new fish that do different things.
- Create some Denizens that are not fish, maybe some fish tank plants.
- Add an effect to the starter when it's clicked.

#### Tips

> Remember that you can subclass subclasses, so there's nothing stopping you from doing something like this:

```js
class Shark extends BiteFish {}
```
