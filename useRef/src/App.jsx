import { useIsFirstRender } from './useIsFirstRender'
import { useState } from 'react';

import './App.css'

function App() {
  const isFirstRender = useIsFirstRender();
  const [count, setCount] = useState(0);

  return (
    <main className="app">
      <h1>useRef</h1>
      <p>Is this the first render (only works in production mode)? {isFirstRender ? 'Yes' : 'No'}</p>
      <p>Rerender: <button onClick={() => setCount(count + 1)}>Increment</button></p>
    </main>
  )
}

export default App
