import { useState } from 'react'

const pages = [
  { id: 'overview', label: 'Overview' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'reviews', label: 'Reviews' },
] as const

export default function AriaCurrent() {
  const [currentPage, setCurrentPage] =
    useState<(typeof pages)[number]['id']>('pricing')

  return (
    <article className='page-card'>
      <header className='page-card__section'>
        <h2>aria-current</h2>
      </header>

      <section className='page-card__section'>
        <p>
          indicates which item in a related set represents the current page,
          step, location, or active position
        </p>
      </section>

      <section className='page-card__section'>
        <h3>Examples</h3>
        <h4>Navigation link for the current page</h4>
        <p>Select a page to see which link is marked as current.</p>

        <div className='page-card__list'>
          {pages.map((page) => {
            const isCurrent = page.id === currentPage

            return (
              <button
                key={page.id}
                type='button'
                aria-current={isCurrent ? 'page' : undefined}
                onClick={() => setCurrentPage(page.id)}
              >
                {page.label}
              </button>
            )
          })}
        </div>

        <pre className='code-block'>
          <code>{`<nav aria-label="Product pages">
  <a href="/overview">Overview</a>
  <a href="/pricing" aria-current="page">Pricing</a>
  <a href="/reviews">Reviews</a>
</nav>`}</code>
        </pre>

        <h4>Checkout step indicator</h4>
        <pre className='code-block'>
          <code>{`<ol>
  <li><a href="/cart">Cart</a></li>
  <li><a href="/shipping" aria-current="step">Shipping</a></li>
  <li><a href="/payment">Payment</a></li>
</ol>`}</code>
        </pre>
      </section>

      <section className='page-card__section'>
        <h3>When to use it</h3>
        <ul className='page-card__list'>
          <li>navigation menus need to identify the current page</li>
          <li>wizards or checkout flows show the current step</li>
          <li>breadcrumbs or pagination indicate the current location</li>
          <li>date pickers or calendars mark the current date in a set</li>
        </ul>
      </section>

      <section className='page-card__section'>
        <h3>Notes</h3>
        <ul className='page-card__list'>
          <li>
            Use `aria-current` only when one item in a related set is the
            current one.
          </li>
          <li>
            The most common value is `page`, but values like `step`, `location`,
            `date`, and `time` are also valid when they match the UI.
          </li>
          <li>
            `aria-current` is different from `aria-selected`: current describes
            position in a set, while selected usually describes a chosen option
            in a widget.
          </li>
        </ul>
      </section>
    </article>
  )
}
