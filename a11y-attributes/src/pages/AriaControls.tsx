import { useId, useState } from 'react'

export default function AriaControls() {
  const detailsId = useId()
  const [showDetails, setShowDetails] = useState(false)

  return (
    <article className='page-card'>
      <header className='page-card__section'>
        <h2>aria-controls</h2>
      </header>

      <section className='page-card__section'>
        <p>
          identifies the element whose contents or presence are controlled by
          the current element
        </p>
      </section>

      <section className='page-card__section'>
        <h3>Examples</h3>
        <h4>Disclosure button that controls a details panel</h4>
        <p>Activate the button to see which region it controls.</p>

        <button
          type='button'
          aria-controls={detailsId}
          aria-expanded={showDetails}
          onClick={() => setShowDetails((open) => !open)}
        >
          {showDetails ? 'Hide shipping details' : 'Show shipping details'}
        </button>

        <div id={detailsId} hidden={!showDetails}>
          <p>Standard shipping arrives in 3 to 5 business days.</p>
        </div>

        <pre className='code-block'>
          <code>{`<button
  type="button"
  aria-controls="shipping-details"
  aria-expanded={showDetails}
>
  Show shipping details
</button>

<div id="shipping-details" hidden={!showDetails}>
  Standard shipping arrives in 3 to 5 business days.
</div>`}</code>
        </pre>

        <h4>Tab button that points to its panel</h4>
        <pre className='code-block'>
          <code>{`<button
  role="tab"
  id="tab-specs"
  aria-controls="panel-specs"
  aria-selected="true"
>
  Specifications
</button>

<section
  role="tabpanel"
  id="panel-specs"
  aria-labelledby="tab-specs"
>
  ...
</section>`}</code>
        </pre>
      </section>

      <section className='page-card__section'>
        <h3>When to use it</h3>
        <ul className='page-card__list'>
          <li>buttons that open or close an accordion or disclosure panel</li>
          <li>tab interfaces where each tab points to a tabpanel</li>
          <li>menu buttons or popovers that reveal a related popup</li>
          <li>custom widgets where one control changes another region</li>
        </ul>
      </section>

      <section className='page-card__section'>
        <h3>Notes</h3>
        <ul className='page-card__list'>
          <li>
            `aria-controls` creates a relationship, but it does not manage
            state by itself.
          </li>
          <li>
            Pair it with `aria-expanded`, `aria-selected`, or other state
            attributes when the UI changes visibly.
          </li>
          <li>
            The value must match the `id` of the element being controlled.
          </li>
        </ul>
      </section>
    </article>
  )
}
