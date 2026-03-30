import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="page-card">
      <div className="page-card__section">
        <p className="page-card__label">Project setup</p>
        <h2>Start adding attributes when you are ready</h2>
        <p>
          This app is intentionally light. Create a new page component for each
          accessibility attribute and add a link to the sidebar.
        </p>
      </div>

      <div className="page-card__section">
        <h3>Current pages</h3>
        <ul className="page-card__list">
          <li>
            <Link to="/aria-label">aria-label</Link>
          </li>
          <li>
            <Link to="/aria-labelledby">aria-labelledby</Link>
          </li>
        </ul>
      </div>

      <div className="page-card__section">
        <h3>Suggested pattern for each new page</h3>
        <ul className="page-card__list">
          <li>Attribute name and short definition</li>
          <li>When to use it</li>
          <li>Code example</li>
          <li>Notes, caveats, or testing reminders</li>
        </ul>
      </div>
    </div>
  )
}

export default HomePage
