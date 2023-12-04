"use strict";

//canvas
let canvas;
let canvasWidth = 1200;
let canvasheight = 440;
let context;

//character
let charWidth = 200;
let charheight = 200;
let charX = 150;
let charY = canvasheight - charheight;
let charImg;
let charrun1;
let charrun2;
let chargameover;

let character = {
  x: charX,
  y: charY,
  width: charWidth,
  height: charheight,
};

//Enemies
let enemiesArray = [];

let enemy1width = 75;
let enemy2width = 69;
let enemy3width = 69;
let enemy4width = 69;

let enemiesheight = 70;

let enemiesX = 1200;
let enemiesY = canvasheight - enemiesheight;

let enemy1Img;
let enemy2Img;
let enemy3Img;
let enemy4Img;

//coffee
let coffeeArray = [];

let coffee1Width = 75;
let coffee1Height = 65;

let coffee2Width = 110;
let coffee2Height = 110;

let coffeeX = 1200;
let coffeeY;

let coffee1Img;
let coffee2Img;

//score
let scoreImageWidth = 125;
let scoreImageheight = 125;
let scoreImageX = 10;
let scoreImageY = 10;
let score = 0;

let scoreImage0;
let scoreImage5;
let scoreImage10;
let scoreImage15;
let scoreImage20;
let scoreImage25;
let scoreImage30;
let scoreImage35;
let scoreImage40;
let scoreImage45;
let scoreImage50;
let scoreImage55;
let scoreImage60;
let scoreImage65;
let scoreImage70;
let scoreImage75;
let scoreImage80;
let scoreImage85;
let scoreImage90;
let scoreImage95;
let scoreImage100;


//physics:
//enemy
let velocityX = -12;

//character
let velocityY = 0;
let gravity = 0.8;

let gameOver = true;
let runnningFlag = true;


const gameOverText = document.getElementById("gameover");
const victory = document.getElementById("victory");
const coffeCupObtained = document.getElementById("coffeCupObtained");
const coffeCupObtained2 = document.getElementById("coffeCupObtained2");
const victoryaudio = document.getElementById("victoryaudio");
const oops = document.getElementById("oops");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function fadeOut(element, callback) {
  let opacity = 1;
  const fadeOutInterval = setInterval(function () {
    if (opacity > 0) {
      opacity -= 0.1;
      element.style.opacity = opacity;
    } else {
      clearInterval(fadeOutInterval);
      element.style.display = "none";
      if (callback) callback();
    }
  }, 100);
}

function fadeIn(element) {
  element.style.display = "block";
  element.style.opacity = 0;
  let opacity = 0;
  const fadeInInterval = setInterval(function () {
    if (opacity < 1) {
      opacity += 0.1; 
      element.style.opacity = opacity;
    } else {
      clearInterval(fadeInInterval);
    }
  }, 100); 
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

window.onload = () => {
  //canvas
  canvas = document.getElementById("canvas");
  canvas.width = canvasWidth;
  canvas.height = canvasheight;

  //to draw on the canvas
  context = canvas.getContext("2d");

  // const originalWidth = 1200;
  // const originalHeight = 404;
  // const scaleX = canvas.width / originalWidth;
  // const scaleY = canvas.height / originalHeight;
  // context.scale(scaleX, scaleY);

  //character
  charImg = new Image();
  charImg.src = "./Assets/sami.png";
  charImg.onload = () => {
    context.drawImage(
      charImg,
      character.x,
      character.y,
      character.width,
      character.height
      );
  };
  
  charrun1 = new Image();
  charrun1.src = "./Assets/samirun1.png";
  
  charrun2 = new Image();
  charrun2.src = "./Assets/samirun2.png";
  
  chargameover = new Image();
  chargameover.src = "./Assets/gameoversami.png";
    
  //enemies
  enemy1Img = new Image();
  enemy1Img.src = "./Assets/error1.png";

  enemy2Img = new Image();
  enemy2Img.src = "./Assets/error2.png";

  enemy3Img = new Image();
  enemy3Img.src = "./Assets/error3.png";

  enemy4Img = new Image();
  enemy4Img.src = "./Assets/error4.png";

  //coffe
  coffee1Img = new Image();
  coffee1Img.src = "./Assets/CoffeeSmall2.png";

  coffee2Img = new Image();
  coffee2Img.src = "./Assets/Coffeebig2.png";
 
  //score
  scoreImage0 = new Image();
  scoreImage0.src = "./Assets/scoreImage0.png";
  
  scoreImage5 = new Image();
  scoreImage5.src = "./Assets/scoreImage5.png";
  
  scoreImage10 = new Image();
  scoreImage10.src = "./Assets/scoreImage10.png";

  scoreImage15 = new Image();
  scoreImage15.src = "./Assets/scoreImage15.png";

  scoreImage20 = new Image();
  scoreImage20.src = "./Assets/scoreImage20.png";

  scoreImage25 = new Image();
  scoreImage25.src = "./Assets/scoreImage25.png";

  scoreImage30 = new Image();
  scoreImage30.src = "./Assets/scoreImage30.png";

  scoreImage35 = new Image();
  scoreImage35.src = "./Assets/scoreImage35.png";

  scoreImage40 = new Image();
  scoreImage40.src = "./Assets/scoreImage40.png";

  scoreImage45 = new Image();
  scoreImage45.src = "./Assets/scoreImage45.png";

  scoreImage50 = new Image();
  scoreImage50.src = "./Assets/scoreImage50.png";

  scoreImage55 = new Image();
  scoreImage55.src = "./Assets/scoreImage55.png";

  scoreImage60 = new Image();
  scoreImage60.src = "./Assets/scoreImage60.png";

  scoreImage65 = new Image();
  scoreImage65.src = "./Assets/scoreImage65.png";

  scoreImage70 = new Image();
  scoreImage70.src = "./Assets/scoreImage70.png";

  scoreImage75 = new Image();
  scoreImage75.src = "./Assets/scoreImage75.png";

  scoreImage80 = new Image();
  scoreImage80.src = "./Assets/scoreImage80.png";

  scoreImage85 = new Image();
  scoreImage85.src = "./Assets/scoreImage85.png";

  scoreImage90 = new Image();
  scoreImage90.src = "./Assets/scoreImage90.png";

  scoreImage95 = new Image();
  scoreImage95.src = "./Assets/scoreImage95.png";

  scoreImage100 = new Image();
  scoreImage100.src = "./Assets/scoreImage100.png";

  // setTimeout(() => {
  //   requestAnimationFrame(update);
  // }, 4000);
  // setTimeout(() => {
  //   setInterval(handleRunningAnimation, 250);
  // }, 4000);
  // setTimeout(() => {
  //   setInterval(generateEnemies, 5000);
  // }, 4000);
  // setTimeout(() => {
  //   setInterval(generateCoffee, 3400);
  // }, 4000);
  requestAnimationFrame(update);
  setInterval(handleRunningAnimation, 250);
  setInterval(generateEnemies, 1500);
  setInterval(generateCoffee, 1000);
  document.addEventListener("keydown", charJumpOnKeyDown);
  canvas.addEventListener("click", charJumpOnClick);
};

const update = () => {
  requestAnimationFrame(update);

  if (gameOver) return;

  //reset the canvas so the animation works
  context.clearRect(0, 0, canvas.width, canvas.height);

  //character
  //character (after Sami jump)
  velocityY += gravity;
  // to ensure Sami will get back to his original Y
  character.y = Math.min(character.y + velocityY, charY);

  context.drawImage(
    charImg,
    character.x,
    character.y,
    character.width,
    character.height
  );

  //enemies
  enemiesArray.map((enemy) => {
    enemy.x += velocityX;

    if (detectCollision(character, enemy)) {
      gameOver = true;
      oops.play();
      
      context.drawImage(
        chargameover,
        character.x+15,
        character.y-35,
        30,
        30
      );

      fadeOut(canvas, () => {
        fadeIn(gameOverText);
      });

      // charImg.src = "./Assets/samiGO.png";
      // //reset the canvas so only the dead image shows
      // context.clearRect(0, 0, canvas.width, canvas.height);

      // charImg.onload = () => {
      //   context.drawImage(
      //     charImg,
      //     character.x,
      //     character.y,
      //     character.width,
      //     character.height
      //   );
      // };
    
    }
    
    context.drawImage(
      enemy.img,
      enemy.x,
      enemy.y,
      enemy.width,
      enemy.height
    );
  });

  //coffee
  coffeeArray.map((coffeeCup) => {
    coffeeCup.x += velocityX;
    context.drawImage(
      coffeeCup.img,
      coffeeCup.x,
      coffeeCup.y,
      coffeeCup.width,
      coffeeCup.height
    );

    if (detectCollision(character, coffeeCup)) {
      coffeeCup.score===5 ? coffeCupObtained.play() : coffeCupObtained2.play();
      score += coffeeCup.score;
      coffeeArray.shift();
    }
    else{
      if(coffeeCup.x < 0){
        coffeeArray.shift();
      }
    }

  });

  // //score as text 
  // context.fillStyle = "black";
  // context.font = "20px courier";
  // // score++;
  // context.fillText(score, 5, 20); //(value, x, y)


  // score image
  switch (score) {
    case 0:
      context.drawImage(
        scoreImage0,
        scoreImageX,
        scoreImageY,
        scoreImageWidth,
        scoreImageheight
      );
      break;
    case 5:
      context.drawImage(
        scoreImage5,
        scoreImageX,
        scoreImageY,
        scoreImageWidth,
        scoreImageheight
      );
      break;
    case 10:
      context.drawImage(
        scoreImage10,
        scoreImageX,
        scoreImageY,
        scoreImageWidth,
        scoreImageheight
      );
      break;
    case 15:
      context.drawImage(
        scoreImage15,
        scoreImageX,
        scoreImageY,
        scoreImageWidth,
        scoreImageheight
      );
      break;
    case 20:
      context.drawImage(
        scoreImage20,
        scoreImageX,
        scoreImageY,
        scoreImageWidth,
        scoreImageheight
      );
      break;
    case 25:
      context.drawImage(
        scoreImage25,
        scoreImageX,
        scoreImageY,
        scoreImageWidth,
        scoreImageheight
      );
      break;
    case 30:
      context.drawImage(
        scoreImage30,
        scoreImageX,
        scoreImageY,
        scoreImageWidth,
        scoreImageheight
      );
      break;
    case 35:
      context.drawImage(
        scoreImage35,
        scoreImageX,
        scoreImageY,
        scoreImageWidth,
        scoreImageheight
      );
      break;
    case 40:
      context.drawImage(
        scoreImage40,
        scoreImageX,
        scoreImageY,
        scoreImageWidth,
        scoreImageheight
      );
      break;
    case 45:
      context.drawImage(
        scoreImage45,
        scoreImageX,
        scoreImageY,
        scoreImageWidth,
        scoreImageheight
      );
      break;
    case 50:
      context.drawImage(
        scoreImage50,
        scoreImageX,
        scoreImageY,
        scoreImageWidth,
        scoreImageheight
      );
      break;
    case 55:
      context.drawImage(
        scoreImage55,
        scoreImageX,
        scoreImageY,
        scoreImageWidth,
        scoreImageheight
      );
      break;
    case 60:
      context.drawImage(
        scoreImage60,
        scoreImageX,
        scoreImageY,
        scoreImageWidth,
        scoreImageheight
      );
      break;
    case 65:
      context.drawImage(
        scoreImage65,
        scoreImageX,
        scoreImageY,
        scoreImageWidth,
        scoreImageheight
      );
      break;
    case 70:
      context.drawImage(
        scoreImage70,
        scoreImageX,
        scoreImageY,
        scoreImageWidth,
        scoreImageheight
      );
      break;
    case 75:
      context.drawImage(
        scoreImage75,
        scoreImageX,
        scoreImageY,
        scoreImageWidth,
        scoreImageheight
      );
      break;
    case 80:
      context.drawImage(
        scoreImage80,
        scoreImageX,
        scoreImageY,
        scoreImageWidth,
        scoreImageheight
      );
      break;
    case 85:
      context.drawImage(
        scoreImage85,
        scoreImageX,
        scoreImageY,
        scoreImageWidth,
        scoreImageheight
      );
      break;
    case 90:
      context.drawImage(
        scoreImage90,
        scoreImageX,
        scoreImageY,
        scoreImageWidth,
        scoreImageheight
      );
      break;
    case 95:
      context.drawImage(
        scoreImage95,
        scoreImageX,
        scoreImageY,
        scoreImageWidth,
        scoreImageheight
      );
      break;
    case 100:
      context.drawImage(
        scoreImage100,
        scoreImageX,
        scoreImageY,
        scoreImageWidth,
        scoreImageheight
      );

      gameOver = true;

      fadeOut(canvas, function () {
        fadeIn(victory);
      });

      setTimeout(
        ()=>{
          victoryaudio.play();
        }
      , 1200);    

    break;
    default:
      context.drawImage(
        scoreImage100,
        scoreImageX,
        scoreImageY,
        scoreImageWidth,
        scoreImageheight
      );

      gameOver = true;

      fadeOut(canvas, function () {
        fadeIn(victory);
      });

      setTimeout(
        ()=>{
          victoryaudio.play();
        }
      , 1200); 

      break;
  }

  // if(score >= 100){
  //   gameOver = true;

  //   fadeOut(canvas, function() {
  //     fadeIn(victory);
  // });
  // }
}

const handleRunningAnimation = () => {
  if (gameOver) return;

  if (character.y === charY) {
    if (runnningFlag) {
      charImg.src = "./Assets/samirun1.png";
      runnningFlag = false;
    } else {
      charImg.src = "./Assets/samirun2.png";
      runnningFlag = true;
    }
  }

  // supposed to work when called in the update function :')
  // if (character.y === charY) {
  //   if (runnningFlag) {
  //       context.drawImage(
  //         charrun1,
  //         character.x,
  //         character.y,
  //         character.width,
  //         character.height
  //     )
    
  //     runnningFlag = false;
  //   } else {
  //       context.drawImage(
  //         charrun2,
  //         character.x,
  //         character.y,
  //         character.width,
  //         character.height
  //         )
    
  //     runnningFlag = true;
  //   }
  // }
}

const charJumpOnKeyDown = (e) => {
  if (gameOver) return;

  if ((e.code === "Space" || e.code === "ArrowUp") && character.y === charY) {
    charImg.src = "./Assets/sami.png";
    velocityY = -18;
  }
}

const charJumpOnClick = (e) => {
  if (gameOver) return;

  if (character.y === charY) {
    charImg.src = "./Assets/sami.png";
    velocityY = -18;
  }
}

const generateEnemies = () => {
  if (gameOver) return;

  let enemy = {
    img: null,
    x: enemiesX,
    y: enemiesY,
    width: null,
    height: enemiesheight,
  };

  let chance = Math.random(); //0 - 0.9999

  //didn't work
  //   if (chance > 0.5) {
  //     enemy.img = enemy1Img;
  //     enemy.width = enemy1width;
  //     enemiesArray.push(enemy);
  //   } else if (chance > 0.7) {
  //     enemy.img = enemy2Img;
  //     enemy.width = enemy2width;
  //     enemiesArray.push(enemy);
  //   } else if (chance > 0.9) {
  //     enemy.img = enemy3Img;
  //     enemy.width = enemy3width;
  //     enemiesArray.push(enemy);
  //   }

  if (chance > 0.9) {
    enemy.img = enemy3Img;
    enemy.width = enemy3width;
    enemiesArray.push(enemy);
  } else if (chance > 0.7) {
    enemy.img = enemy2Img;
    enemy.width = enemy2width;
    enemiesArray.push(enemy);
  } else if (chance > 0.5) {
    enemy.img = enemy1Img;
    enemy.width = enemy1width;
    enemiesArray.push(enemy);
  } else if (chance > 0.3) {
    enemy.img = enemy4Img;
    enemy.width = enemy4width;
    enemiesArray.push(enemy);
  }

  if (enemiesArray.length > 5) {
    enemiesArray.shift();
  }
};

const generateCoffee = () => {
  if (gameOver) return;

  let coffee = {
    img: null,
    x: coffeeX,
    y: null,
    width: null,
    height: null,
    score: null,
  };

  let chance = Math.random();
  const randomCoffeeY = Math.random() * (365 - 75 + 1) + 75; //75 - 365

  if (chance > 0.9) {
    coffee.img = coffee2Img;
    coffee.y = randomCoffeeY;
    coffee.width = coffee2Width;
    coffee.height = coffee2Height;
    coffee.score = 10;
    coffeeArray.push(coffee);
  } else if (chance > 0.5) {
    coffee.img = coffee1Img;
    coffee.y = randomCoffeeY;
    coffee.width = coffee1Width;
    coffee.height = coffee1Height;
    coffee.score = 5;
    coffeeArray.push(coffee);
  }
};

const detectCollision = (a, b) => {
  return (
    a.x < b.x + b.width - 35 &&
    a.x + a.width - 45 > b.x &&
    a.y  < b.y + b.height &&
    a.y + a.height - 30 > b.y
  );
};
