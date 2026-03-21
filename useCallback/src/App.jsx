import React from 'react'
import { useHover } from './useHover.js'

function App() {
  const [ref, isHovered] = useHover()

  return (
    <div className="app">
      <h1>useHover</h1>
      <div ref={ref}>{isHovered ? 'hovered' : 'not hovered'}</div>
    </div>
  )
}

export default App
