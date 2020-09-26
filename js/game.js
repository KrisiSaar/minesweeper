'use strict';

const EMPTY = ' ';
var gBoard;
createCell();

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

function init(num) {
    gBoard = buildBoard(num);
    setMinesNegsCount(gBoard);
    renderBoard(gBoard);
}

function createCell() {
    var cell = {
        minesAroundCount: 0,
        isShown: false,
        isMine: false,
        isMarked: false
    }
    return cell;
}

function buildBoard(num) {
    var size = num;
    var board = [];
    for (var i = 0; i < size; i++) {
        board[i] = [];
        var row = board[i];
        for (var j = 0; j < size; j++) {
            row[j] = createCell();
        }
    }
    board[1][2].isMine = true;
    board[2][0].isMine = true;

    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++) {
            setMinesNegsCount(board, i, j);
        }
    }
    return board;
}

function setMinesNegsCount(board, cellI, cellJ) {
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= board.length) continue;
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (j < 0 || j >= board[i].length) continue;
            if (i === cellI && j === cellJ) continue;
            if (board[i][j].isMine) board[cellI][cellJ].minesAroundCount++;
        }
    }
}

//change the value of isShown to true by click the cell
function cellClicked(elCell, i, j) {
    gGame.isOn = true;
    i = +elCell.dataset.i;
    j = +elCell.dataset.j;
    gBoard[i][j].isShown = true;
    if (gBoard[i][j].isMine) {
        alert('You LOSE');
    }
    renderBoard(gBoard);
}

function checkCellDisplay(i, j) {
    if (gBoard[i][j].isShown) {
        var cellValue = (!gBoard[i][j].isMine) ? gBoard[i][j].minesAroundCount : MINE;
        return cellValue;
    } else {
        return '';
    }
}

function gameOver() {

}

function resetGame() {

}

function getLocation() {

}

function setTimer() {
    var timer = new Date();
    var stoper = timer.getSeconds();
    document.querySelector('.clock');
}
