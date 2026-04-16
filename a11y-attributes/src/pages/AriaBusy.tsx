import { useState } from 'react'

export default function AriaBusy() {
  const [isBusy, setIsBusy] = useState(false)
  const [message, setMessage] = useState('Latest messages are loaded.')

  const handleRefresh = () => {
    setIsBusy(true)
    setMessage('Loading earlier messages...')

    window.setTimeout(() => {
      setIsBusy(false)
      setMessage('Earlier messages loaded. 12 messages in the conversation.')
    }, 5000)
  }

  return (
    <article className='page-card'>
      <header className='page-card__section'>
        <h2>aria-busy</h2>
      </header>

      <section className='page-card__section'>
        <p>
          indicates that an element is being updated and that assistive
          technology should wait until the changes are complete
        </p>
      </section>

      <section className='page-card__section'>
        <h3>Examples</h3>
        <h4>Chat thread while earlier messages load</h4>
        <p>
          Refresh the region to simulate loading older messages before the
          conversation is ready.
        </p>

        <button type='button' onClick={handleRefresh} disabled={isBusy}>
          {isBusy ? 'Loading earlier messages...' : 'Load earlier messages'}
        </button>

        <section
          aria-label='Chat conversation'
          aria-live='polite'
          aria-busy={isBusy}
        >
          <p>{message}</p>
        </section>

        <pre className='code-block'>
          <code>{`<section
  aria-label="Chat conversation"
  aria-live="polite"
  aria-busy="true"
>
  Loading earlier messages...
</section>`}</code>
        </pre>

        <h4>Results region while content refreshes</h4>
        <pre className='code-block'>
          <code>{`<section aria-live="polite" aria-busy="true">
  Refreshing order list...
</section>`}</code>
        </pre>
      </section>

      <section className='page-card__section'>
        <h3>When to use it</h3>
        <ul className='page-card__list'>
          <li>live regions update in several steps and should wait to announce final content</li>
          <li>tables, feeds, or dashboards refresh after filtering or polling</li>
          <li>async UI regions need to signal that content is still loading</li>
          <li>complex widgets rerender and should not be treated as finished yet</li>
        </ul>
      </section>

      <section className='page-card__section'>
        <h3>Notes</h3>
        <ul className='page-card__list'>
          <li>
            Set `aria-busy` to `true` before the update starts and back to
            `false` when the region is complete.
          </li>
          <li>
            It works especially well with `aria-live` when a region updates in
            multiple passes.
          </li>
          <li>
            `aria-busy` does not provide a spoken message by itself, so pair it
            with visible and meaningful loading text when needed.
          </li>
        </ul>
      </section>
    </article>
  )
}
