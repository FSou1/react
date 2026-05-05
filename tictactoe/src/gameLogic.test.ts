import { describe, expect, it } from 'vitest'
import {
  calculateWinner,
  getMovePosition,
  isDraw,
  type SquareValue,
  type Squares,
} from './gameLogic'

const boardSize = 4

function createBoard(values: Record<number, SquareValue>): Squares {
  const squares: Squares = Array(boardSize * boardSize).fill(null)
  for (const [index, value] of Object.entries(values)) {
    squares[Number(index)] = value
  }
  return squares
}

describe('calculateWinner', () => {
  it('finds a row winner', () => {
    const result = calculateWinner(createBoard({ 4: 'X', 5: 'X', 6: 'X', 7: 'X' }), boardSize)

    expect(result).toEqual({ winner: 'X', line: [4, 5, 6, 7] })
  })

  it('finds a column winner', () => {
    const result = calculateWinner(createBoard({ 2: 'O', 6: 'O', 10: 'O', 14: 'O' }), boardSize)

    expect(result).toEqual({ winner: 'O', line: [2, 6, 10, 14] })
  })

  it('finds the top-left to bottom-right diagonal winner', () => {
    const result = calculateWinner(createBoard({ 0: 'X', 5: 'X', 10: 'X', 15: 'X' }), boardSize)

    expect(result).toEqual({ winner: 'X', line: [0, 5, 10, 15] })
  })

  it('finds the top-right to bottom-left diagonal winner', () => {
    const result = calculateWinner(createBoard({ 3: 'O', 6: 'O', 9: 'O', 12: 'O' }), boardSize)

    expect(result).toEqual({ winner: 'O', line: [3, 6, 9, 12] })
  })

  it('returns no winner for an empty board', () => {
    const result = calculateWinner(createBoard({}), boardSize)

    expect(result).toEqual({ winner: null, line: null })
  })

  it('returns no winner for mixed non-winning lines', () => {
    const result = calculateWinner(
      createBoard({
        0: 'X',
        1: 'O',
        2: 'X',
        3: 'O',
        5: 'X',
        6: 'O',
        9: 'O',
        10: 'O',
        12: 'X',
        15: 'X',
      }),
      boardSize,
    )

    expect(result).toEqual({ winner: null, line: null })
  })

  it('detects a draw when the board is full with no winner', () => {
    const squares = createBoard({
      0: 'X',
      1: 'O',
      2: 'X',
      3: 'O',
      4: 'O',
      5: 'X',
      6: 'O',
      7: 'X',
      8: 'X',
      9: 'O',
      10: 'O',
      11: 'X',
      12: 'X',
      13: 'X',
      14: 'O',
      15: 'O',
    })

    expect(isDraw(squares, null)).toBe(true)
  })

  it('does not report a draw when a full board has a winner', () => {
    const squares = createBoard({
      0: 'X',
      1: 'X',
      2: 'X',
      3: 'X',
      4: 'O',
      5: 'O',
      6: 'X',
      7: 'O',
      8: 'X',
      9: 'O',
      10: 'O',
      11: 'X',
      12: 'O',
      13: 'X',
      14: 'O',
      15: 'X',
    })
    const { winner } = calculateWinner(squares, boardSize)

    expect(isDraw(squares, winner)).toBe(false)
  })

  it('finds shorter winning lines on a larger board', () => {
    const result = calculateWinner(createBoard({ 0: 'X', 5: 'X', 10: 'X' }), boardSize, 3)

    expect(result).toEqual({ winner: 'X', line: [0, 5, 10] })
  })

  it('describes the changed move position', () => {
    const previousSquares = createBoard({ 0: 'X' })
    const nextSquares = createBoard({ 0: 'X', 6: 'O' })

    expect(getMovePosition(previousSquares, nextSquares, boardSize)).toBe('row 2, col 3')
  })
})
