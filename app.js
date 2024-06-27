// background animation but with javascript
/*document.addEventListener("DOMContentLoaded", (event) => {
  backgroundAnimation();
});

let bgAnimation = true;

function backgroundAnimation() {
  let timer = 0;

  function changeColor() {
    if (!bgAnimation) return; // Stop if bgAnimation is false

    switch (timer) {
      case 0:
        document.querySelector("main").style.backgroundColor = "#fecf97";
        break;
      case 1:
        document.querySelector("main").style.backgroundColor = "#d2ead5";
        break;
      case 2:
        document.querySelector("main").style.backgroundColor = "#f5f5c4";
        break;
      case 3:
        document.querySelector("main").style.backgroundColor = "#f37e80";
        break;
    }

    timer = (timer + 1) % 4;
    setTimeout(changeColor, 1000); // Schedule the next color change
  }

  changeColor(); // Start the animation initially
}

function stopAnimation() {
  bgAnimation = false;
}
*/

const toggleButton = document.getElementById("toggleAnimation");
const mainElement = document.querySelector("main");
let playArea = document.getElementById("container__play");

toggleButton.addEventListener("click", () => {
  mainElement.classList.toggle("paused");
  playArea.innerHTML = `<div class="container__result" id="container__result">
            <div class="left__option" id="rock">
              <img src="" id="player__choice" alt="" />
            </div>
            <p>Vs</p>
            <div class="right__option" >
              <img src="img/Artboard 3.png" id="computer__choice" alt="" />
            </div>
          </div>
          <div class="container__counter" id="container__counter">Chose your option</div>`;
});

function shuffleChoices() {
  let i = 0;

  const images = [
    "img/Artboard 1.png", // Replace with your image paths
    "img/Artboard 2.png",
    "img/Artboard 3.png",
    "img/Artboard 1.png",
    "img/Artboard 2.png",
    "img/Artboard 3.png",
    "img/Artboard 1.png",
    "img/Artboard 2.png",
  ];

  const intervalId = setInterval(() => {
    if (i > 3) {
      clearInterval(intervalId); // Stop the timer
      return;
    }
    document.getElementById("computer__choice").src = images[i];
    i++;
  }, 700); // Output every 1000 milliseconds (1 second)
}

// Count to 3 and show the results
/*





*/
function countToThree() {
  let i = 0;

  const images = [
    "img/Artboard 1.png", // Replace with your image paths
    "img/Artboard 2.png",
    "img/Artboard 3.png",
  ];

  const messages = [
    "Chose your option in 3..",
    "Chose your option in 2..",
    "Chose your option in 1..",
  ];

  const intervalId = setInterval(() => {
    if (i > 2) {
      clearInterval(intervalId); // Stop the timer
      return;
    }
    document.getElementById("container__counter").innerHTML = messages[i];

    i++;
  }, 800); // Output every 1000 milliseconds (1 second)
  setTimeout(() => {
    result(images);
  }, 3200);
  playerChoice = -1;
}
let playerChoice = -1;

function displayImage(clickedImage) {
  document.getElementById("player__choice").src = clickedImage.src;
  playerChoice = clickedImage.dataset.value;
  console.log(playerChoice);
}

function result(images) {
  let computerChoice = Math.floor(Math.random() * 3);

  //0 rock
  //1 paper
  //2 sissors

  console.log(`Computer Choice: ${computerChoice}`);
  console.log(`Player Choice: ${playerChoice}`);

  if (computerChoice === 0) {
    document.getElementById("computer__choice").src = images[computerChoice];

    if (playerChoice === "0") {
      document.getElementById("container__counter").innerHTML = "Tie";
    } else if (playerChoice === "1") {
      document.getElementById("container__counter").innerHTML = "You win!";

      document.querySelector("main").style.backgroundColor = "#79db83";
    } else if (playerChoice === "2") {
      document.getElementById("container__counter").innerHTML = "You lose!";

      document.querySelector("main").style.backgroundColor = "#e05c63";
    } else {
      document.getElementById("container__counter").innerHTML = "Too slow lol";
    }
  } else if (computerChoice === 1) {
    document.getElementById("computer__choice").src = images[computerChoice];
    if (playerChoice === "0") {
      document.getElementById("container__counter").innerHTML = "You lose!";

      document.querySelector("main").style.backgroundColor = "#e05c63";
    } else if (playerChoice === "1") {
      document.getElementById("container__counter").innerHTML = "Tie";
    } else if (playerChoice === "2") {
      document.getElementById("container__counter").innerHTML = "You win!";

      document.querySelector("main").style.backgroundColor = "#79db83";
    } else {
      document.getElementById("container__counter").innerHTML = "Too slow lol";
    }
  } else if (computerChoice === 2) {
    document.getElementById("computer__choice").src = images[computerChoice];
    if (playerChoice === "0") {
      document.getElementById("container__counter").innerHTML = "You win!";

      document.querySelector("main").style.backgroundColor = "#79db83";
    } else if (playerChoice === "1") {
      document.getElementById("container__counter").innerHTML = "You lose!";

      document.querySelector("main").style.backgroundColor = "#e05c63";
    } else if (playerChoice === "2") {
      document.getElementById("container__counter").innerHTML = "Tie";
    } else {
      document.getElementById("container__counter").innerHTML = "Too slow lol";
    }
  }
}
