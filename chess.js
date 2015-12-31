
var boardStateArray = [];
var cellsToPaint = [];
// var cellObject = '';



setUp();
function setUp() {
    for(var i = 0; i < 8; i++) {
        var rowArray = [];
        for (var j = 0; j < 8; j++) {
            var cell = document.getElementById;
            var cellId = document.getElementById(i + '' + j);
            var cellObject = {
                id: i + '' + j,
                cellStatus: 'none',
            }
            cellId.setAttribute('id', i + '' + j);
            rowArray.push(cellObject);
            if (i === 1){
                cellId.innerHTML = String.fromCharCode(parseInt('265F', 16));
                cellObject.pieceType= 'pawn';
                cellObject.pieceColor = 'black';
                cellObject.cellStatus = 'piece';
                cellId.addEventListener("click", function (event){
                    console.log(event);
                    determinePiece(event.target.id);
                    });
            } else if (i === 0) {
                cellObject.pieceColor = 'black';
                cellObject.cellStatus = 'piece';
                cellId.addEventListener("click", function(event){
                    console.log(event);
                    determinePiece(event.target.id);
                    });
                    if (j === 0) {
                        cellId.innerHTML = String.fromCharCode(parseInt('265C', 16));
                        cellObject.pieceType= 'rook';
                    } else if (j === 7) {
                        cellId.innerHTML = String.fromCharCode(parseInt('265C', 16));
                        cellObject.pieceType= 'rook';
                    } else if (j === 1) {
                        cellId.innerHTML = String.fromCharCode(parseInt('265E', 16));
                        cellObject.pieceType= 'knight';
                    } else if (j === 6) {
                        cellId.innerHTML = String.fromCharCode(parseInt('265E', 16));
                        cellObject.pieceType= 'knight';
                    } else if (j === 2){
                        cellId.innerHTML = String.fromCharCode(parseInt('265D', 16));
                        cellObject.pieceType= 'bishop';
                    } else if (j === 5){
                        cellId.innerHTML = String.fromCharCode(parseInt('265D', 16));
                        cellObject.pieceType= 'bishop';
                    } else if (j === 3){
                        cellId.innerHTML = String.fromCharCode(parseInt('265B', 16));
                        cellObject.pieceType= 'queen';
                    } else if (j === 4){
                        cellId.innerHTML = String.fromCharCode(parseInt('265A', 16));
                        cellObject.pieceType= 'king';
                    }
            } else if (i === 7) {
                cellObject.pieceColor = 'white';
                cellObject.cellStatus = 'piece';
                cellId.addEventListener("click", function (event){
                    console.log(event);
                    determinePiece(event.target.id);
                    });
                    if (j === 0) {
                        cellId.innerHTML = String.fromCharCode(parseInt('2656', 16));
                        cellObject.pieceType= 'rook';
                    } else if (j === 7) {
                        cellId.innerHTML = String.fromCharCode(parseInt('2656', 16));
                        cellObject.pieceType= 'rook';
                    } else if (j === 1) {
                        cellId.innerHTML = String.fromCharCode(parseInt('2658', 16));
                        cellObject.pieceType= 'knight';
                    } else if (j === 6) {
                        cellId.innerHTML = String.fromCharCode(parseInt('2658', 16));
                        cellObject.pieceType= 'knight';
                    } else if (j === 2){
                        cellId.innerHTML = String.fromCharCode(parseInt('2657', 16));
                        cellObject.pieceType= 'bishop';
                    } else if (j === 5){
                        cellId.innerHTML = String.fromCharCode(parseInt('2657', 16));
                        cellObject.pieceType= 'bishop';
                    } else if (j === 3){
                        cellId.innerHTML = String.fromCharCode(parseInt('2655', 16));
                        cellObject.pieceType= 'queen';
                    } else if (j === 4){
                        cellId.innerHTML = String.fromCharCode(parseInt('2654', 16));
                        cellObject.pieceType= 'king';
                    }
            } else if (i === 6){
                document.getElementById(i + '' + j).innerHTML = String.fromCharCode(parseInt('2659', 16));
                cellObject.pieceType= 'pawn';
                cellObject.pieceColor = 'white';
                cellObject.cellStatus = 'piece';
                cellId.addEventListener("click", function (event){
                    console.log(event);
                    determinePiece(event.target.id);
                    });
            } else if (i > 1 && i < 6){
                document.getElementById(i + '' + j).innerHTML = i + '' + j; //print cell numbers
                cellObject.pieceColor = 'none';
                cellObject.cellStatus = 'none';
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
  switch (cellObject.pieceType) {
      case 'rook':
          var myRook = new Rook(id, cellObject);
          myRook.getTargets('up', row, cell, pieceColor);
          myRook.getTargets('down', row, cell, pieceColor);
          myRook.getTargets('left', row, cell, pieceColor);
          myRook.getTargets('right', row, cell, pieceColor);
          console.log(cellsToPaint);
          break;
      case 'bishop':
          var myBishop = new Bishop(id, cellObject);
          myBishop.getTargets('upRight', row, cell, pieceColor);
          myBishop.getTargets('upLeft', row, cell, pieceColor);
          myBishop.getTargets('downRight', row, cell, pieceColor);
          myBishop.getTargets('downLeft', row, cell, pieceColor);
          console.log(cellsToPaint);
          break;
      case 'queen':
          var myQueen = new Queen(id, cellObject);
          myQueen.getTargets('up', row, cell, pieceColor);
          myQueen.getTargets('down', row, cell, pieceColor);
          myQueen.getTargets('left', row, cell, pieceColor);
          myQueen.getTargets('right', row, cell, pieceColor);
          myQueen.getTargets('upRight', row, cell, pieceColor);
          myQueen.getTargets('upLeft', row, cell, pieceColor);
          myQueen.getTargets('downRight', row, cell, pieceColor);
          myQueen.getTargets('downLeft', row, cell, pieceColor);
          break;
      case 'knight':
          var myKnight = new Knight(id, cellObject);
          myKnight.getKnightTargets('upLeftKnight', row, cell, pieceColor, pieceType);
          myKnight.getKnightTargets('upRightKnight', row, cell, pieceColor, pieceType);
          myKnight.getKnightTargets('downLeftKnight', row, cell, pieceColor, pieceType);
          myKnight.getKnightTargets('downRightKnight', row, cell, pieceColor, pieceType);
          myKnight.getKnightTargets('rightUpKnight', row, cell, pieceColor, pieceType);
          myKnight.getKnightTargets('rightDownKnight', row, cell, pieceColor, pieceType);
          myKnight.getKnightTargets('leftUpKnight', row, cell, pieceColor, pieceType);
          myKnight.getKnightTargets('leftDownKnight', row, cell, pieceColor, pieceType);
          break;
      case 'king':
          var myKing = new King(id, cellObject);
          myKing.getKnightTargets('up', row, cell, pieceColor, pieceType);
          myKing.getKnightTargets('down', row, cell, pieceColor, pieceType);
          myKing.getKnightTargets('left', row, cell, pieceColor, pieceType);
          myKing.getKnightTargets('right', row, cell, pieceColor, pieceType);
          myKing.getKnightTargets('upRight', row, cell, pieceColor, pieceType);
          myKing.getKnightTargets('upLeft', row, cell, pieceColor, pieceType);
          myKing.getKnightTargets('downRight', row, cell, pieceColor, pieceType);
          myKing.getKnightTargets('downLeft', row, cell, pieceColor, pieceType);
          break;
      case 'pawn':
          var myPawn = new Pawn(id, cellObject);
          if (pieceColor === 'black'){
              if (firstMove === true){
                  myPawn.getKnightTargets('firstDown', row, cell, pieceColor, pieceType);
              } else {
                  myPawn.getKnightTargets('down', row, cell, pieceColor, pieceType);
                  myPawn.getKnightTargets('downRight', row, cell, pieceColor, pieceType);
                  myPawn.getKnightTargets('downLeft', row, cell, pieceColor, pieceType);
          } else {
              if (firstMove === true){
                  myPawn.getKnightTargets('firstUp', row, cell, pieceColor, pieceType);
              } else {
                  myPawn.getKnightTargets('up', row, cell, pieceColor, pieceType);
                  myPawn.getKnightTargets('upRight', row, cell, pieceColor, pieceType);
                  myPawn.getKnightTargets('upLeft', row, cell, pieceColor, pieceType);
              }
          }
      }
  }
}


function Piece(row, cell, pieceType, pieceColor, cellStatus){
  this.row = row;
  this.cell = cell;
  this.pieceType = pieceType;
  this.pieceColor = pieceColor;
  this.cellStatus = cellStatus;
}
Piece.prototype.getTargets = function(direction, row, cell, pieceColor, pieceType){
    var fails = 0;
    var cellsHighlighted = 0;
    var justPainted = false;
    while (fails < 2){
        switch (direction) {
            case 'up':
                row--;
                break;
            case 'right':
                cell++;
                break;
            case 'down':
                row++;
                break;
            case 'left':
                cell--;
                break;
            case 'upLeft':
                row--;
                cell--;
                break;
            case 'upRight':
                row--;
                cell++;
                break;
            case 'downLeft':
                row++;
                cell--;
                break;
            case 'downRight':
                row++;
                cell++;
                break;
        }
        if (row < 0 || cell < 0 || row > 7 || cell > 7){
            break;
        }
        if (boardStateArray[row][cell].cellStatus === 'none'){
            var targetCell = (row) + '' + (cell);
            cellsToPaint.push(targetCell);
            boardStateArray[row][cell].cellStatus = 'available';
            if (fails > 0){
                //break?
            }
            fails = 0;
            justPainted = true;
        }else if (boardStateArray[row][cell].cellStatus === 'piece' && boardStateArray[row][cell].pieceColor === pieceColor){
            break;
        }else if (boardStateArray[row][cell].cellStatus === 'piece' && boardStateArray[row][cell].pieceColor !== pieceColor){
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
function Rook(id, cellObject){
  Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, cellObject.cellStatus);
}
Rook.prototype = Piece.prototype;

function Knight(id, cellObject){
    Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, cellObject.cellStatus);
}
Knight.prototype = Piece.prototype;
Knight.prototype.getKnightTargets = function(direction, row, cell, pieceColor, pieceType) {
    switch (direction) {
        case 'up':
            row--;
            break;
        case 'right':
            cell++;
            break;
        case 'down':
            row++;
            break;
        case 'left':
            cell--;
            break;
        case 'upLeft':
            row--;
            cell--;
            break;
        case 'upRight':
            row--;
            cell++;
            break;
        case 'downLeft':
            row++;
            cell--;
            break;
        case 'downRight':
            row++;
            cell++;
            break;
        case 'upLeftKnight':
            row--;
            row--;
            cell--;
            break;
        case 'upRightKnight':
            row--;
            row--;
            cell++;
            break;
        case 'downLeftKnight':
            row++;
            row++;
            cell--;
            break;
        case 'downRightKnight':
            row++;
            row++
            cell++;
            break;
        case 'rightUpKnight':
            row--;
            cell++;
            cell++;
            break;
        case 'rightDownKnight':
            row++;
            cell++;
            cell++;
            break;
        case 'leftUpKnight':
            row--;
            cell--;
            cell--;
            break;
        case 'leftDownKnight':
            row++;
            cell--;
            cell--;
            break;
    }
    if (row < 0 || cell < 0 || row > 7 || cell > 7){
        break;
    }
    if (boardStateArray[row][cell].cellStatus === 'none'){
        var targetCell = (row) + '' + (cell);
        cellsToPaint.push(targetCell);
        boardStateArray[row][cell].cellStatus = 'available';
    }else if (boardStateArray[row][cell].cellStatus === 'piece' && boardStateArray[row][cell].pieceColor === pieceColor){
        break;
    }else if (boardStateArray[row][cell].cellStatus === 'piece' && boardStateArray[row][cell].pieceColor !== pieceColor){
        break;
        }
};


// Rook.prototype.getRookTargets = function(direction, row, cell, pieceColor) {
//    //piece object constructor (new type of object called piece - contructor that takes x and y, what type of piece, build functions for prototype)
//    //rook and bishop inherit from piece, create a get targets function for each prototype - each has own implementation - take 2d board array and location of piece to decide where piece can go
//    //queen is just rook and bishop get targets functions
//
//
//   // checkAvailable(this, row, cell, 'up', pieceColor);
//   // checkAvailable(this, row, cell, 'right', pieceColor);
//   var fails = 0;
//   var cellsHighlighted = 0;
//   var justPainted = false;
//   while (fails < 2){
//       switch (direction) {
//           case 'up':
//               row--;
//               break;
//           case 'right':
//               cell++;
//               break;
//           case 'down':
//               row++;
//               break;
//           case 'left':
//               cell--;
//               break;
//           case 'upLeft':
//               row--;
//               cell--;
//               break;
//           case 'upRight':
//               row--;
//               cell++;
//               break;
//           case 'downLeft':
//               row++;
//               cell--;
//               break;
//           case 'downRight':
//               row++;
//               cell++;
//               break;
//       }
//       if (row < 0 || cell < 0 || row > 7 || cell > 7){
//           break;
//       }
//       if (boardStateArray[row][cell].cellStatus === 'none'){
//           var targetCell = (row) + '' + (cell);
//           cellsToPaint.push(targetCell);
//           boardStateArray[row][cell].cellStatus = 'available';
//           if (fails > 0){
//               //break?
//           }
//           fails = 0;
//           justPainted = true;
//       }else if (boardStateArray[row][cell].cellStatus === 'piece' && boardStateArray[row][cell].pieceColor === pieceColor){
//           break;
//       }else if (boardStateArray[row][cell].cellStatus === 'piece' && boardStateArray[row][cell].pieceColor !== pieceColor){
//           fails++;
//           if (justPainted && fails === 0){
//               break;
//           }
//           if (fails > 0){
//               justPainted = false;
//           }
//       }
//   }
// };

function Bishop(id, cellObject){
   Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, cellObject.cellStatus);
}
Bishop.prototype = Piece.prototype;
Bishop.prototype.getBishopTargets = function(direction, row, cell, pieceColor){}
   //upLeft, upRight, downLeft, downRight
   // var fails = 0;
   // var cellsHighlighted = 0;
   // var justPainted = false;
   // while (fails < 2){
   //     switch (direction) {
   //         case 'up':
   //             row--;
   //             break;
   //         case 'right':
   //             cell++;
   //             break;
   //         case 'down':
   //             row++;
   //             break;
   //         case 'left':
   //             cell--;
   //             break;
   //         case 'upLeft':
   //             row--;
   //             cell--;
   //             break;
   //         case 'upRight':
   //             row--;
   //             cell++;
   //             break;
   //         case 'downLeft':
   //             row++;
   //             cell--;
   //             break;
   //         case 'downRight':
   //             row++;
   //             cell++;
   //             break;
   //     }
   //     if (row < 0 || cell < 0 || row > 7 || cell > 7){
   //         break;
   //     }
   //     if (boardStateArray[row][cell].cellStatus === 'none'){
   //         var targetCell = (row) + '' + (cell);
   //         cellsToPaint.push(targetCell);
   //         boardStateArray[row][cell].cellStatus = 'available';
   //         if (fails > 0){
   //             //break?
   //         }
   //         fails = 0;
   //         justPainted = true;
   //     }else if (boardStateArray[row][cell].cellStatus === 'piece' && boardStateArray[row][cell].pieceColor === pieceColor){
   //         break;
   //     }else if (boardStateArray[row][cell].cellStatus === 'piece' && boardStateArray[row][cell].pieceColor !== pieceColor){
   //         fails++;
   //         if (justPainted && fails === 0){
   //             break;
   //         }
   //         if (fails > 0){
   //             justPainted = false;
   //         }
   //     }
   // }
   // }


function updateArrays(){}

function updateBoard (typeOfEvent) {
    for(var i = 0; i < boardStateArray.length; i++) {
        for(var j = 0; j < boardStateArray[i].length; j++) {
            var cellClassArray = document.getElementById(boardStateArray[i][j].id).className.split(' ');
            if(typeOfEvent === 'piece moved') {}
            else {
                if(boardStateArray[i][j].cellStatus === 'available') {
                    cellClassArray.push('available-cell');
                } else if(boardStateArray[i][j].cellStatus === 'none') {
                    if(cellClassArray.indexOf('available-cell') !== -1) {
                        cellClassArray.splice(cellClassArray.indexOf('available-cell'), 1);
                    }
                    if(cellClassArray.indexOf('clicked-cell') !== -1) {
                        cellClassArray.splice(cellClassArray.indexOf('clicked-cell'), 1);
                    }
                } else if (boardStateArray[i][j].clicked === true) {
                    cellClassArray.push('clicked-cell');
                } else if(boardStateArray[i][j].cellStatus === 'piece' && cellClassArray.indexOf('clicked-cell') !== -1) {
                    cellClassArray.splice(cellClassArray.indexOf('clicked-cell'), 1);
                    // _availableSquares = [];
                    // boardStateArray[i][j].potentiallyJumped = false;

                }
            }
            document.getElementById(boardStateArray[i][j].id).className = cellClassArray.join(' ');
        }
    }
}
