import { useState } from "react";
const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function GameBoard() {
  const [originalBoard, setBoard] = useState(initialBoard);
  function handleBoard(index, colIndex) {
    setBoard((oldBoard) => {
      const updateBoard = [...oldBoard.map((innerArray) => [...innerArray])];
      updateBoard[index][colIndex] = "X";
      return updateBoard;
    });
  }
  return (
    <ol id="game-board">
      {initialBoard.map((row, index) => (
        <li key={index}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleBoard(index, colIndex)}>
                  {originalBoard[index][colIndex]}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
export default GameBoard;
