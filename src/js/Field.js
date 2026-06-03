export default class Field {
  constructor(cellsCount, grid) {
    this.cellsCount = cellsCount;
    this.grid = grid;
  }

  renderField() {
    for (let i = 0; i < this.cellsCount; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      this.grid.append(cell);
    }
  }
}
