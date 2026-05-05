import '@testing-library/jest-dom/vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import Game from './App'

afterEach(() => {
  cleanup()
})

function clickSquare(row: number, col: number) {
  fireEvent.click(screen.getByRole('button', { name: new RegExp(`row ${row} column ${col}`, 'i') }))
}

describe('Game', () => {
  it('alternates players and disables filled squares', () => {
    render(<Game />)

    clickSquare(1, 1)

    expect(screen.getByText('Next player: O')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /row 1 column 1, X/i })).toBeDisabled()
  })

  it('shows the winning status and disables the board after a win', () => {
    render(<Game />)

    clickSquare(1, 1)
    clickSquare(2, 1)
    clickSquare(1, 2)
    clickSquare(2, 2)
    clickSquare(1, 3)
    clickSquare(2, 3)
    clickSquare(1, 4)

    expect(screen.getByText('Winner: X')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /row 3 column 3, empty/i })).toBeDisabled()
    expect(screen.getByRole('button', { name: /row 1 column 1, X, winning square/i })).toBeInTheDocument()
  })

  it('shows draw status on a full board with no winner', () => {
    render(<Game />)

    fireEvent.change(screen.getByLabelText('Board'), { target: { value: '3' } })
    clickSquare(1, 1)
    clickSquare(1, 2)
    clickSquare(1, 3)
    clickSquare(2, 2)
    clickSquare(2, 1)
    clickSquare(2, 3)
    clickSquare(3, 2)
    clickSquare(3, 1)
    clickSquare(3, 3)

    expect(screen.getByText('Draw')).toBeInTheDocument()
  })

  it('shows move coordinates in history', () => {
    render(<Game />)

    clickSquare(2, 3)

    expect(screen.getByText('Current move (row 2, col 3)')).toBeInTheDocument()
  })

  it('resets the game when board size changes', () => {
    render(<Game />)

    clickSquare(1, 1)
    fireEvent.change(screen.getByLabelText('Board'), { target: { value: '3' } })

    expect(screen.getByText('Next player: X')).toBeInTheDocument()
    expect(screen.getByLabelText('3 by 3 tic tac toe board')).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /Go to move #1/i })).not.toBeInTheDocument()
  })
})
