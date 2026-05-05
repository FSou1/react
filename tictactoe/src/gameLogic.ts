export type Player = 'X' | 'O'
export type SquareValue = Player | null
export type Squares = SquareValue[]

export type WinnerResult = {
  winner: Player | null
  line: number[] | null
}

export function createEmptyBoard(boardSize: number): Squares {
  return Array(boardSize * boardSize).fill(null)
}

function getWinningLines(boardSize: number, winLength: number): number[][] {
  const lines: number[][] = []

  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col <= boardSize - winLength; col++) {
      lines.push(Array.from({ length: winLength }, (_, offset) => row * boardSize + col + offset))
    }
  }

  for (let col = 0; col < boardSize; col++) {
    for (let row = 0; row <= boardSize - winLength; row++) {
      lines.push(Array.from({ length: winLength }, (_, offset) => (row + offset) * boardSize + col))
    }
  }

  for (let row = 0; row <= boardSize - winLength; row++) {
    for (let col = 0; col <= boardSize - winLength; col++) {
      lines.push(Array.from({ length: winLength }, (_, offset) => (row + offset) * boardSize + col + offset))
    }
  }

  for (let row = 0; row <= boardSize - winLength; row++) {
    for (let col = winLength - 1; col < boardSize; col++) {
      lines.push(Array.from({ length: winLength }, (_, offset) => (row + offset) * boardSize + col - offset))
    }
  }

  return lines
}

export function calculateWinner(squares: Squares, boardSize: number, winLength = boardSize): WinnerResult {
  const lines = getWinningLines(boardSize, winLength)

  for (const line of lines) {
    const firstSquare = squares[line[0]]
    if (firstSquare && line.every((index) => squares[index] === firstSquare)) {
      return { winner: firstSquare, line }
    }
  }

  return { winner: null, line: null }
}

export function isDraw(squares: Squares, winner: Player | null): boolean {
  return !winner && squares.every(Boolean)
}

export function getMovePosition(previousSquares: Squares, nextSquares: Squares, boardSize: number): string | null {
  const changedIndex = nextSquares.findIndex((square, index) => square !== previousSquares[index])

  if (changedIndex === -1) {
    return null
  }

  const row = Math.floor(changedIndex / boardSize) + 1
  const col = (changedIndex % boardSize) + 1
  return `row ${row}, col ${col}`
}
