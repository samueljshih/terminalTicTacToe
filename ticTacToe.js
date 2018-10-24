var prompt = require('prompt');

var board = {
  1: ' ',
  2: ' ',
  3: ' ',
  4: ' ',
  5: ' ',
  6: ' ',
  7: ' ',
  8: ' ',
  9: ' '
};

var possibleWinningCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

function printBoard() {
  console.log(
    '\n' +
      board[1] +
      ' | ' +
      board[2] +
      ' | ' +
      board[3] +
      '\n' +
      board[4] +
      ' | ' +
      board[5] +
      ' | ' +
      board[6] +
      '\n' +
      board[7] +
      ' | ' +
      board[8] +
      ' | ' +
      board[9]
  );
}

var count = 1;

function makeMove(player) {
  prompt.start();

  prompt.get(['move'], function(err, result) {
    if (count === 9) {
      console.log('TIE GAME!');
      return;
    }

    var playerMove = result.move;

    if (board[playerMove] === ' ') {
      board[playerMove] = player;
      if (checkWins(player) === true) {
        printBoard();
        console.log('PLAYER', player, 'WON!!');
        return;
      }

      if (player === 'X') {
        makeMove('O');
      } else if (player === 'O') {
        makeMove('X');
      }
    }
    count++;
    printBoard();
  });
}

function checkWins(player) {
  var won = false;

  possibleWinningCombos.forEach(combo => {
    if (won === true) {
      return;
    }
    var winCount = 0;

    for (var i = 0; i < combo.length; i++) {
      if (board[combo[i]] === player) {
        winCount++;
      }
    }

    if (winCount === 3) {
      won = true;
      return;
    } else {
      won = false;
    }
  });

  return won;
}

printBoard();
console.log('GAME START');
makeMove('X');
