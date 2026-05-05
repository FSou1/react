type GameControlsProps = {
  boardSize: number
  winLength: number
  onBoardSizeChange: (boardSize: number) => void
  onWinLengthChange: (winLength: number) => void
}

const boardSizeOptions = [3, 4, 5]

export function GameControls ({
  boardSize,
  winLength,
  onBoardSizeChange,
  onWinLengthChange,
}: GameControlsProps) {
  const winLengthOptions = Array.from({ length: boardSize - 2 }, (_, index) => index + 3)

  return (
    <div className='game-controls'>
      <label>
        Board
        <select
          value={boardSize}
          onChange={(event) => onBoardSizeChange(Number(event.target.value))}
        >
          {boardSizeOptions.map((size) => (
            <option key={size} value={size}>
              {size}x{size}
            </option>
          ))}
        </select>
      </label>
      <label>
        Win
        <select
          value={winLength}
          onChange={(event) => onWinLengthChange(Number(event.target.value))}
        >
          {winLengthOptions.map((length) => (
            <option key={length} value={length}>
              {length}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}
