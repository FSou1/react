import { useState } from 'react'
import useClickOutside from '../hooks/useClickOutside'

export default function ClickOutsideDemo () {
  const [count, setCount] = useState(0)

  const ref = useClickOutside(() => {
    console.log(`Clicked outside with count at ${count}`)
  })

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <div
        ref={ref}
        style={{
          width: 200,
          height: 100,
          border: '1px solid black',
          marginTop: 20
        }}
      >
        Inside
      </div>
    </div>
  )
}
