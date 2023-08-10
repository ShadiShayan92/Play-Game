const character = document.querySelector("#character");
const block = document.querySelector("#circle");
let counter = 0;

function jump() {
  if (character.classList.contains("animate")) {
    return;
  }
  character.classList.add("animate");
  setTimeout(() => character.classList.remove("animate"), 300);
}

const checkDead = setInterval(() => {
  const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
    block.style.animation = "none";
    document.querySelector("#finalScore").innerHTML = `Your final score: ${Math.floor(counter/100)}`;
    document.querySelector("#scoreSpan").innerText = "Game Over";
    if (counter < 10) {
      document.querySelector("#msg").innerText = "You should try more";
    }
    clearInterval(checkDead);
  } else {
    counter++;
  }
}, 10);
