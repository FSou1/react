import { useId, useState } from 'react'

export default function AriaHasPopup() {
  const menuId = useId()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <article className='page-card'>
      <header className='page-card__section'>
        <h2>aria-haspopup</h2>
      </header>

      <section className='page-card__section'>
        <p>
          indicates that an element can open a popup, such as a menu, listbox,
          tree, grid, or dialog
        </p>
      </section>

      <section className='page-card__section'>
        <h3>Examples</h3>
        <h4>Account button that opens a menu</h4>
        <p>Activate the button to show or hide the related menu.</p>

        <button
          type='button'
          aria-haspopup='menu'
          aria-expanded={isOpen}
          aria-controls={menuId}
          onClick={() => setIsOpen((open) => !open)}
        >
          Account
        </button>

        <div id={menuId} role='menu' hidden={!isOpen}>
          <button type='button' role='menuitem'>
            Profile
          </button>
          <button type='button' role='menuitem'>
            Settings
          </button>
          <button type='button' role='menuitem'>
            Sign out
          </button>
        </div>

        <pre className='code-block'>
          <code>{`const [isOpen, setIsOpen] = useState(false)

<button
  type="button"
  aria-haspopup="menu"
  aria-expanded={isOpen}
  aria-controls="account-menu"
  onClick={() => setIsOpen((open) => !open)}
>
  Account
</button>

<div id="account-menu" role="menu" hidden={!isOpen}>
  <button type="button" role="menuitem">Profile</button>
  <button type="button" role="menuitem">Settings</button>
  <button type="button" role="menuitem">Sign out</button>
</div>`}</code>
        </pre>

        <h4>Combobox that opens a listbox</h4>
        <pre className='code-block'>
          <code>{`<input
  role="combobox"
  aria-haspopup="listbox"
  aria-expanded="false"
  aria-controls="city-options"
/>

<div id="city-options" role="listbox" hidden>
  ...
</div>`}</code>
        </pre>
      </section>

      <section className='page-card__section'>
        <h3>When to use it</h3>
        <ul className='page-card__list'>
          <li>menu buttons open a related menu of actions</li>
          <li>comboboxes or custom selects open a listbox of options</li>
          <li>buttons open a dialog, grid, tree, or other popup widget</li>
          <li>custom controls need to describe what kind of popup appears</li>
        </ul>
      </section>

      <section className='page-card__section'>
        <h3>Notes</h3>
        <ul className='page-card__list'>
          <li>
            Use a value that matches the popup type, such as `menu`, `listbox`,
            `tree`, `grid`, or `dialog`.
          </li>
          <li>
            `aria-haspopup` does not say whether the popup is open. Use
            `aria-expanded` for the open or closed state.
          </li>
          <li>
            Pair it with `aria-controls` when the trigger points to a specific
            popup element.
          </li>
        </ul>
      </section>
    </article>
  )
}
