import React from 'react'

export default function AreaLabelledByPage () {
  return (
    <article className='page-card'>
      <header className='page-card__section'>
        <h2>aria-labelledby</h2>
      </header>

      <section className='page-card__section'>
        <p>
          gives an element an accessible name by pointing to another element’s
          id
        </p>
      </section>

      <section className='page-card__section'>
        <h3>Example</h3>

        <h2 id='dialog-title'>Delete project</h2>
        <div role='dialog' aria-labelledby='dialog-title'>
          <p>This action cannot be undone.</p>
          <button>Cancel</button>
          <button>Delete</button>
        </div>

        <pre className='code-block'>
          <code>{`<h2 id="dialog-title">Delete project</h2>

<div role="dialog" aria-labelledby="dialog-title">
  <p>This action cannot be undone.</p>
  <button>Cancel</button>
  <button>Delete</button>
</div>`}</code>
        </pre>
      </section>

      <section className='page-card__section'>
        <h3>Why we need it</h3>
        <ul className='page-card__list'>
          <li>it reuses visible text</li>
          <li>it avoids hardcoded duplicate labels</li>
          <li>use describedby for “what else should I know?”</li>
        </ul>
      </section>
    </article>
  )
}
