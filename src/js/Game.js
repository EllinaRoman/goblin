import Goblin from "./Goblin";

export default class Game {
  constructor(delay, allCell) {
    this.delay = delay;
    this.goblin = new Goblin(allCell);
    this.count = 0;
    this.miss = 0;
    this.clicked = false;
    this.countText = document.querySelector("#count");
    this.missText = document.querySelector("#miss");
  }

  start() {
    this.goblin.move();
    this.intervalId = setInterval(() => {
      if (!this.clicked) {
        this.miss++;
        this.missText.textContent = `Пропущено: ${this.miss} / 5`;
        if (this.miss === 5) {
          alert("Вы проиграли!");
          clearInterval(this.intervalId);
        }
      }
      this.clicked = false;
      this.goblin.move();
    }, this.delay);
    this.click();
  }

  click() {
    this.goblin.img.addEventListener("click", () => {
      this.count++;
      this.countText.textContent = `Счёт: ${this.count}`;
      this.goblin.img.remove();
      this.clicked = true;
    });
  }
}
