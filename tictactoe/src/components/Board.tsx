import { useMemo, type CSSProperties } from 'react'
import { calculateWinner, isDraw, type Squares } from '../gameLogic'
import { Square } from './Square'

type BoardProps = {
  xIsNext: boolean
  squares: Squares
  onPlay: (nextSquares: Squares) => void
  boardSize: number
  winLength: number
}

export function Board ({ xIsNext, squares, onPlay, boardSize, winLength }: BoardProps) {
  const { winner, line } = useMemo(
    () => calculateWinner(squares, boardSize, winLength),
    [boardSize, squares, winLength],
  )
  const draw = isDraw(squares, winner)
  const gameOver = Boolean(winner) || draw

  function handleClick (i: number) {
    if (gameOver || squares[i]) {
      return
    }

    const nextSquares = squares.slice()
    nextSquares[i] = xIsNext ? 'X' : 'O'
    onPlay(nextSquares)
  }

  const status = winner
    ? 'Winner: ' + winner
    : draw
      ? 'Draw'
      : 'Next player: ' + (xIsNext ? 'X' : 'O')
  const cells = useMemo(
    () => Array.from({ length: boardSize * boardSize }, (_, index) => index),
    [boardSize],
  )

  return (
    <>
      <div aria-live='polite' className='status'>{status}</div>
      <div
        aria-label={`${boardSize} by ${boardSize} tic tac toe board`}
        className='board'
        role='grid'
        style={{ '--board-size': boardSize } as CSSProperties}
      >
        {cells.map((index) => {
          const row = Math.floor(index / boardSize) + 1
          const col = (index % boardSize) + 1
          const value = squares[index]
          const isHighlighted = line?.includes(index) ?? false
          const squareState = value ?? 'empty'
          const highlightText = isHighlighted ? ', winning square' : ''

          return (
            <Square
              key={index}
              value={value}
              onSquareClick={() => handleClick(index)}
              isHighlighted={isHighlighted}
              disabled={gameOver || Boolean(value)}
              label={`Square row ${row} column ${col}, ${squareState}${highlightText}`}
            />
          )
        })}
      </div>
    </>
  )
}
