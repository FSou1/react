import type { SquareValue } from '../gameLogic'

type SquareProps = {
  value: SquareValue
  onSquareClick: () => void
  isHighlighted: boolean
  disabled: boolean
  label: string
}

export function Square ({ value, onSquareClick, isHighlighted, disabled, label }: SquareProps) {
  return (
    <button
      aria-label={label}
      className={`square ${isHighlighted ? 'highlighted' : ''}`}
      disabled={disabled}
      onClick={onSquareClick}
    >
      {value}
    </button>
  )
}
