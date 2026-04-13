import { useState } from 'react'

export default function AriaRequired() {
  const [value, setValue] = useState('')
  const showMissing = value.trim().length === 0

  return (
    <article className='page-card'>
      <header className='page-card__section'>
        <h2>aria-required</h2>
      </header>

      <section className='page-card__section'>
        <p>
          tells assistive technology that a form field must be completed before
          the form can be submitted
        </p>
      </section>

      <section className='page-card__section'>
        <h3>Examples</h3>
        <h4>Required name field</h4>
        <p>Type in the field to see the required helper message change.</p>

        <label htmlFor='full-name'>Full name</label>
        <input
          id='full-name'
          type='text'
          value={value}
          aria-required='true'
          onChange={(event) => setValue(event.target.value)}
        />
        <p>{showMissing ? 'This field is required before submission.' : 'Required field completed.'}</p>

        <pre className='code-block'>
          <code>{`<label htmlFor="full-name">Full name</label>
<input id="full-name" type="text" aria-required="true" />`}</code>
        </pre>

        <h4>Custom combobox or non-native widget</h4>
        <pre className='code-block'>
          <code>{`<div
  role="combobox"
  aria-expanded="false"
  aria-required="true"
  aria-labelledby="country-label"
>
  ...
</div>`}</code>
        </pre>
      </section>

      <section className='page-card__section'>
        <h3>When to use it</h3>
        <ul className='page-card__list'>
          <li>custom form widgets need to communicate that input is mandatory</li>
          <li>design systems replace native form controls with ARIA-based components</li>
          <li>required fields need an explicit accessibility signal in custom UIs</li>
          <li>you want to distinguish required fields from optional ones clearly</li>
        </ul>
      </section>

      <section className='page-card__section'>
        <h3>Notes</h3>
        <ul className='page-card__list'>
          <li>
            Native HTML inputs should usually use the `required` attribute,
            which provides both browser validation and accessibility support.
          </li>
          <li>
            Use `aria-required` mainly for custom widgets or when native
            semantics are not available.
          </li>
          <li>
            `aria-required` means the field is mandatory; it does not mean the
            current value is wrong. Use `aria-invalid` for validation errors.
          </li>
        </ul>
      </section>
    </article>
  )
}
