/* 
 Description -> Function to be used to create a fresh board.
 Function name -> createBoard
 Arguments -> numOfRows, numOfCol, bombsCount
 Return -> Object of array of board and minelocation
*/
export function createBoard(numOfRows, numOfCol, bombs) {
    const board = [];
    const mineLocation = [];
    let bombsCount = 0;

    for (let x = 0; x < numOfRows; x++) {
        let subCol = [];
        for (let y = 0; y < numOfCol; y++) {
            subCol.push({
                value: 0,
                revealed: false,
                x: x,
                y: y,
                flagged: false,
            });
        }
        board.push(subCol);
    }

    while (bombsCount < bombs) {
        let x = randomNum(0, numOfRows - 1);
        let y = randomNum(0, numOfCol - 1);

        if (board[x][y].value === 0) {
            board[x][y].value = "X";
            mineLocation.push([x, y]);
            bombsCount++;
        }
    }

    for (var currRow = 0; currRow < numOfRows; currRow++) {
        for (var currCol = 0; currCol < numOfCol; currCol++) {
            if (board[currRow][currCol].value === "X") {
                continue;
            }

            if (currRow > 0 && currCol > 0 && board[currRow - 1][currCol - 1].value === "X") {
                board[currRow][currCol].value++;
            }

            if (currCol > 0 && board[currRow][currCol - 1].value === "X") {
                board[currRow][currCol].value++;
            }

            if (currRow < numOfRows - 1 && currCol > 0 && board[currRow + 1][currCol - 1].value === "X") {
                board[currRow][currCol].value++;
            }

            if (currRow < numOfRows - 1 && board[currRow + 1][currCol].value === "X") {
                board[currRow][currCol].value++;
            }

            if (currRow < numOfRows - 1 && currCol < numOfCol - 1 && board[currRow + 1][currCol + 1].value === "X") {
                board[currRow][currCol].value++;
            }

            if (currCol < numOfCol - 1 && board[currRow][currCol + 1].value === "X") {
                board[currRow][currCol].value++;
            }

            if (currRow > 0 && currCol < numOfCol - 1 && board[currRow - 1][currCol + 1].value === "X") {
                board[currRow][currCol].value++;
            }

            if (currRow > 0 && board[currRow - 1][currCol].value === "X") {
                board[currRow][currCol].value++;
            }
        }
    }
    return { board, mineLocation };
}


/* 
 Description -> Function to get random cell of table
 Function name -> randomNum
 Arguments -> min, max
 Return -> random index return
*/
function randomNum(min = 0, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
