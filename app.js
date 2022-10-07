const TOP_LEFT = 0;
const TOP_MIDDLE = 1;
const TOP_RIGHT = 2;
const MIDDLE_LEFT = 3;
const MIDDLE_MIDDLE = 4;
const MIDDLE_RIGHT = 5;
const BOTTOM_LEFT = 6;
const BOTTOM_MIDDLE = 7;
const BOTTOM_RIGHT = 8;

const squares = document.querySelectorAll('[data-square]');

const handleClick = (e) => {
  console.log(e.target.dataset.square);
};

document.querySelector('.board').addEventListener('click', handleClick);

const Player = function (name, mark) {
  this.name = name;
  this.mark = mark;
};

const Gameboard = function () {
  const board = new Array(9);

  function render() {
    for (var i = 0; i < squares.length; i++) {
      squares[i].textContent = board[i];
    }
  }

  function makeMove(player, square) {
    board[square] = player.mark;
  }

  function checkWin(mark) {
    if (
      board[TOP_LEFT] === board[TOP_MIDDLE] &&
      board[TOP_MIDDLE] === board[TOP_RIGHT] &&
      board[TOP_RIGHT] === mark
    ) {
      return true;
    }
    if (
      board[MIDDLE_LEFT] === board[MIDDLE_MIDDLE] &&
      board[MIDDLE_MIDDLE] === board[MIDDLE_RIGHT] &&
      board[MIDDLE_RIGHT] === mark
    ) {
      return true;
    }
    if (
      board[BOTTOM_LEFT] === board[BOTTOM_MIDDLE] &&
      board[BOTTOM_MIDDLE] === board[BOTTOM_RIGHT] &&
      board[BOTTOM_RIGHT] === mark
    ) {
      return true;
    }
    if (
      board[TOP_LEFT] === board[MIDDLE_LEFT] &&
      board[MIDDLE_LEFT] === board[BOTTOM_LEFT] &&
      board[BOTTOM_LEFT] === mark
    ) {
      return true;
    }
    if (
      board[TOP_MIDDLE] === board[MIDDLE_MIDDLE] &&
      board[MIDDLE_MIDDLE] === board[BOTTOM_MIDDLE] &&
      board[BOTTOM_MIDDLE] === mark
    ) {
      return true;
    }
    if (
      board[TOP_RIGHT] === board[MIDDLE_RIGHT] &&
      board[MIDDLE_RIGHT] === board[BOTTOM_RIGHT] &&
      board[BOTTOM_RIGHT] === mark
    ) {
      return true;
    }
    if (
      board[TOP_LEFT] === board[MIDDLE_MIDDLE] &&
      board[MIDDLE_MIDDLE] === board[BOTTOM_RIGHT] &&
      board[BOTTOM_RIGHT] === mark
    ) {
      return true;
    }
    if (
      board[TOP_RIGHT] === board[MIDDLE_MIDDLE] &&
      board[MIDDLE_MIDDLE] === board[BOTTOM_LEFT] &&
      board[BOTTOM_LEFT] === mark
    ) {
      return true;
    }
    return false;
  }

  function clear() {
    for (var i = 0; i < squares.length; i++) {
      board[i] = undefined;
    }
  }

  function printBoard() {
    for (var i = 0; i < board.length; i++) {
      console.log(`\t${board[i]}`);
    }
  }
  return { render, clear, makeMove, checkWin, printBoard };
};

// board.render();
// const player1 = new Player('Bob', 'X');
// const player2 = new Player('Alice', 'O');
// board.makeMove(player1, 0);
// board.makeMove(player1, 1);
// board.makeMove(player1, 2);
// board.render();
// board.makeMove(player2, 8);
// board.render();
// board.makeMove(player2, 7);
// board.render();
// board.makeMove(player2, 6);
// board.render();
// board.checkWin();

const GameController = function () {
  const board = Gameboard();
  let gameOver = false;

  const player1Name =
    document.querySelector('.player-one-name').value === ''
      ? 'Player 1 (X)'
      : document.querySelector('.player-one-name').value;
  const player2Name =
    document.querySelector('.player-two-name').value === ''
      ? 'Player 2 (O)'
      : document.querySelector('.player-two-name').value;

  function start() {
    console.log(`Player 1: ${player1Name}`);
    console.log(`Player 2: ${player2Name}`);
  }

  return {
    start,
  };
};

// const game = GameController();
// game.start();
