import goblin from "../img/goblin.png";

const grid = document.querySelector(".grid");
const cellsCount = 16;
const delay = 1000;

for (let i = 0; i < cellsCount; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  grid.append(cell);
}

const img = document.createElement("img");
img.src = goblin;
const allCell = grid.querySelectorAll(".cell");

const move = () => {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * cellsCount);
  } while (Array.from(allCell).indexOf(img.parentNode) === randomIndex);
  allCell[randomIndex].append(img);
};
move();

const intervalId = setInterval(() => {
  move();
}, delay);

// при необходимости остановки:
// clearInterval(intervalId);