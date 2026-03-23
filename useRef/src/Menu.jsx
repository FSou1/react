import { useState } from 'react'
import useClickOutside from './useClickOutside'

export default function Menu () {
  const [count, setCount] = useState(0)

  const ref = useClickOutside(() => {
    console.log('count =', count)
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
