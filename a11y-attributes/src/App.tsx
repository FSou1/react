import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import { attributePages } from './attributePages'

function App() {
  return (
    <main className="app-shell">
      <header className="app-shell__header">
        <p className="app-shell__eyebrow">Reference project</p>
        <h1>{`Accessibility Attributes (${attributePages.length})`}</h1>
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
