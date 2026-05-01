import { useState } from 'react'

type CheckedState = 'false' | 'mixed' | 'true'

const checkedLabels: Record<CheckedState, string> = {
  false: 'No permissions selected',
  mixed: 'Some permissions selected',
  true: 'All permissions selected',
}

export default function AriaChecked() {
  const [checkedState, setCheckedState] = useState<CheckedState>('mixed')

  const toggleCheckedState = () => {
    setCheckedState((currentState) => {
      if (currentState === 'false') {
        return 'mixed'
      }

      if (currentState === 'mixed') {
        return 'true'
      }

      return 'false'
    })
  }

  return (
    <article className='page-card'>
      <header className='page-card__section'>
        <h2>aria-checked</h2>
      </header>

      <section className='page-card__section'>
        <p>
          indicates whether a checkbox, radio button, menu item, or other
          checkable widget is checked, unchecked, or partially checked
        </p>
      </section>

      <section className='page-card__section'>
        <h3>Examples</h3>
        <h4>Custom checkbox with a mixed state</h4>
        <p>Activate the control to cycle between unchecked, mixed, and checked.</p>

        <button
          type='button'
          role='checkbox'
          aria-checked={checkedState}
          onClick={toggleCheckedState}
        >
          Manage team permissions
        </button>

        <p>{checkedLabels[checkedState]}</p>

        <pre className='code-block'>
          <code>{`const [checkedState, setCheckedState] = useState('mixed')

<button
  type="button"
  role="checkbox"
  aria-checked={checkedState}
  onClick={toggleCheckedState}
>
  Manage team permissions
</button>`}</code>
        </pre>

        <h4>Checked menu item</h4>
        <pre className='code-block'>
          <code>{`<div role="menu" aria-label="Text alignment">
  <div role="menuitemradio" aria-checked="false">Left</div>
  <div role="menuitemradio" aria-checked="true">Center</div>
  <div role="menuitemradio" aria-checked="false">Right</div>
</div>`}</code>
        </pre>
      </section>

      <section className='page-card__section'>
        <h3>When to use it</h3>
        <ul className='page-card__list'>
          <li>custom checkbox widgets need to expose checked state</li>
          <li>tri-state checkboxes need to communicate a partial selection</li>
          <li>custom radio groups need to identify the selected item</li>
          <li>menu items represent toggled settings or radio-style choices</li>
        </ul>
      </section>

      <section className='page-card__section'>
        <h3>Notes</h3>
        <ul className='page-card__list'>
          <li>
            Prefer native checkbox and radio inputs when possible because they
            include keyboard behavior, form behavior, and checked semantics.
          </li>
          <li>
            The `mixed` value is for tri-state checkboxes, such as a parent
            checkbox where only some child items are selected.
          </li>
          <li>
            `aria-checked` is different from `aria-pressed`: checked describes
            checkable widgets, while pressed describes toggle buttons.
          </li>
        </ul>
      </section>
    </article>
  )
}
