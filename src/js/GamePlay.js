export default class GamePlay {
  constructor() {
    this.winResult = document.querySelector('.win-result');
    this.looseResult = document.querySelector('.loose-result');
    this.cells = Array.from(document.querySelectorAll('.cells'))
    this.allCells = document.querySelector('.all-cells');
    this.loose = 0;
  }

  listener() {
    this.win = 0;

    this.allCells.addEventListener('click',(event) => {
      const cell = event.target.closest(".active");
      if (cell) {
        this.win++;
        event.target.className = 'cells'
        this.winResult.textContent = this.win;
      }
    })

  }

  withoutHit() {
    this.loose++
    this.looseResult.textContent = this.loose;
  }

  showResult(message) {
    alert(`${message}`)
    location.reload()
  }
}
