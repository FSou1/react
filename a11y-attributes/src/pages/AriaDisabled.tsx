import { useState } from 'react'

export default function AriaDisabled() {
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false)

  const handleSubmit = () => {
    if (!hasAcceptedTerms) {
      return
    }

    window.alert('Report submitted.')
  }

  return (
    <article className='page-card'>
      <header className='page-card__section'>
        <h2>aria-disabled</h2>
      </header>

      <section className='page-card__section'>
        <p>
          indicates that an element is perceivable but currently unavailable for
          interaction
        </p>
      </section>

      <section className='page-card__section'>
        <h3>Examples</h3>
        <h4>Custom submit control that remains discoverable</h4>
        <p>
          Accept the terms to make the custom submit control available.
        </p>

        <label>
          <input
            type='checkbox'
            checked={hasAcceptedTerms}
            onChange={(event) => setHasAcceptedTerms(event.target.checked)}
          />
          I accept the terms
        </label>

        <button
          type='button'
          aria-disabled={!hasAcceptedTerms}
          onClick={handleSubmit}
        >
          Submit report
        </button>

        <p>
          {hasAcceptedTerms
            ? 'The submit action is available.'
            : 'Accept the terms before submitting the report.'}
        </p>

        <pre className='code-block'>
          <code>{`const isDisabled = !hasAcceptedTerms

<button
  type="button"
  aria-disabled={isDisabled}
  onClick={(event) => {
    if (isDisabled) {
      event.preventDefault()
      return
    }

    submitReport()
  }}
>
  Submit report
</button>`}</code>
        </pre>

        <h4>Unavailable custom menu item</h4>
        <pre className='code-block'>
          <code>{`<div role="menu" aria-label="Document actions">
  <div role="menuitem">Rename</div>
  <div role="menuitem" aria-disabled="true">Archive</div>
  <div role="menuitem">Duplicate</div>
</div>`}</code>
        </pre>
      </section>

      <section className='page-card__section'>
        <h3>When to use it</h3>
        <ul className='page-card__list'>
          <li>custom controls need to communicate that they are unavailable</li>
          <li>disabled options should remain discoverable in a widget</li>
          <li>toolbar or menu items are temporarily unavailable</li>
          <li>a control should stay in the tab order while explaining why it cannot be used</li>
        </ul>
      </section>

      <section className='page-card__section'>
        <h3>Notes</h3>
        <ul className='page-card__list'>
          <li>
            Prefer the native `disabled` attribute for real buttons and form
            controls when they should be removed from interaction.
          </li>
          <li>
            `aria-disabled` only communicates state. It does not stop clicks,
            keyboard events, form submission, or other behavior by itself.
          </li>
          <li>
            If an `aria-disabled` control remains focusable, provide nearby text
            that explains what must change before it becomes available.
          </li>
        </ul>
      </section>
    </article>
  )
}
