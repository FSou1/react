import { useEffect, useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import { attributePages } from './attributePages'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return window.localStorage.getItem('theme') !== 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = isDarkMode ? 'dark' : 'light'
    window.localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <main className="app-shell">
      <header className="app-shell__header">
        <div className="app-shell__header-row">
          <div>
            <p className="app-shell__eyebrow">Reference project</p>
            <h1>{`Accessibility Attributes (${attributePages.length})`}</h1>
          </div>

          <label className="theme-toggle">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={(event) => setIsDarkMode(event.target.checked)}
            />
            <span className="theme-toggle__track" aria-hidden="true">
              <span className="theme-toggle__thumb" />
            </span>
            <span className="theme-toggle__label">Dark mode</span>
          </label>
        </div>

        <p className="app-shell__intro">
          Add one accessibility attribute per page. The starter app is mostly
          empty on purpose, with a single mock page that shows the layout for
          future entries.
        </p>
      </header>

      <div className="app-shell__layout">
        <aside className="app-shell__sidebar" aria-label="Project navigation">
          <nav className="app-shell__nav">
            {attributePages.map((page) => (
              <NavLink
                key={page.path}
                to={page.path}
                className={({ isActive }) =>
                  `app-shell__nav-link${isActive ? ' app-shell__nav-link--active' : ''}`
                }
              >
                {page.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <section className="app-shell__content">
          <Routes>
            {attributePages.map((page) => {
              const PageComponent = page.component

              return (
                <Route
                  key={page.path}
                  path={page.path}
                  element={<PageComponent />}
                />
              )
            })}
            <Route path="*" element={<p>Select an attribute from the sidebar to see details and examples.</p>} />
          </Routes>
        </section>
      </div>
    </main>
  )
}

export default App
