

var boardStateArray = [];
// var wPawn = 'String.fromCharCode(parseInt(2659, 16))';
// var wRook = 'String.fromCharCode(parseInt(2656, 16))';
// var wKnight = 'String.fromCharCode(parseInt(2658, 16))';
// var wBishop = 'String.fromCharCode(parseInt(2657, 16))';
// var wKing = 'String.fromCharCode(parseInt(2654, 16))';
// var wQueen = 'String.fromCharCode(parseInt(2655, 16))';
// var bPawn = 'String.fromCharCode(parseInt(265F, 16))';
// var bRook = 'String.fromCharCode(parseInt(265C, 16))';
// var bKnight = 'String.fromCharCode(parseInt(265E, 16))';
// var bBishop = 'String.fromCharCode(parseInt(265D, 16))';
// var bKing = 'String.fromCharCode(parseInt(265A, 16))';
// var bQueen = String.fromCharCode(parseInt(265B, 16));
var empty = '';



function Rook(){}

Rook.prototype = Piece.prototpye;

function Bishop(){}

Bishop.prototype = Piece.prototpye;

function Queen(){}

Queen.prototype = Rook.prototype;
Queen.prototype = Bishop.prototype;

function Knight(){}

function King(){}

setUp();
function setUp() {
    for(var i = 0; i < 8; i++) {
        var rowArray = [];
        for (var j = 0; j < 8; j++) {
            var cell = document.getElementById;
            var cellId = document.getElementById(i + '' + j);
            var cellObject = {
                id: i + '' + j,
                status: 'none',
            }
            cellId.setAttribute('id', i + '' + j);
            rowArray.push(cellObject);
            if (i === 1){
                cellId.innerHTML = String.fromCharCode(parseInt(265F, 16));
                cellObject.piece = 'pawn';
                cellObject.pieceColor = 'black';
                cellObject.status = 'piece';
                cellId.addEventListener("click", function (event){
                    console.log(event);
                    Piece(event.target.id);
                    cellObject.clicked = 'true';
                    });
            } else if (i === 0) {
                cellObject.pieceColor = 'black';
                cellObject.status = 'piece';
                cellId.addEventListener("click", function(event){
                    console.log(event);
                    Piece(event.target.id);
                    cellObject.clicked = 'true';
                    });
                    if (j === 0) {
                        cellId.innerHTML = &#9812;
                        cellObject.piece = 'rook';
                    } else if (j === 7) {
                        cellId.innerHTML = String.fromCharCode(parseInt(265C, 16));
                        cellObject.piece = 'rook';
                    } else if (j === 1) {
                        cellId.innerHTML = String.fromCharCode(parseInt(265E, 16));
                        cellObject.piece = 'knight';
                    } else if (j === 6) {
                        cellId.innerHTML = String.fromCharCode(parseInt(265E, 16));
                        cellObject.piece = 'knight';
                    } else if (j === 2){
                        cellId.innerHTML = String.fromCharCode(parseInt(265D, 16));
                        cellObject.piece = 'bishop';
                    } else if (j === 5){
                        cellId.innerHTML = String.fromCharCode(parseInt(265D, 16));
                        cellObject.piece = 'bishop';
                    } else if (j === 3){
                        cellId.innerHTML = String.fromCharCode(parseInt(265B, 16));
                        cellObject.piece = 'queen';
                    } else if (j === 4){
                        cellId.innerHTML = String.fromCharCode(parseInt(265A, 16));
                        cellObject.piece = 'king';
                    }
            } else if (i === 7) {
                cellObject.pieceColor = 'white';
                cellObject.status = 'piece';
                cellId.addEventListener("click", function (event){
                    console.log(event);
                    Piece(event.target.id);
                    cellObject.clicked = 'true';
                    });
                    if (j === 0) {
                        cellId.innerHTML = String.fromCharCode(parseInt(2656, 16));
                        cellObject.piece = 'rook';
                    } else if (j === 7) {
                        cellId.innerHTML = String.fromCharCode(parseInt(2656, 16));
                        cellObject.piece = 'rook';
                    } else if (j === 1) {
                        cellId.innerHTML = String.fromCharCode(parseInt(2658, 16));
                        cellObject.piece = 'knight';
                    } else if (j === 6) {
                        cellId.innerHTML = String.fromCharCode(parseInt(2658, 16));
                        cellObject.piece = 'knight';
                    } else if (j === 2){
                        cellId.innerHTML = String.fromCharCode(parseInt(2657, 16));
                        cellObject.piece = 'bishop';
                    } else if (j === 5){
                        cellId.innerHTML = String.fromCharCode(parseInt(2657, 16));
                        cellObject.piece = 'bishop';
                    } else if (j === 3){
                        cellId.innerHTML = String.fromCharCode(parseInt(2655, 16));
                        cellObject.piece = 'queen';
                    } else if (j === 4){
                        cellId.innerHTML = String.fromCharCode(parseInt(2654, 16));
                        cellObject.piece = 'king';
                    }
            } else if (i === 6){
                document.getElementById(i + '' + j).innerHTML = String.fromCharCode(parseInt(2659, 16));
                cellObject.piece = 'pawn';
                cellObject.pieceColor = 'white';
                cellObject.status = 'piece';
                cellId.addEventListener("click", function (event){
                    console.log(event);
                    Piece(event.target.id);
                    cellObject.clicked = 'true';
                    });
            } else if (i > 1 && i < 6){
                document.getElementById(i + '' + j).innerHTML = i + '' + j; //print cell numbers
                cellObject.pieceColor = 'none';
                cellObject.status = 'none';
                cellObject.piece = 'none';
                cellId.addEventListener("click", function (event){
                    console.log(event);
                    Piece(event.target.id);
                    cellObject.clicked = 'true';
                    });
            }
        }
        boardStateArray.push(rowArray);
    }
    console.log(boardStateArray);
}

function Piece(id){
    var row = parseInt(id[0]);
    var cell = parseInt(id[1]);
    var cellObject = boardStateArray[row][cell];
}
