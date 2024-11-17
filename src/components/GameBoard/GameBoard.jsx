import "./GameBoard.css";

export default function GameBoard({onSelectSquare, board}) {
  // State was lifted to the app component so it can be used by the log component. This code is left as reference.
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  //
  // function handleSelectSquare(rowIdx, colIdx) {
  //   setGameBoard(prevGameBoard => {
  //     // State that depends on objects should be updated in an immutable way:
  //     // a copy should be made to avoid modifying the state before the scheduled update
  //     const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
  //     updatedBoard[rowIdx][colIdx] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //
  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {
        board.map((row, rowIdx) => (
          <li key={rowIdx}>
            <ol>
              {
                row.map((playerSymbol, colIdx) => (
                  <li key={colIdx}>
                    <button onClick={() => onSelectSquare(rowIdx, colIdx)} disabled={playerSymbol !== null}>
                      {playerSymbol}
                    </button>
                  </li>
                ))
              }
            </ol>
          </li>
        ))
      }
    </ol>
  );
}
