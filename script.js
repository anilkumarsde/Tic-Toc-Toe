let boxes = document.querySelectorAll(".box");
let restbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //turnx , turnO

let wiinig = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = () => {
  turnO = true;
  enabledboxe();
};
let count = 0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;
    console.log(count);

    checkWinner();
  });
});

const disabledboxe = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enabledboxe = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    msgContainer.classList.add("hide");
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations,Winner is ${winner}`;
  disabledboxe();
  msgContainer.classList.remove("hide");
};
const checkWinner = () => {
  for (let pattern of wiinig) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
    if (
      count == 9 &&
      (pos1Val != pos2Val || pos2Val != pos3Val || pos1Val != pos3Val)
    ) {
      drawGame();
    }
  }
};
const drawGame = () => {
  msg.innerText = `No one is winner start again`;
};

newGamebtn.addEventListener("click", resetGame);
restbtn.addEventListener("click", resetGame);
