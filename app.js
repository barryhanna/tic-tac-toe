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

  function checkWin() {
    if ((board[0] === board[1]) === board[2]) {
      return true;
    }
    if ((board[3] === board[4]) === board[5]) {
      return true;
    }
    if ((board[6] === board[7]) === board[8]) {
      return true;
    }
    if ((board[0] === board[3]) === board[6]) {
      return true;
    }
    if ((board[1] === board[4]) === board[7]) {
      return true;
    }
    if ((board[2] === board[5]) === board[8]) {
      return true;
    }
    if ((board[0] === board[4]) === board[8]) {
      return true;
    }
    if ((board[2] === board[4]) === board[6]) {
      return true;
    }
    return false;
  }

  function clear() {
    for (var i = 0; i < squares.length; i++) {
      board[i] = '';
    }
  }

  function printBoard() {
    for (var i = 0; i < board.length; i++) {
      console.log(`\t${board[i]}`);
    }
  }
  return { render, clear, makeMove, checkWin, printBoard };
};

const board = Gameboard();
board.render();
const player1 = new Player('Bob', 'X');
const player2 = new Player('Alice', 'O');
board.makeMove(player1, 0);
board.render();
board.makeMove(player2, 8);
board.render();
board.makeMove(player2, 7);
board.render();
board.makeMove(player2, 6);
board.render();
board.checkWin();
