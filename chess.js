
var boardStateArray = [];
var cellsToPaint = [];
var uCode = {
    wPawn: String.fromCharCode(parseInt(2659, 16)),
    wRook: String.fromCharCode(parseInt(2656, 16)),
    wKnight: String.fromCharCode(parseInt(2658, 16)),
    wBishop: String.fromCharCode(parseInt(2657, 16)),
    wKing: String.fromCharCode(parseInt(2654, 16)),
    wQueen: String.fromCharCode(parseInt(2655, 16)),
    bPawn: String.fromCharCode(parseInt('265F', 16)),
    bRook: String.fromCharCode(parseInt('265C', 16)),
    bKnight: String.fromCharCode(parseInt('265E', 16)),
    bBishop: String.fromCharCode(parseInt('265D', 16)),
    bKing: String.fromCharCode(parseInt('265A', 16)),
    bQueen: String.fromCharCode(parseInt('265B', 16))
}



setUp();
function setUp() {
    for(var i = 0; i < 8; i++) {
        var rowArray = [];
        for (var j = 0; j < 8; j++) {
            var cell = document.getElementById;
            var cellId = document.getElementById(i + '' + j);
            var cellObject = {
                id: i + '' + j
                // cellStatus: 'none',
            }
            cellId.setAttribute('id', i + '' + j);
            rowArray.push(cellObject);
            if (i === 1){
                cellId.innerHTML = uCode.bPawn;
                cellObject.pieceType= 'pawn';
                cellObject.pieceColor = 'black';
                // cellObject.cellStatus = 'piece';
                cellId.addEventListener("click", function (event){
                    console.log(event);
                    determinePiece(event.target.id);
                    });
            } else if (i === 0) {
                cellObject.pieceColor = 'black';
                // cellObject.cellStatus = 'piece';
                cellId.addEventListener("click", function(event){
                    console.log(event);
                    determinePiece(event.target.id);
                    });
                    if (j === 0) {
                        cellId.innerHTML = uCode.bRook;
                        cellObject.pieceType= 'rook';
                    } else if (j === 7) {
                        cellId.innerHTML = uCode.bRook;
                        cellObject.pieceType= 'rook';
                    } else if (j === 1) {
                        cellId.innerHTML = uCode.bKnight;
                        cellObject.pieceType= 'knight';
                    } else if (j === 6) {
                        cellId.innerHTML = uCode.bKnight;
                        cellObject.pieceType= 'knight';
                    } else if (j === 2){
                        cellId.innerHTML = uCode.bBishop;
                        cellObject.pieceType= 'bishop';
                    } else if (j === 5){
                        cellId.innerHTML = uCode.bBishop;
                        cellObject.pieceType= 'bishop';
                    } else if (j === 3){
                        cellId.innerHTML = uCode.bQueen;
                        cellObject.pieceType= 'queen';
                    } else if (j === 4){
                        cellId.innerHTML = uCode.bKing;
                        cellObject.pieceType= 'king';
                    }
            } else if (i === 7) {
                cellObject.pieceColor = 'white';
                // cellObject.cellStatus = 'piece';
                cellId.addEventListener("click", function (event){
                    console.log(event);
                    determinePiece(event.target.id);
                    });
                    if (j === 0) {
                        cellId.innerHTML = uCode.wRook;
                        cellObject.pieceType= 'rook';
                    } else if (j === 7) {
                        cellId.innerHTML = uCode.wRook;
                        cellObject.pieceType= 'rook';
                    } else if (j === 1) {
                        cellId.innerHTML = uCode.wKnight;
                        cellObject.pieceType= 'knight';
                    } else if (j === 6) {
                        cellId.innerHTML = uCode.wKnight;
                        cellObject.pieceType= 'knight';
                    } else if (j === 2){
                        cellId.innerHTML = uCode.wBishop;
                        cellObject.pieceType= 'bishop';
                    } else if (j === 5){
                        cellId.innerHTML = uCode.wBishop;
                        cellObject.pieceType= 'bishop';
                    } else if (j === 3){
                        cellId.innerHTML = uCode.wQueen;
                        cellObject.pieceType= 'queen';
                    } else if (j === 4){
                        cellId.innerHTML = uCode.wKing;
                        cellObject.pieceType= 'king';
                    }
            } else if (i === 6){
                document.getElementById(i + '' + j).innerHTML = uCode.wPawn;
                cellObject.pieceType= 'pawn';
                cellObject.pieceColor = 'white';
                // cellObject.cellStatus = 'piece';
                cellId.addEventListener("click", function (event){
                    console.log(event);
                    determinePiece(event.target.id);
                    });
            } else if (i > 1 && i < 6){
                // document.getElementById(i + '' + j).innerHTML = i + '' + j; //print cell numbers
                cellObject.pieceColor = 'none';
                // cellObject.cellStatus = 'none';
                cellObject.pieceType= 'none';
                cellId.addEventListener("click", function (event){
                    console.log(event);
                    determinePiece(event.target.id);
                    });
            }
        }
        boardStateArray.push(rowArray);
    }
    console.log(boardStateArray);
}

function determinePiece(id){
  var row = parseInt(id[0]);
  var cell = parseInt(id[1]);
  var cellObject = boardStateArray[row][cell];
  var pieceColor = cellObject.pieceColor;
  var firstMove = cellObject.firstMove;
  switch (cellObject.pieceType) {
      case 'rook':
          var myRook = new Rook(id, cellObject, boardStateArray);
          myRook.getTargets('up');
          myRook.getTargets('down');
          myRook.getTargets('left');
          myRook.getTargets('right');
          console.log(cellsToPaint);
          break;
      case 'bishop':
          var myBishop = new Bishop(id, cellObject, boardStateArray);
          myBishop.getTargets('upRight');
          myBishop.getTargets('upLeft');
          myBishop.getTargets('downRight');
          myBishop.getTargets('downLeft');
          console.log(cellsToPaint);
          break;
      case 'queen':
          var myQueen = new Queen(id, cellObject, boardStateArray);
          myQueen.getTargets('up');
          myQueen.getTargets('down');
          myQueen.getTargets('left');
          myQueen.getTargets('right');
          myQueen.getTargets('upRight');
          myQueen.getTargets('upLeft');
          myQueen.getTargets('downRight');
          myQueen.getTargets('downLeft');
          break;
      case 'knight':
          var myKnight = new Knight(id, cellObject, boardStateArray);
          myKnight.getKnightTargets('upLeftKnight');
          myKnight.getKnightTargets('upRightKnight');
          myKnight.getKnightTargets('downLeftKnight');
          myKnight.getKnightTargets('downRightKnight');
          myKnight.getKnightTargets('rightUpKnight');
          myKnight.getKnightTargets('rightDownKnight',;
          myKnight.getKnightTargets('leftUpKnight');
          myKnight.getKnightTargets('leftDownKnight');
          break;
      case 'king':
          var myKing = new King(id, cellObject, boardStateArray);
          myKing.getKingTargets('up');
          myKing.getKingTargets('down');
          myKing.getKingTargets('left');
          myKing.getKingTargets('right');
          myKing.getKingTargets('upRight');
          myKing.getKingTargets('upLeft');
          myKing.getKingTargets('downRight');
          myKing.getKingTargets('downLeft');
          break;
          case 'pawn':
               var myPawn = new Pawn(id, cellObject, boardStateArray);
               if (pieceColor === 'black'){
                   if (firstMove){
                       myPawn.getPawnTargets('firstDownP');
                       myPawn.getPawnTargets('down');
                       myPawn.getPawnTargets('downRight');
                       myPawn.getPawnTargets('downLeft');
                       cellObject.firstMove = false;
                   }else{
                       myPawn.getPawnTargets('down');
                       myPawn.getPawnTargets('downRight');
                       myPawn.getPawnTargets('downLeft');
                   }
               }else{
                   if (firstMove){
                       myPawn.getPawnTargets('firstUpP');
                       myPawn.getPawnTargets('up');
                       myPawn.getPawnTargets('upRight');
                       myPawn.getPawnTargets('upLeft');
                       cellObject.firstMove = false;
                   }else{
                       myPawn.getPawnTargets('up');
                       myPawn.getPawnTargets('upRight');
                       myPawn.getPawnTargets('upLeft');
                   }
               }
          }
      }




function Piece(row, cell, pieceType, pieceColor, boardStateArray){
  this.row = row;
  this.cell = cell;
  this.pieceType = pieceType;
  this.pieceColor = pieceColor;
  this.boardStateArray = boardStateArray;
  // this.cellStatus = cellStatus;
}
Piece.prototype.getTargets = function(direction){
    var fails = 0;
    var cellsHighlighted = 0;
    var justPainted = false;
    while (fails < 2){
        switch (direction) {
            case 'up':
                this.row--;
                break;
            case 'right':
                this.cell++;
                break;
            case 'down':
                this.row++;
                break;
            case 'left':
                this.cell--;
                break;
            case 'upLeft':
                this.row--;
                this.cell--;
                break;
            case 'upRight':
                this.row--;
                this.cell++;
                break;
            case 'downLeft':
                this.row++;
                this.cell--;
                break;
            case 'downRight':
                this.row++;
                this.cell++;
                break;
        }
        if (this.row < 0 || this.cell < 0 || this.row > 7 || this.cell > 7){
            break;
        }
        if (!this.boardStateArray[this.row][this.cell]){
            var targetCell = (row) + '' + (cell);
            cellsToPaint.push(targetCell);
            // boardStateArray[row][cell].cellStatus = 'available';
            if (fails > 0){
                //break?
            }
            fails = 0;
            justPainted = true;
        }else if (this.boardStateArray[this.row][this.cell] && this.boardStateArray[this.row][this.cell].pieceColor === this.pieceColor){
            break;
        }else if (this.boardStateArray[this.row][this.cell] && this.boardStateArray[this.row][this.cell].pieceColor !== this.pieceColor){
            fails++;
            if (justPainted && fails === 0){
                break;
            }
            if (fails > 0){
                justPainted = false;
            }
        }
    }
};
//piece prototype move function?
function Rook(id, cellObject, boardStateArray){
  Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, boardStateArray);
}
Rook.prototype = Piece.prototype;


function Bishop(id, cellObject, boardStateArray){
   Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, boardStateArray);
}
Bishop.prototype = Piece.prototype;


function Queen(id, cellObject, boardStateArray){
   Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, boardStateArray);
}
Queen.prototype = Piece.prototype;



function Knight(id, cellObject, boardStateArray){
    Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, boardStateArray);
}
Knight.prototype = Piece.prototype;
Knight.prototype.getKnightTargets = function(direction) {
    switch (direction) {
        case 'up':
            this.row--;
            break;
        case 'right':
            this.cell++;
            break;
        case 'down':
            this.row++;
            break;
        case 'left':
            this.cell--;
            break;
        case 'upLeft':
            this.row--;
            this.cell--;
            break;
        case 'upRight':
            this.row--;
            this.cell++;
            break;
        case 'downLeft':
            this.row++;
            this.cell--;
            break;
        case 'downRight':
            this.row++;
            this.cell++;
            break;
        case 'upLeftKnight':
            this.row--;
            this.row--;
            this.cell--;
            break;
        case 'upRightKnight':
            this.row--;
            this.row--;
            this.cell++;
            break;
        case 'downLeftKnight':
            this.row++;
            this.row++;
            this.cell--;
            break;
        case 'downRightKnight':
            this.row++;
            this.row++
            this.cell++;
            break;
        case 'rightUpKnight':
            this.row--;
            this.cell++;
            this.cell++;
            break;
        case 'rightDownKnight':
            this.row++;
            this.cell++;
            this.cell++;
            break;
        case 'leftUpKnight':
            this.row--;
            this.cell--;
            this.cell--;
            break;
        case 'leftDownKnight':
            this.row++;
            this.cell--;
            this.cell--;
            break;
    }
    if (this.row < 0 || this.cell < 0 || this.row > 7 || this.cell > 7){
        break;
    }
    if (!this.boardStateArray[this.row][this.cell]){
        var targetCell = (this.row) + '' + (this.cell);
        cellsToPaint.push(targetCell);
        // this.boardStateArray[this.row][this.cell].cellStatus = 'available';
    }else if (this.boardStateArray[this.row][this.cell] && this.boardStateArray[this.row][this.cell].pieceColor === this.pieceColor){
        break;
    }else if (this.boardStateArray[this.row][this.cell] && this.boardStateArray[this.row][this.cell].pieceColor !== this.pieceColor){
        break;
        }
};



function King(id, cellObject, boardStateArray){
    Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, boardStateArray);
}
King.prototype = Piece.prototype;
King.prototype.getKingTargets = function(direction) {
    switch (direction) {
        case 'up':
            this.row--;
            break;
        case 'right':
            this.cell++;
            break;
        case 'down':
            this.row++;
            break;
        case 'left':
            this.cell--;
            break;
        case 'upLeft':
            this.row--;
            this.cell--;
            break;
        case 'upRight':
            this.row--;
            this.cell++;
            break;
        case 'downLeft':
            this.row++;
            this.cell--;
            break;
        case 'downRight':
            this.row++;
            this.cell++;
            break;
        case 'upLeftKnight':
            this.row--;
            this.row--;
            this.cell--;
            break;
        case 'upRightKnight':
            this.row--;
            this.row--;
            this.cell++;
            break;
        case 'downLeftKnight':
            this.row++;
            this.row++;
            this.cell--;
            break;
        case 'downRightKnight':
            this.row++;
            this.row++
            this.cell++;
            break;
        case 'rightUpKnight':
            this.row--;
            this.cell++;
            this.cell++;
            break;
        case 'rightDownKnight':
            this.row++;
            this.cell++;
            this.cell++;
            break;
        case 'leftUpKnight':
            this.row--;
            this.cell--;
            this.cell--;
            break;
        case 'leftDownKnight':
            this.row++;
            this.cell--;
            this.cell--;
            break;
    }
    if (this.row < 0 || this.cell < 0 || this.row > 7 || this.cell > 7){
        break;
    }
    if (!this.boardStateArray[this.row][this.cell]){
        var targetCell = (this.row) + '' + (this.cell);
        cellsToPaint.push(targetCell);
        // this.boardStateArray[this.row][this.cell].cellStatus = 'available';
    }else if (this.boardStateArray[this.row][this.cell] && this.boardStateArray[this.row][this.cell].pieceColor === this.pieceColor){
        break;
    }else if (this.boardStateArray[this.row][this.cell] && this.boardStateArray[this.row][this.cell].pieceColor !== this.pieceColor){
        break;
        }
};


function Pawn(id, cellObject, boardStateArray){
    Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, boardStateArray);
}
Pawn.prototype = Piece.prototype;
Pawn.prototype.getPawnTargets = function(direction) {
    switch (direction) {
        case 'up':
            this.row--;
            break;
        case 'right':
            this.cell++;
            break;
        case 'down':
            this.row++;
            break;
        case 'left':
            this.cell--;
            break;
        case 'upLeft':
            this.row--;
            this.cell--;
            break;
        case 'upRight':
            this.row--;
            this.cell++;
            break;
        case 'downLeft':
            this.row++;
            this.cell--;
            break;
        case 'downRight':
            this.row++;
            this.cell++;
            break;
        case 'upLeftKnight':
            this.row--;
            this.row--;
            this.cell--;
            break;
        case 'upRightKnight':
            this.row--;
            this.row--;
            this.cell++;
            break;
        case 'downLeftKnight':
            this.row++;
            this.row++;
            this.cell--;
            break;
        case 'downRightKnight':
            this.row++;
            this.row++
            this.cell++;
            break;
        case 'rightUpKnight':
            this.row--;
            this.cell++;
            this.cell++;
            break;
        case 'rightDownKnight':
            this.row++;
            this.cell++;
            this.cell++;
            break;
        case 'leftUpKnight':
            this.row--;
            this.cell--;
            this.cell--;
            break;
        case 'leftDownKnight':
            this.row++;
            this.cell--;
            this.cell--;
            break;
        case 'firstDownP':
            this.row++;
            this.row++;
            break;
        case 'firstUpP':
            this.row--;
            this.row--;
            break;
    }
    if (this.row < 0 || this.cell < 0 || this.row > 7 || this.cell > 7){
        return;
    }
    if (this.pieceType === 'pawn'){
           if (direction === 'upLeft' || direction === 'upRight' || direction === 'downLeft' || direction === 'downRight'){
               if (!this.boardStateArray[this.row][this.cell]){
                   return;
               }
           }
           if (direction === 'up' || direction === 'down' || direction === 'firstUpP' || direction === 'firstDownP'){
               if (this.boardStateArray[this.row][this.cell]){
                   return;
               }
           }
       }
    if (!this.boardStateArray[this.row][this.cell]){
        var targetCell = (this.row) + '' + (this.cell);
        cellsToPaint.push(targetCell);
        // this.boardStateArray[this.row][this.cell].cellStatus = 'available';
    }else if (this.boardStateArray[this.row][this.cell] && this.boardStateArray[this.row][this.cell].pieceColor === this.pieceColor){
        return;
    }else if (this.boardStateArray[this.row][this.cell] && this.boardStateArray[this.row][this.cell].pieceColor !== this.pieceColor){
        return;
        }
};
