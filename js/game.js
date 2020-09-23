'use strict';
const EMPTY = ' ';
var gBoard;

var gCell = {
    minesAroundCount: 4,
    isShown: true,
    isMine: true,
    isMarked: true
}

var gLevel = {
    SIZE: 4,
    MINES: 2
};
var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

function init() {
    gBoard = buildBoard();
    renderBoard(gBoard);
}

function buildBoard() {
    var size = gLevel.SIZE;
    var board = [];
    for (var i = 0; i < size; i++) {
        board[i] = [];
        var row = board[i];
        for (var j = 0; j < size; j++) {
            row[j] = gCell;
        }
    }
    return board;
}


function gameOver() {

}

function resetGame() {

}

function setTimer() {

}
