

export default function GameBoard({ onSelectSquare, board }){

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prev) => {
  //     // 참조값을 사용하는 배열이므로 실제값을 바로 바꾸는 로직
  //     // 이러면 버그 부작용 위험 높아짐
  //     // prev[rowIndex][colIndex] = 'X'

  //     const updatedBoard = [...prev.map(innerArray => [...innerArray])]
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   })

  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) =>(
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                    {playerSymbol}
                </button>
              </li>
          ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}