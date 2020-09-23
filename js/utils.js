'use strict';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function renderCell(location, value) {
  var elCell = document.querySelector(`.cell${location.i}-${location.j}`);
  elCell.innerHTML = value;
}

function renderBoard(board) {
  console.table(board);
  var strHTML = '';
  for (var i = 0; i < board.length; i++) {
    var row = board[i];
    strHTML += '<tr>';
    for (var j = 0; j < board.length; j++) {
      var cell = row[j];
      strHTML += `<td data-i = "${i}" data-j"${j}">`;
      strHTML += '</td >';
    }
    strHTML += '</tr>';
  }
  var elTable = document.querySelector('.board');
  elTable.innerHTML = strHTML;
}
function copyMat(mat) {
  var newMat = [];
  for (var i = 0; i < mat.length; i++) {
    newMat[i] = [];
    for (var j = 0; j < mat[0].length; j++) {
      newMat[i][j] = mat[i][j];
    }
  }
  return newMat;
}
