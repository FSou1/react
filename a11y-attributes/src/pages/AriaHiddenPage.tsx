import React from 'react'

export default function AriaHiddenPage () {
  return (
    <article className='page-card'>
      <header className='page-card__section'>
        <h2>aria-hidden</h2>
      </header>

      <section className='page-card__section'>
        <p>
          removes an element from the accessibility tree, so screen readers
          ignore it
        </p>
      </section>

      <section className='page-card__section'>
        <h3>Examples</h3>

        <p>
          For example, if a button already says Search, the icon inside it does
          not need to be read too.
        </p>
        <button>
          <span aria-hidden='true'>🔥</span> Search
        </button>

        <pre className='code-block'>
          <code>{`<button>
  <span aria-hidden='true'>🔥</span> Search
</button>`}</code>
        </pre>
      </section>

      <section className='page-card__section'>
        <h3>Notes</h3>
        <ul className='page-card__list'>
          <li>use it for elements that are decorative</li>
          <li>If an element can receive focus, it should not be hidden with aria-hidden="true"</li>
        </ul>
      </section>
    </article>
  )
}
