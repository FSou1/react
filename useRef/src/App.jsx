import { useState } from 'react'
import DemoSection from './components/DemoSection'
import ClickOutsideDemo from './demos/ClickOutsideDemo'
import FirstRenderDemo from './demos/FirstRenderDemo'
import FocusDemo from './demos/FocusDemo'
import IsMountedDemo from './demos/IsMountedDemo'
import PreviousValueDemo from './demos/PreviousValueDemo'
import StopwatchDemo from './demos/StopwatchDemo'
import UpdateEffectDemo from './demos/UpdateEffectDemo'
import { useFocus } from './hooks/useFocus'
import { useIsFirstRender } from './hooks/useIsFirstRender'
import { usePrevious } from './hooks/usePrevious'

import './App.css'

function App () {
  const isFirstRender = useIsFirstRender()
  const [count, setCount] = useState(0)
  const previousCount = usePrevious(count)
  const [hideIsMountedExample, setHideIsMountedExample] = useState(false)
  const [hideUseClickOutside, setHideUseClickOutside] = useState(false)
  const [ref, isFocused] = useFocus()

  return (
    <main className='app'>
      <header className='app__hero'>
        <p className='app__eyebrow'>React hook demos</p>
        <h1>useRef</h1>
        <p className='app__intro'>
          A small playground for common patterns built on `useRef`, organized by
          example instead of one large page component.
        </p>
      </header>

      <div className='app__grid'>
        <DemoSection
          title='useIsFirstRender'
          description='Track whether the current render is the first one.'
        >
          <FirstRenderDemo
            count={count}
            isFirstRender={isFirstRender}
            onIncrement={() => setCount(prevCount => prevCount + 1)}
          />
        </DemoSection>

        <DemoSection
          title='usePrevious'
          description='Store the previous value from the last committed render.'
        >
          <PreviousValueDemo count={count} previousCount={previousCount} />
        </DemoSection>

        <DemoSection
          title='Stopwatch'
          description='Use refs for mutable timer state without extra re-renders.'
        >
          <StopwatchDemo />
        </DemoSection>

        <DemoSection
          title='useIsMounted'
          description='Toggle a mounted example that cancels work during cleanup.'
        >
          <button onClick={() => setHideIsMountedExample(prev => !prev)}>
            {hideIsMountedExample ? 'Show' : 'Hide'} mounted example
          </button>
          {!hideIsMountedExample && <IsMountedDemo />}
        </DemoSection>

        <DemoSection
          title='useClickOutside'
          description='Track pointer events outside a referenced element.'
        >
          <button onClick={() => setHideUseClickOutside(prev => !prev)}>
            {hideUseClickOutside ? 'Show' : 'Hide'} click outside demo
          </button>
          {!hideUseClickOutside && <ClickOutsideDemo />}
        </DemoSection>

        <DemoSection
          title='useFocus'
          description='Attach focus and blur listeners to an input element.'
        >
          <FocusDemo inputRef={ref} isFocused={isFocused} />
        </DemoSection>

        <DemoSection
          title='useUpdateEffect'
          description='Run an effect only after the initial mount has passed.'
        >
          <UpdateEffectDemo />
        </DemoSection>
      </div>
    </main>
  )
}

export default App
