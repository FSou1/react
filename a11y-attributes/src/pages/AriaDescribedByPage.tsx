export default function AriaDescribedByPage() {
  return (
    <article className='page-card'>
      <header className='page-card__section'>
        <h2>aria-describedby</h2>
      </header>

      <section className='page-card__section'>
        <p>
          adds extra descriptive text to an element by pointing to the id of
          another element
        </p>
      </section>

      <section className='page-card__section'>
        <h3>Examples</h3>

        <h4>Password field with help text</h4>
        <label htmlFor='password'>Password</label>
        <p id='password-hint'>
          Use at least 12 characters, including a number and a symbol.
        </p>
        <input id='password' type='password' aria-describedby='password-hint' />

        <pre className='code-block'>
          <code>{`<label htmlFor="password">Password</label>
<p id="password-hint">
  Use at least 12 characters, including a number and a symbol.
</p>
<input id="password" type="password" aria-describedby="password-hint" />`}</code>
        </pre>

        <h4>Input with an error message</h4>
        <label htmlFor='email'>Email address</label>
        <input
          id='email'
          type='email'
          defaultValue='hello'
          aria-describedby='email-error'
        />
        <p id='email-error'>Enter a valid email address, such as name@example.com.</p>

        <pre className='code-block'>
          <code>{`<label htmlFor="email">Email address</label>
<input id="email" type="email" aria-describedby="email-error" />
<p id="email-error">
  Enter a valid email address, such as name@example.com.
</p>`}</code>
        </pre>
      </section>

      <section className='page-card__section'>
        <h3>When to use it</h3>
        <ul className='page-card__list'>
          <li>helper text adds instructions that are useful but not the label</li>
          <li>error messages explain what needs to be fixed</li>
          <li>formatting rules or limits need to be announced with a field</li>
          <li>longer context belongs with a control, dialog, or region</li>
        </ul>
      </section>

      <section className='page-card__section'>
        <h3>Notes</h3>
        <ul className='page-card__list'>
          <li>
            Use `aria-labelledby` or a real label for the name, and
            `aria-describedby` for supporting details.
          </li>
          <li>
            The referenced element must exist and have a unique `id`.
          </li>
          <li>
            You can point to multiple ids when the description comes from more
            than one place.
          </li>
        </ul>
        <pre className='code-block'>
          <code>{`<input
  aria-describedby="username-hint username-error"
  aria-invalid="true"
/>`}</code>
        </pre>
      </section>
    </article>
  )
}
