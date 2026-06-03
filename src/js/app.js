import Field from "./Field";
import Game from "./Game";
import Goblin from "./Goblin";

const field = new Field(16, document.querySelector(".grid"));
field.renderField();

const allCells = document.querySelectorAll('.cell')

const game = new Game(1000, allCells);
game.start();
