var checkingForCheck = false;
var kingWithinKing = false;
var pieceHighlighted = false;
var opponentColor;
var cellsForCheck = [];
var boardStateArray = [];
var cellsToPaint = [];
var pieceEnRouteHTML;
var pieceEnRouteObj = {};
var turnCount = 0;
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
};
function isEven (number) {
    return number % 2 === 0;
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
            };
            cellId.setAttribute('id', i + '' + j);
            rowArray.push(cellObject);
            if (i === 1){
                // document.getElementById(i + '' + j).innerHTML = i + '' + j; //start: use this when I want to comment out black pawns for testing
                // cellId.addEventListener("click", function (event){
                //     // console.log(event);
                //     movePiece(event.target.id);
                // }); //end
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
                cellId.addEventListener("click", function(event){
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
                cellId.addEventListener("click", function (event){
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
                document.getElementById(i + '' + j).innerHTML = uCode.wPawn; //to test without pawns, comment this out plus next 7 lines
                cellObject.pieceType= 'pawn';
                cellObject.pieceColor = 'white';
                cellObject.firstMove = true;
                cellId.addEventListener("click", function (event){
                    // console.log(event);
                    movePiece(event.target.id);
                    });
                // document.getElementById(i + '' + j).innerHTML = i + '' + j; //to test without pawns, comment this back in, plus next 4 lines
                // cellId.addEventListener("click", function (event){
                //     console.log(event);
                //     movePiece(event.target.id);
                //     });
            } else if (i > 1 && i < 6){
                document.getElementById(i + '' + j).innerHTML = i + '' + j; //print cell numbers
                cellId.addEventListener("click", function (event){
                    movePiece(event.target.id);
                    });
            }
        } boardStateArray.push(rowArray);
    }
}

function movePiece(id){
  var row = parseInt(id[0]);
  var cell = parseInt(id[1]);
  var cellObject = boardStateArray[row][cell];
  var pieceColor = cellObject.pieceColor;
  var firstMove = cellObject.firstMove;
  var clickedCell = document.getElementById(row + '' + cell);
  // if (cellObject.pieceType && !cellObject.painted){
  //     if (isEven(turnCount) && cellObject.pieceColor === 'black') {  //enforces alternating turns
  //       //   swal("Oops!", "Not your turn!", "error");
  //         return;
  //     } else if (!isEven(turnCount) && cellObject.pieceColor === 'white') {
  //       //   swal("Oops!", "Not your turn!", "error");
  //         return;
  //     } else {
  //     }
  // }
  if (checkingForCheck){
        if (pieceColor !== opponentColor){
            return;
        }
    }
    if (cellObject.firstClick === true){ //un-paint clicked cell
          clickedCell.setAttribute('class', 'cell');
          for (var k=0; k < boardStateArray.length; k++){
              for (var l=0; l < boardStateArray.length; l++){
                  if (boardStateArray[k][l].painted === true){
                      document.getElementById(k + '' + l).setAttribute('class', 'cell');
                      delete boardStateArray[k][l].painted;
                      cellsToPaint = [];
                      cellsForCheck = [];
                  }
              }
          }
          delete cellObject.firstClick;
          pieceEnRouteObj = {};
          pieceEnRouteHTML = '';
          pieceHighlighted = false;
          return;
      } else if (cellObject.painted === true && !checkingForCheck) {
          cellObject.newLocation = true;
          updateBoards();
          turnCount++;
          pieceHighlighted = false;
          return; //to prevent repainting bug
      } else if (!checkingForCheck) {
          if (pieceHighlighted){
              return;
          }
          pieceEnRouteHTML = document.getElementById(row + '' + cell).innerHTML; //temporary storage for moving piece
          pieceEnRouteObj.pieceType = cellObject.pieceType;
          pieceEnRouteObj.pieceColor = cellObject.pieceColor;
          pieceEnRouteObj.firstMove = cellObject.firstMove;
          pieceEnRouteObj.id = cellObject.id;
          if (!checkingForCheck && !pieceHighlighted){
              if(!cellObject.painted && !cellObject.pieceType){
                  return;
              }
              cellObject.firstClick = true;
              clickedCell.setAttribute('class', 'clicked-cell');
              pieceHighlighted = true;
          }
      }
      switch (cellObject.pieceType) {
          case 'rook':
          var myRook = new Rook(id, cellObject, boardStateArray, checkingForCheck);
          myRook.getTargets('up', row, cell);
          myRook.getTargets('down', row, cell);
          myRook.getTargets('left', row, cell);
          myRook.getTargets('right', row, cell);
          cellsToPaint = myRook.cellsToPaint;
          if (!checkingForCheck){
              paintTargets(cellsToPaint);
          }
          break;
          case 'bishop':
          var myBishop = new Bishop(id, cellObject, boardStateArray, checkingForCheck);
          myBishop.getTargets('upRight', row, cell);
          myBishop.getTargets('upLeft', row, cell);
          myBishop.getTargets('downRight', row, cell);
          myBishop.getTargets('downLeft', row, cell);
          cellsToPaint = myBishop.cellsToPaint;
          if (!checkingForCheck){
              paintTargets(cellsToPaint);
          }
          break;
          case 'queen':
          var myQueen = new Queen(id, cellObject, boardStateArray, checkingForCheck);
          myQueen.getTargets('up', row, cell);
          myQueen.getTargets('down', row, cell);
          myQueen.getTargets('left', row, cell);
          myQueen.getTargets('right', row, cell);
          myQueen.getTargets('upRight', row, cell);
          myQueen.getTargets('upLeft', row, cell);
          myQueen.getTargets('downRight', row, cell);
          myQueen.getTargets('downLeft', row, cell);
          cellsToPaint = myQueen.cellsToPaint;
          if (!checkingForCheck){
              paintTargets(cellsToPaint);
          }
          break;
          case 'knight':
          var myKnight = new Knight(id, cellObject, boardStateArray, checkingForCheck);
          myKnight.getKnightTargets('upLeftKnight', row, cell);
          myKnight.getKnightTargets('upRightKnight', row, cell);
          myKnight.getKnightTargets('downLeftKnight', row, cell);
          myKnight.getKnightTargets('downRightKnight', row, cell);
          myKnight.getKnightTargets('rightUpKnight', row, cell);
          myKnight.getKnightTargets('rightDownKnight', row, cell);
          myKnight.getKnightTargets('leftUpKnight', row, cell);
          myKnight.getKnightTargets('leftDownKnight', row, cell);
          cellsToPaint = myKnight.cellsToPaint;
          if (!checkingForCheck){
              paintTargets(cellsToPaint);
          }
          break;
          case 'king':
          var myKing = new King(id, cellObject, boardStateArray, checkingForCheck);
          myKing.getKingTargets('up', row, cell);
          myKing.getKingTargets('down', row, cell);
          myKing.getKingTargets('left', row, cell);
          myKing.getKingTargets('right', row, cell);
          myKing.getKingTargets('upRight', row, cell);
          myKing.getKingTargets('upLeft', row, cell);
          myKing.getKingTargets('downRight', row, cell);
          myKing.getKingTargets('downLeft', row, cell);
          if (!kingWithinKing){
              cellsToPaint = myKing.cellsToPaint;
              checkingForCheck = true;
              if (pieceColor === 'black') {
                  opponentColor = 'white';
              } else {
                  opponentColor = 'black';
              }
              checkForCheck();
          }
          if (!kingWithinKing){
              checkingForCheck = false;
              paintTargets(cellsToPaint);
          }
          break;
          case 'pawn':
          var myPawn = new Pawn(id, cellObject, boardStateArray, checkingForCheck);
          if (cellObject.firstMove === undefined){
              cellObject.firstMove = true;
          }
          if (pieceColor === 'black'){
              myPawn.getPawnTargets('down', row, cell);
              myPawn.getPawnTargets('downRight', row, cell);
              myPawn.getPawnTargets('downLeft', row, cell);
              if (cellObject.firstMove === true){
                  myPawn.getPawnTargets('firstDownPawn', row, cell);
                    //  cellObject.firstMove = false; //move this to movePiece or updateBoard function
                 }
             }else{
                 myPawn.getPawnTargets('up', row, cell);
                 myPawn.getPawnTargets('upRight', row, cell);
                 myPawn.getPawnTargets('upLeft', row, cell);
                 if (cellObject.firstMove === true){
                     myPawn.getPawnTargets('firstUpPawn', row, cell);
                 }
             }
             cellsToPaint = myPawn.cellsToPaint;
             if (!checkingForCheck){
                 paintTargets(cellsToPaint);
             }
             break;
         }
     }

function checkForCheck(){ //checks to see if King's available spaces could move him into check
  for (var i = 0; i < boardStateArray.length; i++){
      for(var j= 0; j < boardStateArray[i].length; j++){
          if (boardStateArray[i][j].pieceType && boardStateArray[i][j].pieceColor === opponentColor){
              if (boardStateArray[i][j].pieceType === 'king'){
                  kingWithinKing = true;
                  movePiece(i + '' + j);
                  kingWithinKing = false;
              } else {
                  movePiece(i + '' + j);
              }
          }
      }
      for(var k = 0; k < cellsToPaint.length; k++){
          for(var l = 0; l < cellsForCheck.length; l++){
              if(cellsToPaint[k] === cellsForCheck[l]){
                  cellsToPaint.splice(k, 1); //LESSON! THIS IS THE WRONG WAY TO SPLICE: cellsToPaint.splice(cellsToPaint[k], 1);
                //   boardStateArray[k[0] + '' + k[1]).painted = false;
                  k--;
              }
          }
      }
  }
}




function Piece(row, cell, pieceType, pieceColor, boardStateArray, checkingForCheck){
  this.row = row;
  this.cell = cell;
  this.pieceType = pieceType;
  this.pieceColor = pieceColor;
  this.boardStateArray = boardStateArray;
  this.checkingForCheck = checkingForCheck;
  this.cellsToPaint = cellsToPaint;
  this.cellsForCheck = cellsForCheck;
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
            if (checkingForCheck){
                this.cellsForCheck.push(targetCell);
            } else {
                this.cellsToPaint.push(targetCell);
                // this.boardStateArray[this.row][this.cell].painted = true;
            }
        }else if (this.boardStateArray[this.row][this.cell] && this.boardStateArray[this.row][this.cell].pieceColor === this.pieceColor){
            // if (checkingForCheck){
            //     this.cellsForCheck.push(targetCell);
            // }
            break;
        }else if (this.boardStateArray[this.row][this.cell] && this.boardStateArray[this.row][this.cell].pieceColor !== this.pieceColor){
            var targetCell = (this.row) + '' + (this.cell);
            if (checkingForCheck){
                this.cellsForCheck.push(targetCell);
            } else {
                this.cellsToPaint.push(targetCell);
                // this.boardStateArray[this.row][this.cell].painted = true;
            }
            potentialCapture++;
            break;
        }
    }
};

function Rook(id, cellObject, boardStateArray, checkingForCheck){
  Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, boardStateArray);
}
Rook.prototype = Piece.prototype;


function Bishop(id, cellObject, boardStateArray, checkingForCheck){
   Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, boardStateArray);
}
Bishop.prototype = Piece.prototype;


function Queen(id, cellObject, boardStateArray, checkingForCheck){
   Piece.call(this, parseInt(id[0]), parseInt(id[1]), cellObject.pieceType, cellObject.pieceColor, boardStateArray);
}
Queen.prototype = Piece.prototype;



function Knight(id, cellObject, boardStateArray, checkingForCheck){
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
            this.row++;
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
        return;
    }
    if (!this.boardStateArray[this.row][this.cell].pieceType){
        var targetCell = (this.row) + '' + (this.cell);
        if (checkingForCheck){
            this.cellsForCheck.push(targetCell);
        } else {
            this.cellsToPaint.push(targetCell);
            // this.boardStateArray[this.row][this.cell].painted = true;
        }
    }else if (this.boardStateArray[this.row][this.cell] && this.boardStateArray[this.row][this.cell].pieceColor === this.pieceColor){
        // if (checkingForCheck){
        //     this.cellsForCheck.push(targetCell);
        // }
        return;
    }else if (this.boardStateArray[this.row][this.cell] && this.boardStateArray[this.row][this.cell].pieceColor !== this.pieceColor){
        var targetCell = (this.row) + '' + (this.cell);
        if (checkingForCheck){
            this.cellsForCheck.push(targetCell);
        } else {
            this.cellsToPaint.push(targetCell);
            // this.boardStateArray[this.row][this.cell].painted = true;
        }
        return;
        }
};



function King(id, cellObject, boardStateArray, checkingForCheck){
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
        if (checkingForCheck){
            this.cellsForCheck.push(targetCell);
        } else {
            this.cellsToPaint.push(targetCell);
            // this.boardStateArray[this.row][this.cell].painted = true;
        }
    }else if (this.boardStateArray[this.row][this.cell] && this.boardStateArray[this.row][this.cell].pieceColor === this.pieceColor){
        // if (checkingForCheck){
        //     this.cellsForCheck.push(targetCell);
        // }
        return;
    }else if (this.boardStateArray[this.row][this.cell] && this.boardStateArray[this.row][this.cell].pieceColor !== this.pieceColor){
        var targetCell = (this.row) + '' + (this.cell);
        if (checkingForCheck){
            this.cellsForCheck.push(targetCell);
        } else {
            this.cellsToPaint.push(targetCell);
            // this.boardStateArray[this.row][this.cell].painted = true;
        }
        return;
        }
};



function Pawn(id, cellObject, boardStateArray, checkingForCheck){
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
           if (this.boardStateArray[this.row][this.cell].pieceType){
               break;
           }else{
               this.row++;
           }
           break;
       case 'firstUpPawn':
           this.row--;
           if (this.boardStateArray[this.row][this.cell].pieceType){
               break;
           }else{
               this.row--;
           }
            break;
    }
    if (this.row < 0 || this.cell < 0 || this.row > 7 || this.cell > 7){
        return;
    }
       if (direction === 'upLeft' || direction === 'upRight' || direction === 'downLeft' || direction === 'downRight'){
           if (checkingForCheck){
               var targetCell = (this.row) + '' + (this.cell);
               this.cellsForCheck.push(targetCell);
           }
           else if (!this.boardStateArray[this.row][this.cell].pieceType){
               return;
           }
       }
       if (direction === 'up' || direction === 'down' || direction === 'firstUpPawn' || direction === 'firstDownPawn'){
           if (checkingForCheck){
               return;
           }
           else if (this.boardStateArray[this.row][this.cell].pieceType){
               return;
           }
       }
    if (!this.boardStateArray[this.row][this.cell].pieceType){
        var targetCell = (this.row) + '' + (this.cell);
        if (checkingForCheck){
            this.cellsForCheck.push(targetCell);
        } else {
            this.cellsToPaint.push(targetCell);
            // this.boardStateArray[this.row][this.cell].painted = true;
        }
        return;
        // this.boardStateArray[this.row][this.cell].cellStatus = 'available';
    }else if (this.boardStateArray[this.row][this.cell] && this.boardStateArray[this.row][this.cell].pieceColor === this.pieceColor){
        // if (checkingForCheck){
        //     this.cellsForCheck.push(targetCell);
        // }
        return;
    }else if (this.boardStateArray[this.row][this.cell] && this.boardStateArray[this.row][this.cell].pieceColor !== this.pieceColor){
        var targetCell = (this.row) + '' + (this.cell);
        if (checkingForCheck){
            this.cellsForCheck.push(targetCell);
        } else {
            this.cellsToPaint.push(targetCell);
            // this.boardStateArray[this.row][this.cell].painted = true;
        }
        return;
        }
};



function paintTargets(cellsToPaint, cellObject, row, cell){
    var availableRow;
   var availableCell;
   var cellClassArray;
   for (var i=0; i < cellsToPaint.length; i++){
       availableRow = parseInt(cellsToPaint[i][0]);
       availableCell = parseInt(cellsToPaint[i][1]);
       var cellId = document.getElementById(availableRow + '' + availableCell);
       cellId.setAttribute('class', 'available-cell');
       boardStateArray[availableRow][availableCell].painted = true;
   }
}

function updateBoards(){
    for (var i = 0; i < boardStateArray.length; i++){
        delete pieceEnRouteObj.firstClick;
        for(var j= 0; j < boardStateArray[i].length; j++){
            if (boardStateArray[i][j].firstClick === true) {
                document.getElementById(i + '' + j).innerHTML = i + '' + j; //print cell numbers
                document.getElementById(i + '' + j).setAttribute('class', 'cell');
                delete boardStateArray[i][j].firstClick;
                delete boardStateArray[i][j].pieceType;
                delete boardStateArray[i][j].pieceColor;
            }
            if (boardStateArray[i][j].newLocation === true){
                if (boardStateArray[i][j].pieceType){
                   document.getElementById(i + '' + j).innerHTML = i + '' + j;
                }
                document.getElementById(i + '' + j).innerHTML = pieceEnRouteHTML; //print piece in location
                document.getElementById(i + '' + j).setAttribute('class', 'cell');
                boardStateArray[i][j] = pieceEnRouteObj;
                // boardStateArray[i][j].firstClick = pieceEnRouteObj.firstClick;
                delete boardStateArray[i][j].newLocation;
                // delete boardStateArray[i][j].firstMove;
                // boardStateArray[i][j].firstClick = false;
                boardStateArray[i][j].firstMove = false; //first move is false so that pawn will not paint two cells after its first move

            }
            if (boardStateArray[i][j].painted === true){
                document.getElementById(i + '' + j).setAttribute('class', 'cell');
                delete boardStateArray[i][j].painted;
            }
        }
    }
    cellsToPaint = [];
    cellsForCheck = [];
    pieceEnRouteHTML = '';
    pieceEnRouteObj = {};
    opponentColor = '';
    pieceHighlighted = false;
}
