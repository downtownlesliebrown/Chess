
var boardStateArray = [];
var cellsToPaint = [];
var pieceEnRouteHTML;
var pieceEnRouteObj = {};
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
                document.getElementById(i + '' + j).innerHTML = i + '' + j; //start: use this when I want to comment out black pawns for testing
                cellId.addEventListener("click", function (event){
                    console.log(event);
                    movePiece(event.target.id);
                }); //end
                cellId.innerHTML = uCode.bPawn;
                cellObject.pieceType= 'pawn';
                cellObject.pieceColor = 'black';
                cellObject.firstMove = true;
                cellId.addEventListener("click", function (event){
                    console.log(event);
                    movePiece(event.target.id);
                    });
            } else if (i === 0) {
                cellObject.pieceColor = 'black';
                // cellObject.cellStatus = 'piece';
                cellId.addEventListener("click", function(event){
                    console.log(event);
                    movePiece(event.target.id);
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
                    movePiece(event.target.id);
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
                cellObject.firstMove = true;
                // cellObject.cellStatus = 'piece';
                cellId.addEventListener("click", function (event){
                    console.log(event);
                    movePiece(event.target.id);
                    });
            } else if (i > 1 && i < 6){
                document.getElementById(i + '' + j).innerHTML = i + '' + j; //print cell numbers
                // cellObject.pieceColor = 'none';
                // cellObject.cellStatus = 'none';
                // cellObject.pieceType= 'none';
                cellId.addEventListener("click", function (event){
                    console.log(event);
                    movePiece(event.target.id);
                    });
            }
        }
        boardStateArray.push(rowArray);
    }
    console.log(boardStateArray);
}

function movePiece(id){
  var row = parseInt(id[0]);
  var cell = parseInt(id[1]);
  var cellObject = boardStateArray[row][cell];
  var pieceColor = cellObject.pieceColor;
  var firstMove = cellObject.firstMove;
  if (cellObject.painted === true) {
      cellObject.newLocation = true;
      updateBoards();
    } else {
    cellObject.firstClick = true;
    pieceEnRouteHTML = document.getElementById(row + '' + cell).innerHTML; //temporary storage for moving piece
    pieceEnRouteObj.pieceType = cellObject.pieceType;
    pieceEnRouteObj.pieceColor = cellObject.pieceColor;
    pieceEnRouteObj.firstMove = cellObject.firstMove;
    }
  switch (cellObject.pieceType) {
      case 'rook':
          var myRook = new Rook(id, cellObject, boardStateArray);
          myRook.getTargets('up', row, cell);
          myRook.getTargets('down', row, cell);
          myRook.getTargets('left', row, cell);
          myRook.getTargets('right', row, cell);
          console.log(myRook.cellsToPaint);
          cellsToPaint = myRook.cellsToPaint;
          paintTargets(cellsToPaint);
          break;
      case 'bishop':
          var myBishop = new Bishop(id, cellObject, boardStateArray);
          myBishop.getTargets('upRight', row, cell);
          myBishop.getTargets('upLeft', row, cell);
          myBishop.getTargets('downRight', row, cell);
          myBishop.getTargets('downLeft', row, cell);
          console.log(myBishop.cellsToPaint);
          cellsToPaint = myBishop.cellsToPaint;
          paintTargets(cellsToPaint);
          break;
      case 'queen':
          var myQueen = new Queen(id, cellObject, boardStateArray);
          myQueen.getTargets('up', row, cell);
          myQueen.getTargets('down', row, cell);
          myQueen.getTargets('left', row, cell);
          myQueen.getTargets('right', row, cell);
          myQueen.getTargets('upRight', row, cell);
          myQueen.getTargets('upLeft', row, cell);
          myQueen.getTargets('downRight', row, cell);
          myQueen.getTargets('downLeft', row, cell);
          console.log(myQueen.cellsToPaint);
          cellsToPaint = myQueen.cellsToPaint;
          paintTargets(cellsToPaint);
          break;
      case 'knight':
          var myKnight = new Knight(id, cellObject, boardStateArray);
          myKnight.getKnightTargets('upLeftKnight', row, cell);
          myKnight.getKnightTargets('upRightKnight', row, cell);
          myKnight.getKnightTargets('downLeftKnight', row, cell);
          myKnight.getKnightTargets('downRightKnight', row, cell);
          myKnight.getKnightTargets('rightUpKnight', row, cell);
          myKnight.getKnightTargets('rightDownKnight', row, cell);
          myKnight.getKnightTargets('leftUpKnight', row, cell);
          myKnight.getKnightTargets('leftDownKnight', row, cell);
          console.log(myKnight.cellsToPaint);
          cellsToPaint = myKnight.cellsToPaint;
          paintTargets(cellsToPaint);
          break;
      case 'king':
          var myKing = new King(id, cellObject, boardStateArray);
          myKing.getKingTargets('up', row, cell);
          myKing.getKingTargets('down', row, cell);
          myKing.getKingTargets('left', row, cell);
          myKing.getKingTargets('right', row, cell);
          myKing.getKingTargets('upRight', row, cell);
          myKing.getKingTargets('upLeft', row, cell);
          myKing.getKingTargets('downRight', row, cell);
          myKing.getKingTargets('downLeft', row, cell);
          console.log(myKing.cellsToPaint);
          cellsToPaint = myKing.cellsToPaint;
          paintTargets(cellsToPaint);
          break;
          case 'pawn':
               var myPawn = new Pawn(id, cellObject, boardStateArray);
               if (pieceColor === 'black'){
                   if (firstMove === true){
                       myPawn.getPawnTargets('firstDownPawn', row, cell);
                       myPawn.getPawnTargets('down', row, cell);
                       myPawn.getPawnTargets('downRight', row, cell);
                       myPawn.getPawnTargets('downLeft', row, cell);
                       cellObject.firstMove = false;
                   }else{
                       myPawn.getPawnTargets('down', row, cell);
                       myPawn.getPawnTargets('downRight', row, cell);
                       myPawn.getPawnTargets('downLeft', row, cell);
                   }
               }else{
                   if (firstMove === true){
                       myPawn.getPawnTargets('firstUpPawn', row, cell);
                       myPawn.getPawnTargets('up', row, cell);
                       myPawn.getPawnTargets('upRight', row, cell);
                       myPawn.getPawnTargets('upLeft', row, cell);
                       cellObject.firstMove = false;
                   }else{
                       myPawn.getPawnTargets('up', row, cell);
                       myPawn.getPawnTargets('upRight', row, cell);
                       myPawn.getPawnTargets('upLeft', row, cell);
                   }
               }
               console.log(myPawn.cellsToPaint);
               cellsToPaint = myPawn.cellsToPaint;
               paintTargets(cellsToPaint);
               break;
          }
      }




function Piece(row, cell, pieceType, pieceColor, boardStateArray){
  this.row = row;
  this.cell = cell;
  this.pieceType = pieceType;
  this.pieceColor = pieceColor;
  this.boardStateArray = boardStateArray;
  this.cellsToPaint = [];
  // this.cellStatus = cellStatus;
}
Piece.prototype.getTargets = function(direction, row, cell){
    this.row = row;
    this.cell = cell;
    var potentialCapture = 0;
    while (potentialCapture === 0){
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
        if (!this.boardStateArray[this.row][this.cell].pieceType){
            var targetCell = (this.row) + '' + (this.cell);
            this.cellsToPaint.push(targetCell);
            this.boardStateArray[this.row][this.cell].painted = true;
        }else if (this.boardStateArray[this.row][this.cell] && this.boardStateArray[this.row][this.cell].pieceColor === this.pieceColor){
            break;
        }else if (this.boardStateArray[this.row][this.cell] && this.boardStateArray[this.row][this.cell].pieceColor !== this.pieceColor){
            var targetCell = (this.row) + '' + (this.cell);
            this.cellsToPaint.push(targetCell);
            this.boardStateArray[this.row][this.cell].painted = true;
            potentialCapture++;
            break;
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
Knight.prototype.getKnightTargets = function(direction, row, cell) {
    this.row = row;
    this.cell = cell;
    switch (direction) {
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
        return
    }
    if (!this.boardStateArray[this.row][this.cell].pieceType){
        var targetCell = (this.row) + '' + (this.cell);
        this.cellsToPaint.push(targetCell);
        this.boardStateArray[this.row][this.cell].painted = true;
        // this.boardStateArray[this.row][this.cell].cellStatus = 'available';
    }else if (this.boardStateArray[this.row][this.cell] && this.boardStateArray[this.row][this.cell].pieceColor === this.pieceColor){
        return;
    }else if (this.boardStateArray[this.row][this.cell] && this.boardStateArray[this.row][this.cell].pieceColor !== this.pieceColor){
        var targetCell = (this.row) + '' + (this.cell);
        this.cellsToPaint.push(targetCell);
        this.boardStateArray[this.row][this.cell].painted = true;
        return;
        }
};



function King(id, cellObject, boardStateArray){
    Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, boardStateArray);
}
King.prototype = Piece.prototype;
King.prototype.getKingTargets = function(direction, row, cell) {
    this.row = row;
    this.cell = cell;
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
        return;
    }
    if (!this.boardStateArray[this.row][this.cell].pieceType){
        var targetCell = (this.row) + '' + (this.cell);
        this.cellsToPaint.push(targetCell);
        this.boardStateArray[this.row][this.cell].painted = true;
        // this.boardStateArray[this.row][this.cell].cellStatus = 'available';
    }else if (this.boardStateArray[this.row][this.cell] && this.boardStateArray[this.row][this.cell].pieceColor === this.pieceColor){
        return;
    }else if (this.boardStateArray[this.row][this.cell] && this.boardStateArray[this.row][this.cell].pieceColor !== this.pieceColor){
        var targetCell = (this.row) + '' + (this.cell);
        this.cellsToPaint.push(targetCell);
        this.boardStateArray[this.row][this.cell].painted = true;
        return;
        }
};


function Pawn(id, cellObject, boardStateArray){
    Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, boardStateArray);
}
Pawn.prototype = Piece.prototype;
Pawn.prototype.getPawnTargets = function(direction, row, cell) {
    this.row = row;
    this.cell = cell;
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
        case 'firstDownPawn':
            this.row++;
            this.row++;
            break;
        case 'firstUpPawn':
            this.row--;
            this.row--;
            break;
    }
    if (this.row < 0 || this.cell < 0 || this.row > 7 || this.cell > 7){
        return;
    }
       if (direction === 'upLeft' || direction === 'upRight' || direction === 'downLeft' || direction === 'downRight'){
           if (!this.boardStateArray[this.row][this.cell].pieceType){
               return;
           }
       }
       if (direction === 'up' || direction === 'down' || direction === 'firstUpPawn' || direction === 'firstDownPawn'){
           if (this.boardStateArray[this.row][this.cell].pieceType){
               return;
           }
       }
    if (!this.boardStateArray[this.row][this.cell].pieceType){
        var targetCell = (this.row) + '' + (this.cell);
        this.cellsToPaint.push(targetCell);
        this.boardStateArray[this.row][this.cell].painted = true;
        return;
        // this.boardStateArray[this.row][this.cell].cellStatus = 'available';
    }else if (this.boardStateArray[this.row][this.cell] && this.boardStateArray[this.row][this.cell].pieceColor === this.pieceColor){
        return;
    }else if (this.boardStateArray[this.row][this.cell] && this.boardStateArray[this.row][this.cell].pieceColor !== this.pieceColor){
        var targetCell = (this.row) + '' + (this.cell);
        this.cellsToPaint.push(targetCell);
        this.boardStateArray[this.row][this.cell].painted = true;
        return;
        }
};

// function paintTargets(cellsToPaint){
//     var availableRow;
//     var availableCell;
//     var cellClassArray;
//     for(var i = 0; i < cellsToPaint.length; i++) {
//         availableRow = parseInt(cellsToPaint[i][0]);
//         availableCell = parseInt(cellsToPaint[i][1]);
//         cellClassArray = document.getElementById(availableRow + '' + availableCell).className.split(' ');
//         cellClassArray.push('available-cell');
//         document.getElementById(availableRow + '' + availableCell).className = cellClassArray.join(' ');
//         }
//         // document.getElementById(boardStateArray[availableRow][availableCell].id).className = cellClassArray.join(' ');
//         cellsToPaint = [];
//     }

function paintTargets(cellsToPaint){
       var availableRow;
       var availableCell;
       var cellClassArray;
   for (var i=0; i < cellsToPaint.length; i++){
       availableRow = parseInt(cellsToPaint[i][0]);
       availableCell = parseInt(cellsToPaint[i][1]);
       var cellId = document.getElementById(availableRow + '' + availableCell);
       cellId.setAttribute('class', 'available-cell');
   }
}

function updateBoards(){
    for (var i = 0; i < boardStateArray.length; i++){
        delete pieceEnRouteObj.firstClick;
        for(var j= 0; j < boardStateArray[i].length; j++){
            if (boardStateArray[i][j].firstClick === true) {
                document.getElementById(i + '' + j).innerHTML = i + '' + j; //print cell numbers
                delete boardStateArray[i][j].firstClick;
                delete boardStateArray[i][j].pieceType;
                delete boardStateArray[i][j].pieceColor;
            }
            if (boardStateArray[i][j].newLocation === true){
                document.getElementById(i + '' + j).innerHTML = pieceEnRouteHTML; //print piece in location
                document.getElementById(i + '' + j).setAttribute('class', 'cell');
                boardStateArray[i][j] = pieceEnRouteObj;
                delete boardStateArray[i][j].newLocation;
            }
            if (boardStateArray[i][j].painted === true){
                document.getElementById(i + '' + j).setAttribute('class', 'cell');
                delete boardStateArray[i][j].painted;
            }
        }
    }
    cellsToPaint = [];
    console.log(boardStateArray);
    pieceEnRouteHTML = '';
    pieceEnRouteObj = {};
}

// function testRemovePaint(cellId, availableRow, availabeCell){
//     for (var i=0; i < cellsToPaint.length; i++){
//         availableRow = parseInt(cellsToPaint[i][0]);
//         availableCell = parseInt(cellsToPaint[i][1]);
//         // cellId.removeAttribute('available-cell');
//         cellId.setAttribute('class', 'cell');
//         delete boardStateArray[availableRow][availableCell].painted;
//         delete boardStateArray[availableRow][availableCell].newLocation;
//     }
// }
