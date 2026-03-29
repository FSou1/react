function MockAttributePage() {
  return (
    <article className="page-card">
      <header className="page-card__section">
        <p className="page-card__label">Mock entry</p>
        <h2>mock-attribute</h2>
        <p>
          Replace this page with your first real accessibility attribute when
          you are ready.
        </p>
      </header>

      <section className="page-card__section">
        <h3>What it is</h3>
        <p>
          Use this area for a short explanation of what the attribute does and
          how assistive technologies interpret it.
        </p>
      </section>

      <section className="page-card__section">
        <h3>Example</h3>
        <pre className="code-block">
          <code>{`<button mock-attribute="value">
  Example button
</button>`}</code>
        </pre>
      </section>

      <section className="page-card__section">
        <h3>Notes</h3>
        <ul className="page-card__list">
          <li>Add when-to-use guidance.</li>
          <li>Add any browser or screen-reader caveats.</li>
          <li>Add testing steps you want to remember later.</li>
        </ul>
      </section>
    </article>
  )
}

export default MockAttributePage
