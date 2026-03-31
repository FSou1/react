import React, { useId, useState } from 'react'

export default function AriaExpanded() {
  const [isExpanded, setIsExpanded] = useState(false)
  const answerId = useId()

  return (
    <article className='page-card'>
      <header className='page-card__section'>
        <h2>aria-expanded</h2>
      </header>

      <section className='page-card__section'>
        <p>
          indicates whether an element, or another grouping element it
          controls, is currently expanded or collapsed
        </p>
      </section>

      <section className='page-card__section'>
        <h3>Examples</h3>
        <h4>Collapsible FAQ item</h4>
        <p>Activate the button to see how the value changes live.</p>

        <button
          type='button'
          aria-expanded={isExpanded}
          aria-controls={answerId}
          onClick={() => setIsExpanded((expanded) => !expanded)}
        >
          What is your refund policy?
        </button>

        <div id={answerId} hidden={!isExpanded}>
          <p>You can request a refund within 30 days.</p>
        </div>

        <pre className='code-block'>
          <code>{`const [isExpanded, setIsExpanded] = useState(false)

<button
  type="button"
  aria-expanded={isExpanded}
  aria-controls="faq-answer-1"
  onClick={() => setIsExpanded((expanded) => !expanded)}
>
  What is your refund policy?
</button>

<div id="faq-answer-1" hidden={!isExpanded}>
  You can request a refund within 30 days.
</div>`}</code>
        </pre>
      </section>

      <section className='page-card__section'>
        <h3>When to use it</h3>
        <ul className='page-card__list'>
          <li>accordions and FAQ sections that show or hide content</li>
          <li>disclosure buttons that reveal extra filters or details</li>
          <li>menu buttons that open and close a controlled popup</li>
          <li>tree views or nested navigation that can be collapsed</li>
        </ul>
      </section>

      <section className='page-card__section'>
        <h3>Notes</h3>
        <ul className='page-card__list'>
          <li>
            Keep `aria-expanded` in sync with the actual visible state of the
            content.
          </li>
          <li>
            Pair it with `aria-controls` when the button toggles another
            element.
          </li>
          <li>
            The controlled region should have a unique `id` so assistive
            technology can follow the relationship.
          </li>
        </ul>
      </section>
    </article>
  )
}
