import { useState } from 'react'
import { Board } from './components/Board'
import { GameControls } from './components/GameControls'
import { MoveList } from './components/MoveList'
import { createEmptyBoard, type Squares } from './gameLogic'

const BOARD_SIZE = 4

export default function Game () {
  const [boardSize, setBoardSize] = useState(BOARD_SIZE)
  const [winLength, setWinLength] = useState(BOARD_SIZE)
  const [history, setHistory] = useState<Squares[]>([createEmptyBoard(BOARD_SIZE)])
  const [currentMove, setCurrentMove] = useState(0)
  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  function handlePlay (nextSquares: Squares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo (nextMove: number) {
    setCurrentMove(nextMove)
  }

  function resetGame(nextBoardSize: number, nextWinLength: number) {
    setBoardSize(nextBoardSize)
    setWinLength(Math.min(nextWinLength, nextBoardSize))
    setHistory([createEmptyBoard(nextBoardSize)])
    setCurrentMove(0)
  }

  function handleBoardSizeChange(nextBoardSize: number) {
    resetGame(nextBoardSize, Math.min(winLength, nextBoardSize))
  }

  function handleWinLengthChange(nextWinLength: number) {
    resetGame(boardSize, nextWinLength)
  }

  return (
    <div className='game'>
      <div className='game-board'>
        <GameControls
          boardSize={boardSize}
          winLength={winLength}
          onBoardSizeChange={handleBoardSizeChange}
          onWinLengthChange={handleWinLengthChange}
        />
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          boardSize={boardSize}
          winLength={winLength}
        />
      </div>
      <div className='game-info'>
        <MoveList history={history} currentMove={currentMove} boardSize={boardSize} onJumpTo={jumpTo} />
      </div>
    </div>
  )
}
