const secretphrases = [
  "book",
  "secret",
  "garden",
  "football",
  "cinema",
  "england",
];
let randomItem = "";
let clicked = [];
let mistakes = 0;

function selectRandomItem() {
  randomItem = secretphrases[Math.floor(Math.random() * secretphrases.length)];
  document.getElementById("letters").addEventListener("click", buttonHandler);
  window.addEventListener("keydown", keyHandler);
  console.log(randomItem);
}

function setUnderScores() {
  let splitedWord = randomItem.split("");
  let mappedWord = splitedWord.map((item) =>
    clicked.indexOf(item) >= 0 ? item : "_"
  );
  result = mappedWord.join("");
  document.getElementById("clue").innerHTML = `<p>${result}</p>`;
  console.log(mappedWord);
}
function checkIfWon() {
  if (randomItem === result) {
    document.getElementById("gameover").querySelector("p").style.display =
      "block";
    document
      .getElementById("image")
      .querySelector("img")
      .setAttribute("src", "assets/winner.png");
  }
}
function checkIfLost() {
  if (mistakes === 6) {
    document.getElementById("gameover").querySelector("p").style.display =
      "block";
    document
      .getElementById("clue")
      .querySelector(
        "p"
      ).innerHTML = `Random Word Is : <span>${randomItem}</span>`;
  }
}
function updateHangManPicture() {
  const image = document.getElementById("image").querySelector("img");
  image.src = `assets/hangman${mistakes}.png`;
}

function letterHandler(letter) {
  letter = letter.toLowerCase();

  clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
  document.getElementById(letter.toUpperCase()).className = "used";
  if (randomItem.indexOf(letter) >= 0) {
    setUnderScores();
    checkIfWon();
  } else if (randomItem.indexOf(letter) === -1) {
    mistakes++;
    checkIfLost();
    updateHangManPicture();
  }
}
function keyHandler(event) {
  letterHandler(event.key);
}
function buttonHandler(event) {
  letterHandler(event.target.id);
}
selectRandomItem();
setUnderScores();
