import { NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MockAttributePage from './pages/MockAttributePage'
import './App.css'
import AriaLabelPage from './pages/AriaLabelPage'
import AreaLabelledByPage from './pages/AreaLabelledByPage'

function App() {
  return (
    <main className="app-shell">
      <header className="app-shell__header">
        <p className="app-shell__eyebrow">Reference project</p>
        <h1>Accessibility Attributes</h1>
        <p className="app-shell__intro">
          Add one accessibility attribute per page. The starter app is mostly
          empty on purpose, with a single mock page that shows the layout for
          future entries.
        </p>
      </header>

      <div className="app-shell__layout">
        <aside className="app-shell__sidebar" aria-label="Project navigation">
          <nav className="app-shell__nav">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `app-shell__nav-link${isActive ? ' app-shell__nav-link--active' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/aria-label"
              className={({ isActive }) =>
                `app-shell__nav-link${isActive ? ' app-shell__nav-link--active' : ''}`
              }
            >
              aria-label
            </NavLink>
            <NavLink
              to="/aria-labelledby"
              className={({ isActive }) =>
                `app-shell__nav-link${isActive ? ' app-shell__nav-link--active' : ''}`
              }
            >
              aria-labelledby
            </NavLink>
          </nav>
        </aside>

        <section className="app-shell__content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aria-label" element={<AriaLabelPage />} />
            <Route path="/aria-labelledby" element={<AreaLabelledByPage />} />
          </Routes>
        </section>
      </div>
    </main>
  )
}

export default App
