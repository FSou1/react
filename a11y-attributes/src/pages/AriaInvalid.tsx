import { useId, useState } from 'react'

export default function AriaInvalid() {
  const errorId = useId()
  const [value, setValue] = useState('hello')

  const isValidEmail = /\S+@\S+\.\S+/.test(value)
  const showError = value.length > 0 && !isValidEmail

  return (
    <article className='page-card'>
      <header className='page-card__section'>
        <h2>aria-invalid</h2>
      </header>

      <section className='page-card__section'>
        <p>
          indicates that the current value entered in a form field does not
          match the expected format or rules
        </p>
      </section>

      <section className='page-card__section'>
        <h3>Examples</h3>
        <h4>Email field with inline validation</h4>
        <p>Update the field to see how the invalid state and error message work together.</p>

        <label htmlFor='email-input'>Email address</label>
        <input
          id='email-input'
          type='email'
          value={value}
          aria-invalid={showError}
          aria-describedby={showError ? errorId : undefined}
          onChange={(event) => setValue(event.target.value)}
        />
        {showError ? (
          <p id={errorId}>Enter a valid email address, such as name@example.com.</p>
        ) : (
          <p>Looks good.</p>
        )}

        <pre className='code-block'>
          <code>{`<label htmlFor="email-input">Email address</label>
<input
  id="email-input"
  type="email"
  aria-invalid="true"
  aria-describedby="email-error"
/>
<p id="email-error">Enter a valid email address, such as name@example.com.</p>`}</code>
        </pre>
      </section>

      <section className='page-card__section'>
        <h3>When to use it</h3>
        <ul className='page-card__list'>
          <li>form validation marks a field that currently has an error</li>
          <li>formatting rules were not met for email, phone, or date inputs</li>
          <li>required data is missing after validation runs</li>
          <li>server-side validation returns an error for a specific field</li>
        </ul>
      </section>

      <section className='page-card__section'>
        <h3>Notes</h3>
        <ul className='page-card__list'>
          <li>
            Pair `aria-invalid` with a clear visible error message so all users
            understand what needs to be fixed.
          </li>
          <li>
            Use `aria-describedby` to connect the field to its error text when
            the message is present.
          </li>
          <li>
            Set the attribute only when the field is actually invalid, not
            before the user has had a chance to interact.
          </li>
        </ul>
      </section>
    </article>
  )
}
