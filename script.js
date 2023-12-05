'use strict';

document.addEventListener("DOMContentLoaded", function() {
    const myButton = document.getElementById("play");
    const canvas = document.getElementById("canvas");
    const welcome = document.getElementById("welcome");
    const tryAgain = document.getElementById("tryAgain");
    const gameover = document.getElementById("gameover");
    const pLayAgain = document.getElementById("pLayAgain");
    const victory = document.getElementById("victory");
    const bkmusic = document.getElementById("bkmusic");
    const mutebtn = document.getElementById("mutebtn");
    const mutebtn2 = document.getElementById("mutebtn2");
    const coffeCupObtained = document.getElementById("coffeCupObtained");
    const coffeCupObtained2 = document.getElementById("coffeCupObtained2");
    const oops = document.getElementById("oops");
    const warningMessage = document.getElementById("warning-message");
    const wrapper = document.getElementById("wrapper");
    let muted = false;
    let muted2 = false;

    mutebtn.src="./Assets/unmute.png";
    mutebtn2.src="./Assets/soundon.png";

    oops.src="./Assets/oops.wav";
    coffeCupObtained.src="./Assets/CoffeCupObtained.wav";
    coffeCupObtained2.src="./Assets/CoffeCupObtained2.wav";

    function fadeOut(element, callback) {
        let opacity = 1;
        const fadeOutInterval = setInterval(function() {
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
        element.style.display = "inline";
        element.style.opacity = 0;
        let opacity = 0;
        const fadeInInterval = setInterval(function() {
            if (opacity < 1) {
                opacity += 0.1; 
                element.style.opacity = opacity;
            } else {
                clearInterval(fadeInInterval);
            }
        }, 100);
    }
    

    window.addEventListener('resize', ()=>{
      if (window.innerWidth < 1200) {
        warningMessage.classList.add('show');
        wrapper.classList.add('blur');
      }else{
        warningMessage.classList.remove('show');
        wrapper.classList.remove('blur');
      }
    });

    myButton.addEventListener("click", function() {
        fadeOut(welcome, function() {
            fadeIn(canvas);
        });
        setTimeout(() => {
        gameOver = false;}, 2500);
    });

    tryAgain.addEventListener("click", function() {
        fadeOut(gameover, function() {
          fadeIn(canvas);
        });
      
        context.clearRect(0, 0, canvas.width, canvas.height);
      
        setTimeout(() => {
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
      
          character.y = charY;
          velocityY = 0;
          gameOver = false;
          score = 0;
          runnningFlag = true;
          enemiesArray = [];
          coffeeArray = [];
        }, 2500); 
    });
    
    pLayAgain.addEventListener("click", function() {
        fadeOut(victory, function() {
          fadeIn(canvas);
        });
      
        context.clearRect(0, 0, canvas.width, canvas.height);
      
        setTimeout(() => {
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
      
          character.y = charY;
          velocityY = 0;
          gameOver = false;
          score = 0;
          runnningFlag = true;
          enemiesArray = [];
          coffeeArray = [];
        }, 2500);
    });
      
        
    mutebtn.addEventListener("click", ()=>{
      bkmusic.muted = !bkmusic.muted;
      muted = !muted;
      if(muted === true) mutebtn.src='./Assets/mute.png';
      else mutebtn.src="./Assets/unmute.png";
    });
    
    mutebtn2.addEventListener("click", ()=>{
      muted2 = !muted2;
      if(muted2 === true){
        mutebtn2.src="./Assets/soundoff.png";
        oops.src='';
        coffeCupObtained.src='';
        coffeCupObtained2.src='';
      }else{
        mutebtn2.src="./Assets/soundon.png";
        oops.src="./Assets/oops.wav";
        coffeCupObtained.src="./Assets/CoffeCupObtained.wav";    
        coffeCupObtained2.src="./Assets/CoffeCupObtained2.wav";
      }
    });

});