import { useState } from 'react'
import { useIsFirstRender } from './useIsFirstRender'
import { usePrevious } from './usePrevious'
import Stopwatch from './Stopwatch'
import IsMountedExample from './IsMountedExample'

import './App.css'

/*
#1 App
#2 useState
#3 useRef 8 {current: 7} 7
#4 usePrevious return 8 {current: 7} 7
#5 after usePrevious
#6 usePrevious:useEffect 8 {current: 8} 8
*/

function App () {
  const isFirstRender = useIsFirstRender()
  console.log('#1 App')

  const [count, setCount] = useState(0)
  console.log('#2 useState')

  const previousCount = usePrevious(count)
  console.log('#5 after usePrevious')

  const [hideIsMountedExample, setHideIsMountedExample] = useState(false)

  return (
    <main className='app'>
      <h1>useRef</h1>

      <h2>useIsFirstRender</h2>
      <p>
        Is this the first render (only works in production mode)?{' '}
        {isFirstRender ? 'Yes' : 'No'}
      </p>
      <p>
        Rerender: <button onClick={() => setCount(count + 1)}>Increment</button>
      </p>

      <h2>usePrevious</h2>
      <p>Current count: {count}</p>
      <p>Previous count: {previousCount}</p>

      <h2>Stopwatch</h2>
      <Stopwatch />

      <h2>useIsMounted</h2>
      <button onClick={() => setHideIsMountedExample(prev => !prev)}>
        {hideIsMountedExample ? 'Show' : 'Hide'} IsMountedExample
      </button>
      {!hideIsMountedExample && <IsMountedExample />}
    </main>
  )
}

export default App
