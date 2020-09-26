'use strict';
var gCellContent;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function renderBoard(board) {
  var strHTML = '';
  // var className = `reCell revCell ${i}-${j}`
  for (var i = 0; i < board.length; i++) {
    var row = board[i];
    strHTML += '<tr>';
    for (var j = 0; j < board.length; j++) {
      var cell = row[j];
      gCellContent = (cell.isMine) ? MINE : cell.minesAroundCount;
      var cellInfo = checkCellDisplay(i,j);
      // strHTML += `<td onclick="cellClicked()" data-i="${i}" data-j="${j}">${gCellContent}</td>`;
      strHTML += `<td class="revCell revCell${i}${j}" onclick="cellClicked(this)" onclick = "${gGame.isOn}";
      data-i="${i}" data-j="${j}">${cellInfo}</td>`;
    }
    strHTML += '</tr>';
  }

  var elTable = document.querySelector('.board');
  // elTable.innerText.style.color
  elTable.innerHTML = strHTML;
}
