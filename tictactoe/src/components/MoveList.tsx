import { getMovePosition, type Squares } from '../gameLogic'

type MoveListProps = {
  history: Squares[]
  currentMove: number
  boardSize: number
  onJumpTo: (move: number) => void
}

export function MoveList ({ history, currentMove, boardSize, onJumpTo }: MoveListProps) {
  const moves = history.map((_, move) => {
    const position = move > 0
      ? getMovePosition(history[move - 1], history[move], boardSize)
      : null
    const description = move > 0
      ? `Go to move #${move}${position ? ` (${position})` : ''}`
      : 'Go to game start'

    return (
      <li key={move}>
        {move > 0 && move === currentMove ? (
          <span>{`Current move${position ? ` (${position})` : ''}`}</span>
        ) : (
          <button onClick={() => onJumpTo(move)}>{description}</button>
        )}
      </li>
    )
  })

  return <ol>{moves}</ol>
}
