import GamePlay from './GamePlay';
const gamePlay = new GamePlay();

export default class RandomExit{
  constructor() {
    this.randomCells = []
    this.winResult = document.querySelector('.win-result');
    this.looseResult = document.querySelector('.loose-result');
    this.cells = Array.from(document.querySelectorAll('.cells'))
    this.allCells = document.querySelector('.all-cells ');
    this.gamePlay = new GamePlay();
  }

  init() {
    this.random();
    gamePlay.listener()
  }

  random() {
    let interval = setInterval(() => {
      if(this.winResult.textContent === '5') {
        gamePlay.showResult('Победа!')
        clearInterval(interval);
      }

      if (this.allCells.querySelector(".active")) {
        this.gamePlay.withoutHit();

        if(this.looseResult.textContent === '6') {
          gamePlay.showResult('Поражение!')
          clearInterval(interval);
        }
      }

      this.cells.forEach(item => {
        if(!item.className.includes('active')) {
          this.randomCells.push(item)
        } else {
          item.classList.remove('active');
        }
      })
      const random = this.randomCells[Math.floor(Math.random() * this.randomCells.length)]
      random.classList.add('active');
    },1000)
  }
}
