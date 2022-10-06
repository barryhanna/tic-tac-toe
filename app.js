const squares = document.querySelectorAll("[class*='square']");

const Player = function (name, mark) {
  this.name = name;
  this.mark = mark;
};

class Gameboard {
  constructor() {
    this.board = [
      new Array(3).fill('X'),
      new Array(3).fill('O'),
      new Array(3).fill('X'),
    ];
  }

  render(elemSelector) {
    // this.boardContainer = document.querySelector(elemSelector);
  }

  makeMove(player, square) {
    this.board[square.row][square.column] = player.mark;
  }

  printBoard() {
    for (var i = 0; i < this.board.length; i++) {
      for (var j = 0; j < this.board[i].length; j++) {
        console.log(`${this.board[i][j]}`);
      }
    }
  }
}

const board = new Gameboard();
board.render(document.querySelector('[data-square]'));
console.log();
