let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let player;
let start = 1;
let restart = document.querySelector(".show-player-win");
let write = document.getElementById("write");
restart.addEventListener("click", function () {
  one.textContent = "";
  two.textContent = "";
  three.textContent = "";
  four.textContent = "";
  five.textContent = "";
  six.textContent = "";
  seven.textContent = "";
  eight.textContent = "";
  nine.textContent = "";
  restart.style.display = "none";
  one.style.pointerEvents = "auto";
  two.style.pointerEvents = "auto";
  three.style.pointerEvents = "auto";
  four.style.pointerEvents = "auto";
  five.style.pointerEvents = "auto";
  six.style.pointerEvents = "auto";
  seven.style.pointerEvents = "auto";
  eight.style.pointerEvents = "auto";
  nine.style.pointerEvents = "auto";
});
function makeUnclickable() {
  one.style.pointerEvents = "none";
  two.style.pointerEvents = "none";
  three.style.pointerEvents = "none";
  four.style.pointerEvents = "none";
  five.style.pointerEvents = "none";
  six.style.pointerEvents = "none";
  seven.style.pointerEvents = "none";
  eight.style.pointerEvents = "none";
  nine.style.pointerEvents = "none";
}

one.addEventListener("click", function () {
  if (one.textContent === "" && player === 1) {
    one.textContent = "X";
    checkWinner();
    player = 2;
    start = 1;
  } else if (one.textContent === "" && player === 2) {
    one.textContent = "O";
    checkWinner();
    player = 1;
    start = 1;
  }
});
two.addEventListener("click", function () {
  if (two.textContent === "" && player === 1) {
    two.textContent = "X";
    player = 2;
    start = 1;
  } else if (two.textContent === "" && player === 2) {
    two.textContent = "O";
    checkWinner();
    player = 1;
    start = 1;
  }
});
three.addEventListener("click", function () {
  if (three.textContent === "" && player === 1) {
    three.textContent = "X";
    checkWinner();
    player = 2;
    start = 1;
  } else if (three.textContent === "" && player === 2) {
    three.textContent = "O";
    checkWinner();
    player = 1;
    start = 1;
  }
});
four.addEventListener("click", function () {
  if (four.textContent === "" && player === 1) {
    four.textContent = "X";
    checkWinner();
    player = 2;
    start = 1;
  } else if (four.textContent === "" && player === 2) {
    four.textContent = "O";
    checkWinner();
    player = 1;
    start = 1;
  }
});
five.addEventListener("click", function () {
  if (five.textContent === "" && player === 1) {
    five.textContent = "X";
    checkWinner();
    player = 2;
    start = 1;
  } else if (five.textContent === "" && player === 2) {
    five.textContent = "O";
    checkWinner();
    player = 1;
    start = 1;
  }
});
six.addEventListener("click", function () {
  if (six.textContent === "" && player === 1) {
    six.textContent = "X";
    checkWinner();
    player = 2;
    start = 1;
  } else if (six.textContent === "" && player === 2) {
    six.textContent = "O";
    checkWinner();
    player = 1;
    start = 1;
  }
});
seven.addEventListener("click", function () {
  if (seven.textContent === "" && player === 1) {
    checkWinner();
    seven.textContent = "X";
    player = 2;
    start = 1;
  } else if (seven.textContent === "" && player === 2) {
    seven.textContent = "O";
    checkWinner();
    player = 1;
    start = 1;
  }
});
eight.addEventListener("click", function () {
  if (eight.textContent === "" && player === 1) {
    eight.textContent = "X";
    checkWinner();
    player = 2;
    start = 1;
  } else if (eight.textContent === "" && player === 2) {
    eight.textContent = "O";
    checkWinner();
    player = 1;
    start = 1;
  }
});
nine.addEventListener("click", function () {
  if (nine.textContent === "" && player === 1) {
    nine.textContent = "X";
    checkWinner();
    player = 2;
    start = 1;
  } else if (nine.textContent === "" && player === 2) {
    nine.textContent = "O";
    checkWinner();
    player = 1;
    start = 1;
  }
});
let showPlayerWin = document.querySelector(".show-player-win");
function checkWinner() {
  if (one.textContent !== "")
    if (two.textContent !== "")
      if (three.textContent !== "")
        if (four.textContent !== "")
          if (five.textContent !== "")
            if (six.textContent !== "")
              if (seven.textContent !== "")
                if (eight.textContent !== "")
                  if (nine.textContent !== "") {
                    write.textContent = "No one wins!";
                    showPlayerWin.style.display = "flex";
                    makeUnclickable();
                  }
  if (one.textContent == "X")
    if (two.textContent == "X")
      if (three.textContent == "X") {
        write.textContent = "Player X wins!";
        showPlayerWin.style.display = "flex";
        makeUnclickable();
      }
  if (one.textContent == "O")
    if (two.textContent == "O")
      if (three.textContent == "O") {
        write.textContent = "Player O wins!";
        showPlayerWin.style.display = "flex";
        makeUnclickable();
      }
  if (four.textContent == "X")
    if (five.textContent == "X")
      if (six.textContent == "X") {
        write.textContent = "Player X wins!";
        showPlayerWin.style.display = "flex";
        makeUnclickable();
      }
  if (four.textContent == "O")
    if (five.textContent == "O")
      if (six.textContent == "O") {
        write.textContent = "Player O wins!";
        showPlayerWin.style.display = "flex";
        makeUnclickable();
      }
  if (seven.textContent == "X")
    if (eight.textContent == "X")
      if (nine.textContent == "X") {
        write.textContent = "Player X wins!";
        showPlayerWin.style.display = "flex";
        makeUnclickable();
      }
  if (seven.textContent == "O")
    if (eight.textContent == "O")
      if (nine.textContent == "O") {
        write.textContent = "Player O wins!";
        showPlayerWin.style.display = "flex";
        makeUnclickable();
      }
  if (one.textContent == "X")
    if (four.textContent == "X")
      if (seven.textContent == "X") {
        write.textContent = "Player X wins!";
        showPlayerWin.style.display = "flex";
        makeUnclickable();
      }
  if (one.textContent == "O")
    if (four.textContent == "O")
      if (seven.textContent == "O") {
        write.textContent = "Player O wins!";
        showPlayerWin.style.display = "flex";
        makeUnclickable();
      }
  if (two.textContent == "X")
    if (five.textContent == "X")
      if (eight.textContent == "X") {
        write.textContent = "Player X wins!";
        showPlayerWin.style.display = "flex";
        makeUnclickable();
      }
  if (two.textContent == "O")
    if (five.textContent == "O")
      if (eight.textContent == "O") {
        write.textContent = "Player O wins!";
        showPlayerWin.style.display = "flex";
        makeUnclickable();
      }
  if (three.textContent == "X")
    if (six.textContent == "X")
      if (nine.textContent == "X") {
        write.textContent = "Player X wins!";
        showPlayerWin.style.display = "flex";
        makeUnclickable();
      }
  if (three.textContent == "O")
    if (six.textContent == "O")
      if (nine.textContent == "O") {
        write.textContent = "Player O wins!";
        showPlayerWin.style.display = "flex";
        makeUnclickable();
      }
  if (one.textContent == "X")
    if (five.textContent == "X")
      if (nine.textContent == "X") {
        write.textContent = "Player X wins!";
        showPlayerWin.style.display = "flex";
        makeUnclickable();
      }
  if (one.textContent == "O")
    if (five.textContent == "O")
      if (nine.textContent == "O") {
        write.textContent = "Player O wins!";
        showPlayerWin.style.display = "flex";
        makeUnclickable();
      }
  if (three.textContent == "X")
    if (five.textContent == "X")
      if (seven.textContent == "X") {
        write.textContent = "Player X wins!";
        showPlayerWin.style.display = "flex";
        makeUnclickable();
      }
  if (three.textContent == "O")
    if (five.textContent == "O")
      if (seven.textContent == "O") {
        write.textContent = "Player O wins!";
        showPlayerWin.style.display = "flex";
        makeUnclickable();
      }
}
let selectButton1 = document.getElementById("select-button1");
let selectButton2 = document.getElementById("select-button2");
selectButton1.addEventListener("click", function () {
  player = 1;
  document.querySelector(".choose-player").style.display = "none";
});
selectButton2.addEventListener("click", function () {
  player = 2;
  document.querySelector(".choose-player").style.display = "none";
});
