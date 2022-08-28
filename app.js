const squares = document.querySelectorAll("[class*='square']");

const Player = function (name, mark) {
  this.name = name;
  this.mark = mark;
};

const Gameboard = function () {
  const board = [
    ['X', 'X', 'X'],
    ['X', 'X', 'X'],
    ['X', 'X', 'X'],
  ];
};

function populateBoard() {
  // squares.forEach(square, index => )
}

function render() {
  const boardContainer = document.querySelector('.board-container');
}

render();
