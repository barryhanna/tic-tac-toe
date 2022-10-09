const TOP_LEFT = 0;
const TOP_MIDDLE = 1;
const TOP_RIGHT = 2;
const MIDDLE_LEFT = 3;
const MIDDLE_MIDDLE = 4;
const MIDDLE_RIGHT = 5;
const BOTTOM_LEFT = 6;
const BOTTOM_MIDDLE = 7;
const BOTTOM_RIGHT = 8;

const Player = function (name, mark) {
  this.name = name;
  this.mark = mark;
};

const Gameboard = function () {
  const board = new Array(9);

  function makeMove(player, square) {
    if (board[square] === 'X' || board[square] === 'O') {
      return;
    }
    board[parseInt(square)] = player.mark;
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

  function checkDraw() {
    if (checkWin('X') || checkWin('O')) {
      return false;
    }
    for (var i = 0; i < board.length; i++) {
      if (board[i] === undefined) {
        return false;
      }
    }
    return true;
  }

  function state() {
    return board;
  }

  function clear() {
    for (var i = 0; i < board.length; i++) {
      board[i] = undefined;
    }
  }

  return { clear, makeMove, checkWin, checkDraw, state };
};

const GameView = function (board) {
  const squares = document.querySelectorAll('[data-square]');
  const msgPanel = document.querySelector('.message-panel');

  function update() {
    for (var i = 0; i < squares.length; i++) {
      squares[i].innerText = board.state()[i] ? board.state()[i] : '';
    }
  }

  function displayMessage(str) {
    msgPanel.innerText = str;
  }

  function clearMessage() {
    displayMessage('');
  }

  return { update, displayMessage, clearMessage };
};

const GameController = function () {
  const board = Gameboard();
  const view = GameView(board);

  let player1;
  let player2;

  let playerTurn;

  const handleClick = (e) => {
    if (!playerTurn) {
      return;
    }
    const { square } = e.target.dataset;

    board.makeMove(playerTurn, square);
    if (board.checkWin(playerTurn.mark)) {
      view.displayMessage(`${playerTurn.name} wins`);
    }
    if (board.checkDraw()) {
      view.displayMessage(`Draw`);
    }
    view.update();
    changePlayer();
  };

  const changePlayer = function () {
    if (playerTurn === player1) {
      playerTurn = player2;
    } else {
      playerTurn = player1;
    }
  };

  const reset = function () {
    resetBtn.style.display = 'none';
    startBtn.style.display = 'block';
    view.clearMessage();
    board.clear();
    view.update();
    player1Input.value = '';
    player2Input.value = '';
    playerTurn = null;
  };

  const startBtn = document.querySelector('[data-start-btn');
  const resetBtn = document.querySelector('[data-reset-btn');

  startBtn.addEventListener('click', () => {
    start();
  });
  resetBtn.addEventListener('click', () => {
    reset();
  });
  document.querySelector('.board').addEventListener('click', handleClick);

  const player1Input = document.querySelector('.player-one-name');
  const player2Input = document.querySelector('.player-two-name');

  function start() {
    player1 = new Player(
      player1Input.value === '' ? 'Player 1 (X)' : player1Input.value,
      'X'
    );
    player1Input.value = player1.name;
    player2 = new Player(
      player2Input.value === '' ? 'Player 2 (O)' : player2Input.value,
      'O'
    );
    player2Input.value = player2.name;
    playerTurn = player1;
    startBtn.style.display = 'none';
    resetBtn.style.display = 'block';
  }
};

const game = GameController();
