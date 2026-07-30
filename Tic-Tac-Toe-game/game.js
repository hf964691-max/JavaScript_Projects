const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
const newGameBtn = document.querySelector("#new-btn");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Reset Game
const resetGame = () => {
  turnO = true;
  count = 0;

  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    box.style.color = "";
  });

  msgContainer.classList.add("hide");
};

// Disable all boxes
const disableBoxes = () => {
  boxes.forEach((box) => (box.disabled = true));
};

// Show Winner
const showWinner = (winner) => {
  msg.innerText = `🎉 Congratulations! Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

// Draw Game
const drawGame = () => {
  msg.innerText = "🤝 It's a Draw! Click New Game.";
  msgContainer.classList.remove("hide");
  disableBoxes();
};

// Check Winner
const checkWinner = () => {
  for (const pattern of winPatterns) {
    const pos1 = boxes[pattern[0]].innerText;
    const pos2 = boxes[pattern[1]].innerText;
    const pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
      showWinner(pos1);
      return true;
    }
  }

  return false;
};

// Box Click
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.innerText = turnO ? "O" : "X";
    box.style.color = turnO ? "#5661d9" : "#b0413e";

    box.disabled = true;
    count++;

    const winnerFound = checkWinner();

    if (!winnerFound && count === 9) {
      drawGame();
    }

    turnO = !turnO;
  });
});

// Buttons
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);