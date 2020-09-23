'use strict';
const MINE = '💣';
var gMine;

function createMine(gBoard,i,j) {
    gMine = {
        location: {
            i: i,
            j: j
        }
    }
    gBoard[gMine.location.i][gMine.location.j] = MINE;
    return gBoard;
}