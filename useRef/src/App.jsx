import { useState } from 'react'
import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
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

function FirstRenderRoute () {
  const isFirstRender = useIsFirstRender()
  const [count, setCount] = useState(0)

  return (
    <FirstRenderDemo
      count={count}
      isFirstRender={isFirstRender}
      onIncrement={() => setCount(prevCount => prevCount + 1)}
    />
  )
}

function PreviousValueRoute () {
  const [count, setCount] = useState(0)
  const previousCount = usePrevious(count)

  return (
    <>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
      <PreviousValueDemo count={count} previousCount={previousCount} />
    </>
  )
}

function FocusRoute () {
  const [ref, isFocused] = useFocus()

  return (
    <FocusDemo inputRef={ref} isFocused={isFocused} />
  )
}

const demoRoutes = [
  {
    slug: 'use-is-first-render',
    title: 'useIsFirstRender',
    description: 'Track whether the current render is the first one.',
    component: FirstRenderRoute
  },
  {
    slug: 'use-previous',
    title: 'usePrevious',
    description: 'Store the previous value from the last committed render.',
    component: PreviousValueRoute
  },
  {
    slug: 'stopwatch',
    title: 'Stopwatch',
    description: 'Use refs for mutable timer state without extra re-renders.',
    component: StopwatchDemo
  },
  {
    slug: 'use-is-mounted',
    title: 'useIsMounted',
    description: 'Run async work safely while tracking the mounted lifecycle.',
    component: IsMountedDemo
  },
  {
    slug: 'use-click-outside',
    title: 'useClickOutside',
    description: 'Track pointer events outside a referenced element.',
    component: ClickOutsideDemo
  },
  {
    slug: 'use-focus',
    title: 'useFocus',
    description: 'Attach focus and blur listeners to an input element.',
    component: FocusRoute
  },
  {
    slug: 'use-update-effect',
    title: 'useUpdateEffect',
    description: 'Run an effect only after the initial mount has passed.',
    component: UpdateEffectDemo
  }
]

const defaultDemo = demoRoutes[0]

function App () {
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

      <div className='app__layout'>
        <aside className='app__sidebar' aria-label='Examples'>
          <p className='app__sidebar-label'>Examples</p>
          <nav className='app__nav'>
            {demoRoutes.map(demo => (
              <NavLink
                key={demo.slug}
                to={`/${demo.slug}`}
                className={({ isActive }) =>
                  `app__nav-link${isActive ? ' app__nav-link--active' : ''}`
                }
              >
                <span className='app__nav-title'>{demo.title}</span>
                <span className='app__nav-description'>{demo.description}</span>
              </NavLink>
            ))}
          </nav>
        </aside>

        <section className='app__content' aria-live='polite'>
          <Routes>
            <Route
              path='/'
              element={<Navigate to={`/${defaultDemo.slug}`} replace />}
            />
            {demoRoutes.map(demo => {
              const DemoComponent = demo.component

              return (
                <Route
                  key={demo.slug}
                  path={`/${demo.slug}`}
                  element={
                    <DemoSection
                      title={demo.title}
                      description={demo.description}
                    >
                      <DemoComponent />
                    </DemoSection>
                  }
                />
              )
            })}
            <Route
              path='*'
              element={<Navigate to={`/${defaultDemo.slug}`} replace />}
            />
          </Routes>
        </section>
      </div>
    </main>
  )
}

export default App
