import React from 'react'
import { useState } from 'react'
import { useUpdateEffect } from '../hooks/useUpdateEffect'

export default function UpdateEffectDemo () {
  const [count, setCount] = useState(0)
  const isFirstRender = React.useRef(true)

  useUpdateEffect(() => {
    isFirstRender.current = false
  }, [count])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Is first render: {isFirstRender.current ? 'Yes' : 'No'}</p>
    </div>
  )
}
