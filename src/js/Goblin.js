import goblin from '../img/goblin.png';

export default class Goblin {
  constructor(allCell) {
    this.img = document.createElement("img");
    this.img.src = goblin;
    this.allCell = allCell;
  }

  move() {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * this.allCell.length);
    } while (Array.from(this.allCell).indexOf(this.img.parentNode) === randomIndex);
    this.allCell[randomIndex].append(this.img);
  }
}
