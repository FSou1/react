import { useState } from 'react'

export default function AriaPressed() {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <article className='page-card'>
      <header className='page-card__section'>
        <h2>aria-pressed</h2>
      </header>

      <section className='page-card__section'>
        <p>
          indicates whether a toggle button is currently pressed, giving
          assistive technology the button&apos;s on or off state
        </p>
      </section>

      <section className='page-card__section'>
        <h3>Examples</h3>
        <h4>Toggle button for saved items</h4>
        <p>Activate the button to see how its pressed state changes.</p>

        <button
          type='button'
          aria-pressed={isPressed}
          onClick={() => setIsPressed((pressed) => !pressed)}
        >
          {isPressed ? 'Saved to favorites' : 'Save to favorites'}
        </button>

        <pre className='code-block'>
          <code>{`const [isPressed, setIsPressed] = useState(false)

<button
  type="button"
  aria-pressed={isPressed}
  onClick={() => setIsPressed((pressed) => !pressed)}
>
  Save to favorites
</button>`}</code>
        </pre>

        <h4>Formatting toolbar button</h4>
        <pre className='code-block'>
          <code>{`<button type="button" aria-pressed="true">
  Bold
</button>`}</code>
        </pre>
      </section>

      <section className='page-card__section'>
        <h3>When to use it</h3>
        <ul className='page-card__list'>
          <li>toggle buttons that turn a feature on or off</li>
          <li>formatting toolbars with bold, italic, or underline buttons</li>
          <li>favorite, mute, bookmark, or pin controls that keep state</li>
          <li>custom button widgets that represent a binary setting</li>
        </ul>
      </section>

      <section className='page-card__section'>
        <h3>Notes</h3>
        <ul className='page-card__list'>
          <li>
            Use `aria-pressed` only for toggle buttons, not for ordinary action
            buttons.
          </li>
          <li>
            Keep the attribute in sync with the actual state shown in the UI.
          </li>
          <li>
            `aria-pressed` is different from `aria-expanded`: pressed is toggle
            state, expanded is whether controlled content is open.
          </li>
        </ul>
      </section>
    </article>
  )
}
