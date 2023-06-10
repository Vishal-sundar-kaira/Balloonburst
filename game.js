// Create the PixiJS application
const app = new PIXI.Application({
  width: 1350,
  height: 650,
  antialias: true,
  transparent: false,
  resolution: 1
});

// Add the game canvas to the HTML body
document.body.appendChild(app.view);

// Create the game stage
//creating new container
const stage = new PIXI.Container();
// now adding this container as a child to app now every element added in  stage can be view in game.
app.stage.addChild(stage);

// now loading image in texture so that later we can use them
//image for  making machine
const imageTexture1 = PIXI.Texture.from('images/Symbol 320001.png');
const imageTexture2 = PIXI.Texture.from('images/Symbol 320002.png');
const imageTexture = PIXI.Texture.from('images/Symbol 320003.png');
///image for background
const backgroundTexture = PIXI.Texture.from('images/Symbol 3 copy.png');
console.log(imageTexture, "image Textures are working");
//images for balloons
const balloonTextures = [
  PIXI.Texture.from('images/symbol 100001.png'),
  PIXI.Texture.from('images/symbol 100002.png'),
  PIXI.Texture.from('images/symbol 100003.png'),
  PIXI.Texture.from('images/symbol 100004.png'),
  PIXI.Texture.from('images/symbol 100005.png'),
  PIXI.Texture.from('images/symbol 100006.png'),
  PIXI.Texture.from('images/symbol 100007.png'),
  PIXI.Texture.from('images/symbol 100008.png'),
  PIXI.Texture.from('images/symbol 100009.png'),
  PIXI.Texture.from('images/symbol 100010.png'),
  PIXI.Texture.from('images/symbol 100008.png'),
];

// Call setup after texture is loaded
console.log(balloonTextures, "Textures are working");
//images for alphabets
const Alphabets = [
  PIXI.Texture.from('images/symbol 10001.png'),
  PIXI.Texture.from('images/symbol 10002.png'),
  PIXI.Texture.from('images/symbol 10003.png'),
  PIXI.Texture.from('images/symbol 10004.png'),
  PIXI.Texture.from('images/symbol 10005.png'),
  PIXI.Texture.from('images/symbol 10006.png'),
  PIXI.Texture.from('images/symbol 10007.png'),
  PIXI.Texture.from('images/symbol 10008.png'),
  PIXI.Texture.from('images/symbol 10009.png'),
  PIXI.Texture.from('images/symbol 10010.png'),
  PIXI.Texture.from('images/symbol 10011.png'),
  PIXI.Texture.from('images/symbol 10012.png'),
  PIXI.Texture.from('images/symbol 10013.png'),
  PIXI.Texture.from('images/symbol 10014.png'),
  PIXI.Texture.from('images/symbol 10015.png'),
  PIXI.Texture.from('images/symbol 10016.png'),
  PIXI.Texture.from('images/symbol 10017.png'),  
  PIXI.Texture.from('images/symbol 10018.png'),
  PIXI.Texture.from('images/symbol 10019.png'),
  PIXI.Texture.from('images/symbol 10020.png'),
  PIXI.Texture.from('images/symbol 10021.png'),
  PIXI.Texture.from('images/symbol 10022.png'),
  PIXI.Texture.from('images/symbol 10023.png'),
  PIXI.Texture.from('images/symbol 10024.png'),
  PIXI.Texture.from('images/symbol 10025.png'),
  PIXI.Texture.from('images/symbol 10026.png'),

];
// Call setup after alphabets is loaded
console.log(Alphabets, "Alphabets are working");

  // Listen for the 'load' event to ensure the image is fully loaded
  //first loading all background and images of machine
  imageTexture.baseTexture.on('loaded', () => {
  // Create the background sprite(BACKGROUND)
  const backgroundSprite = new PIXI.Sprite(backgroundTexture);
  backgroundSprite.width = app.screen.width; // Set the width to match the app screen width
  backgroundSprite.height = app.screen.height; // Set the height to match the app screen height
  // Add the background sprite as the first child of the stage
  stage.addChildAt(backgroundSprite, 0);

  // Create the sprite with the image texture(MACHINE)
  const imageSprite = new PIXI.Sprite(imageTexture);
  const imageSprite1 = new PIXI.Sprite(imageTexture1);
  const imageSprite2 = new PIXI.Sprite(imageTexture2);
  // Reduce the width of the image
  const desiredWidth = 250; // Set your desired width here
  const scaleFactor = desiredWidth / imageSprite.width;
  imageSprite.width = desiredWidth;
  imageSprite.height *= scaleFactor;

  const scaleFactor1 = desiredWidth / imageSprite1.width;
  imageSprite1.width = desiredWidth;
  imageSprite1.height *= scaleFactor1;

  const scaleFactor2 = desiredWidth / imageSprite2.width;
  imageSprite2.width = desiredWidth;
  imageSprite2.height *= scaleFactor2;

  imageSprite.x = app.screen.width - imageSprite.width;
  imageSprite.y = app.screen.height - imageSprite.height;

  imageSprite2.x = app.screen.width - (imageSprite2.width+140);
  imageSprite2.y = app.screen.height - (imageSprite2.height+10);

  imageSprite1.x = app.screen.width - imageSprite1.width;
  imageSprite1.y = app.screen.height - imageSprite1.height-160;

  function animatepumpImage(){
    const animationDuration = 0.4; // Duration of the animation in seconds
    gsap.to(imageSprite1, {
        y: imageSprite1.y + 100, // Move the image down by 100 pixels
        duration: animationDuration,
        zIndex: -1,
        onComplete: () => {
          // Animation complete callback
          gsap.to(imageSprite1, {
            y: imageSprite1.y-100, // Return the image to its original position
            duration: animationDuration,
            zIndex:-1,
            onComplete: animatepumpImage 
          });
        }
      });
  }
  function animateMachineImage() {
    const animationDuration = 0.4; // Duration of each animation cycle in seconds
  
    gsap.to(imageSprite.scale, {
      x: 0.5,// Increase or scale  horizontally
      duration: animationDuration, // Half of the animation time for scaling up
      yoyo: true, // Reverse the animation to scale down
      repeat: 1, // Repeat the animation once
      onComplete: animateMachineImage, // Restart the animation
    });
  }
  function animateMachineImage2() {
    const animationDuration = 0.4; // Duration of each animation cycle in seconds
  
    gsap.to(imageSprite2.scale, {
      x: 0.5,// Increase or scale horizontally
      duration: animationDuration, // Half of the animation time for scaling up
      yoyo: true, // Reverse the animation to scale down
      repeat: 1, // Repeat the animation once
      onComplete: animateMachineImage2, // Restart the animation
    });
  }
  //This three are for animation of machine
  animatepumpImage();
  // animateMachineImage2();
  animateMachineImage()

  stage.addChild(imageSprite1);
  stage.addChild(imageSprite2);
  stage.addChild(imageSprite);

  // Call the setup function
  setup();
});

function setup() {
  console.log("setup inside the function");
  // Game variables creating array for balloons sprite("Sprites are the simplest and most common renderable object in PixiJS. They represent a single image to be displayed on the screen. Each Sprite contains a Texture to be drawn, along with all the transformation and display state required to function in the scene graph.")
  const balloons = [];
  const alphabetarray = [];//creating arrays for storing balloons and alphabets on screen.
  let score = 0;//maintaining score;
  const scoreText = new PIXI.Text('Score: 0', { fill: '#000000' });//showing score in game screen.

  // Setup game scene
  stage.addChild(scoreText);//adding text to stage and in game.

  // Generate balloons every 3 second
  setInterval(generateBalloon, 3000);

  // Game loop contains the logic to run throughout the game.
  //ticker is resposible for continous update of game.
  app.ticker.add(gameLoop);//for moving forward balloons

  // Mouse click event whenever click on balloon pop it.
  app.view.addEventListener('pointerdown', popBalloon);

  //function use to create balloon.     
  var balloonIndex=0;   
  var alphabetIndex=0;       
  function generateBalloon() {
    //create new object of sprite (here creating new balloon)
    const balloonTexture = balloonTextures[balloonIndex % balloonTextures.length];
    const balloon = new PIXI.Sprite(balloonTexture);
    //create new object of sprite (here creating new Alphabets)
    const Alphabet = Alphabets[alphabetIndex % Alphabets.length];
    const alphabet = new PIXI.Sprite(Alphabet);
    //starting from machine
    balloon.x = 1030;  
    balloon.y = 425;
    balloon.anchor.set(0.5);//help to keep center aligned to cordinates for better visual.
    balloon.scale.x = 0;
    balloon.scale.y = 0;
    const balloontargetScale = 0.3; // Target scale of the balloon
    balloons.push(balloon);//add balloon in balloon array to keep track of balloon present in screen.
    stage.addChild(balloon);//now add balloon in game.
    // Create the animation
  const animationDuration = 3; // Animation duration in seconds for both balloon and alphabet
  // Use TweenMax from GSAP library to animate the scale
  gsap.to(balloon.scale, { x: balloontargetScale,y:balloontargetScale, duration: animationDuration});
  balloonIndex++;
  if (balloonIndex === balloonTextures.length) {
    balloonIndex = 0; // Reset balloon index if it reaches the end of the array
  }

  //same doing for alphabets also
  alphabet.x = 1030;  
  alphabet.y = 425;
  alphabet.anchor.set(0.50);//help to keep center aligned to cordinates for better visual.
  alphabet.scale.x = 0;
  alphabet.scale.y = 0;
  const alphatargetScale=0.2//targetscale for alphabet
  alphabetarray.push(alphabet);//add alphabet in Alphabets  array to keep track of alphabets present in screen.
  stage.addChild(alphabet);//now add balloon in game.
  // Use TweenMax from GSAP library to animate the scale
  gsap.to(alphabet.scale, { x: alphatargetScale,y:alphatargetScale, duration: animationDuration });
  alphabetIndex++;
  if (alphabetIndex === Alphabet.length) {
    alphabetIndex = 0; // Reset balloon index if it reaches the end of the array
  }
  }
  //This will decide how game will work
  function gameLoop() {
    // Move balloons upwards
    for (let i = 0; i < balloons.length-1; i++) {//I used -1 to stop balloon from moving whose generation animation is not completed
      balloons[i].x -= 2;//decreasing x position by 2 so that it will look its floating above.
      if (balloons[i].y - balloons[i].height / 2 > 0) {
        // Move balloon upwards if it's above the top of the screen
        balloons[i].y -= 1;
      } else{
        console.log(balloons[i].y)
        // Move balloon downwards if it's below or at the top of the screen
        balloons[i].y += 1;
      }
      if (balloons[i].x < -balloons[i].width) {//condition to check if balloon goes out of the screen
        balloons.splice(i, 1);//Now remove balloon from array,where i(index in balloon) and 1(number of baloon)
        i--;//necessary to make index one less to add next element in correct position.
      }
    }
    // Move alphabets upwards
    for (let i = 0; i < alphabetarray.length-1; i++) {
        alphabetarray[i].x -= 2;//decreasing x position by 2 so that it will look its floating above.
        if (alphabetarray[i].y -22- alphabetarray[i].height / 2 > 0) {
          // Move balloon upwards if it's above the top of the screen
          alphabetarray[i].y -= 1;
        } else{
          console.log(alphabetarray[i].y)
          // Move balloon downwards if it's below or at the top of the screen
          alphabetarray[i].y += 1;
        }
        if (alphabetarray[i].x < -alphabetarray[i].width) {//condition to check if balloon goes out of the screen
          alphabetarray.splice(i, 1);//Now remove balloon from array,where i(index in balloon) and 1(number of baloon)
          i--;//necessary to make index one less to add next element in correct position.
        }
  }
  }

  function popBalloon(event) {
    const point = new PIXI.Point(event.clientX, event.clientY);
    // Creating a new Howl instance for sound of burst
const balloonPopSound = new Howl({
  src: ['images/burst.mp3'], // Replace with the path to your sound file
  volume: 0.5, // Adjust the volume if necessary
});

    for (let i = 0; i < balloons.length-1; i++) {
      // for loop to iterate each balloon in array or in screen
      console.log(balloons[i])
      const balloon = balloons[i];
      console.log(point)
      if (balloon && balloon.getBounds().contains(point.x, point.y)){//condition to check if user clicked on boundary of balloon or clicked on balloon.

        // const burstTextures = [];
        const texture = PIXI.Texture.from('images/burst2.png');
        // burstTextures.push(texture);
        const textures=[texture]
const burst = new PIXI.AnimatedSprite(textures);
      // const burstTexture = PIXI.Texture.from('images/burstmain.gif');//for bursting effects after pop
      // const burst = new PIXI.Sprite(burstTexture);
      burst.anchor.set(0.5);
      burst.position.x = balloon.x;
      burst.position.y = balloon.y;
      burst.width=50
      burst.scale.set(0.2);
      burst.animationSpeed = 0.25; // Adjust the animation speed as needed
      burst.loop = false; // Play the animation only once
      burst.tint = 0xFFFFFF;
      burst.alpha=10;
      burst.play()
      setTimeout(() => {
        burst.stop();
        stage.removeChild(burst);
      }, 200);
      stage.addChild(burst);
      // Stop the burst animation after 2 seconds
      // Play burst animation
      gsap.to(burst.scale, { x: 2, y: 2, duration: 0.5 });
      gsap.to(burst, { alpha: 0, duration: 0.5, onComplete: () => stage.removeChild(burst) });
        stage.removeChild(balloons[i]);//remove balloon from game
        balloons.splice(i, 1);//remove balloon from array of balloon
        popAlphabet(event);
        balloonPopSound.play();
        score++;//increase score by +1
        scoreText.text = 'Score: ' + score;//show incremented text in screen.
        break;//break if you popped that one balloon where user clicked.
      }
    }
  }
  function popAlphabet(event) {
    const point = new PIXI.Point(event.clientX, event.clientY);
    for (let i = 0; i < alphabetarray.length-1; i++) {
      // for loop to iterate each balloon in array or in screen
      console.log(alphabetarray[i])
      const alphabet = alphabetarray[i];
      console.log(point)
      if (alphabet && alphabet.getBounds().contains(point.x, point.y)){//condition to check if user clicked on boundary of balloon or clicked on balloon.
        stage.removeChild(alphabetarray[i]);//remove alphabet from game
        alphabetarray.splice(i, 1);//remove alphabet from array of balloon
        break;//break if you popped that one alphabet where user clicked.
      }
    }
  }
}
