import { useState } from 'react'

export default function AriaLive() {
  const [message, setMessage] = useState('No updates yet.')

  return (
    <article className='page-card'>
      <header className='page-card__section'>
        <h2>aria-live</h2>
      </header>

      <section className='page-card__section'>
        <p>
          tells assistive technology that a region may update after page load
          and that those changes should be announced
        </p>
      </section>

      <section className='page-card__section'>
        <h3>Examples</h3>
        <h4>Status message for cart updates</h4>
        <p>Use the buttons to update the live region and announce the new message.</p>

        <div className='page-card__list'>
          <button
            type='button'
            onClick={() => setMessage('1 item added to your cart.')}
          >
            Add one item
          </button>
          <button
            type='button'
            onClick={() => setMessage('3 items added to your cart.')}
          >
            Add three items
          </button>
        </div>

        <p aria-live='polite'>{message}</p>

        <pre className='code-block'>
          <code>{`<p aria-live="polite">
  3 items added to your cart.
</p>`}</code>
        </pre>

        <h4>Loading status</h4>
        <pre className='code-block'>
          <code>{`<div aria-live="polite">
  Search results updated.
</div>`}</code>
        </pre>
      </section>

      <section className='page-card__section'>
        <h3>When to use it</h3>
        <ul className='page-card__list'>
          <li>cart, save, or upload status messages update without navigation</li>
          <li>search results or filter summaries change after user actions</li>
          <li>loading states need a non-visual announcement</li>
          <li>confirmation messages appear after async actions complete</li>
        </ul>
      </section>

      <section className='page-card__section'>
        <h3>Notes</h3>
        <ul className='page-card__list'>
          <li>
            Use `polite` for routine updates so screen readers wait for a
            natural pause.
          </li>
          <li>
            Use `assertive` sparingly for urgent messages because it can
            interrupt what the user is already hearing.
          </li>
          <li>
            Keep live region messages short and meaningful to avoid noisy
            announcements.
          </li>
        </ul>
      </section>
    </article>
  )
}
