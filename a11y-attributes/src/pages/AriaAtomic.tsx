import { useState } from 'react'

const orderUpdates = [
  {
    status: 'Preparing order',
    detail: 'Kitchen started the order at 12:10 PM.',
  },
  {
    status: 'Out for delivery',
    detail: 'Courier picked up the order at 12:28 PM.',
  },
  {
    status: 'Arriving soon',
    detail: 'Courier is about 5 minutes away.',
  },
] as const

export default function AriaAtomic() {
  const [updateIndex, setUpdateIndex] = useState(0)
  const update = orderUpdates[updateIndex]

  const showNextUpdate = () => {
    setUpdateIndex((currentIndex) => (currentIndex + 1) % orderUpdates.length)
  }

  return (
    <article className='page-card'>
      <header className='page-card__section'>
        <h2>aria-atomic</h2>
      </header>

      <section className='page-card__section'>
        <p>
          tells assistive technology whether to announce an entire live region
          or only the part of the region that changed
        </p>
      </section>

      <section className='page-card__section'>
        <h3>Examples</h3>
        <h4>Order status that should be announced as a complete message</h4>
        <p>
          Update the order to change both the status and supporting detail in
          the live region.
        </p>

        <button type='button' onClick={showNextUpdate}>
          Show next order update
        </button>

        <section aria-live='polite' aria-atomic='true'>
          <h5>{update.status}</h5>
          <p>{update.detail}</p>
        </section>

        <pre className='code-block'>
          <code>{`<section aria-live="polite" aria-atomic="true">
  <h5>Out for delivery</h5>
  <p>Courier picked up the order at 12:28 PM.</p>
</section>`}</code>
        </pre>

        <h4>Small counter where only the changed value matters</h4>
        <pre className='code-block'>
          <code>{`<p aria-live="polite" aria-atomic="false">
  Items in cart: <span>4</span>
</p>`}</code>
        </pre>
      </section>

      <section className='page-card__section'>
        <h3>When to use it</h3>
        <ul className='page-card__list'>
          <li>live region updates need surrounding context to make sense</li>
          <li>status messages change across multiple child elements</li>
          <li>partial announcements would sound vague or incomplete</li>
          <li>small numeric updates can be announced without repeating labels</li>
        </ul>
      </section>

      <section className='page-card__section'>
        <h3>Notes</h3>
        <ul className='page-card__list'>
          <li>
            Use `aria-atomic="true"` when the whole message should be announced
            after any part of the live region changes.
          </li>
          <li>
            Use `aria-atomic="false"` when announcing only changed descendants
            is enough.
          </li>
          <li>
            `aria-atomic` works with live regions; it does not make a region
            live by itself.
          </li>
        </ul>
      </section>
    </article>
  )
}
