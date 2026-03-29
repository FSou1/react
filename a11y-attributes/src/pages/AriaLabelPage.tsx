import React from 'react'

export default function AriaLabelPage () {
  return (
    <article className='page-card'>
      <header className='page-card__section'>
        <h2>aria-label</h2>
      </header>

      <section className='page-card__section'>
        <p>
          gives an element an accessible name when there is no visible text
          label, or when the visible content is not enough for screen readers
        </p>
      </section>

      <section className='page-card__section'>
        <h3>Examples</h3>
        <h4>Icon-only button</h4>
        <button aria-label='Close dialog'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1rem'
            height='1rem'
            viewBox='0 0 24 24'
            fill='none'
            aria-hidden='true'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z'
              fill='#0F1729'
            />
          </svg>
        </button>
        <pre className='code-block'>
          <code>{`<button aria-label="Close dialog">
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path d="..." />
  </svg>
</button>`}</code>
        </pre>
        <h4>Search input without a visible label</h4>
        <pre className='code-block'>
          <code>{`<input type="search" aria-label="Search products" />`}</code>
        </pre>
        <h4>Landmarks with clear names</h4>
        <pre className='code-block'>
          <code>{`<nav aria-label="Primary navigation">...</nav>
<nav aria-label="Footer navigation">...</nav>`}</code>
        </pre>
      </section>

      <section className='page-card__section'>
        <h3>When to use it</h3>
        <ul className='page-card__list'>
          <li>
            icon-only buttons or links that do not have enough visible text
          </li>
          <li>input fields without a visible label</li>
          <li>landmarks that need a distinct accessible name</li>
          <li>controls where the visible text is unclear</li>
        </ul>
      </section>

      <section className='page-card__section'>
        <h3>Notes</h3>
        <ul className='page-card__list'>
          <li>
            aria-hidden="true" on the icon prevents the SVG from being announced
          </li>
          <li>
            Do not use aria-label if the element already has a clear visible
            text label
          </li>
          <li>
            Prefer a visible label when possible because it helps all users, not
            just screen reader users:
          </li>
        </ul>
        <pre className='code-block'>
          <code>{`<label htmlFor="email">Email address</label>
<input id="email" type="email" />`}</code>
        </pre>
      </section>
    </article>
  )
}
