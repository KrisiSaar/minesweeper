'use strict';
const EMPTY = ' ';
var SIZE;
var gBoard;
var gCell = {
    minesAroundCount: 4,
    isShown: true,
    isMine: false,
    isMarked: true
   }
   
function init() {
    gBoard = createBoard(SIZE);
    renderBoard(gBoard);
}

function createBoard(SIZE = 4) {
    var board = [];
    for (var i = 0; i < SIZE; i++) {
        board[i] = [];
        var row = board[i];
        for (var j = 0; j < SIZE; j++) {
            row[j] = EMPTY;
        }
    }
    return board;
}

function renderBoard(board) {
    console.table(board);
    var strHTML = '';
    for (var i = 0; i < board.length; i++) {
        var row = board[i];
        strHTML += '<tr>';
        for (var j = 0; j < board.length; j++) {
            var cell = row[j];
            strHTML += '<td></td >'
    }
    strHTML += '</tr>';
}
var elTable = document.querySelector('.board');
elTable.innerHTML = strHTML;
}

function gameOver() {

}

function resetGame() {

}

function setTimer() {

}
