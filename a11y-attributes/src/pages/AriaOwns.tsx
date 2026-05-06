import { useId, useState } from 'react'

const teamMembers = [
  { id: 'maya', label: 'Maya Patel' },
  { id: 'jon', label: 'Jon Bell' },
  { id: 'sofia', label: 'Sofia Chen' },
] as const

export default function AriaOwns() {
  const listboxId = useId()
  const [activeIndex, setActiveIndex] = useState(0)
  const activeMember = teamMembers[activeIndex]
  const activeOptionId = `${listboxId}-${activeMember.id}`

  const showNextMember = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % teamMembers.length)
  }

  return (
    <article className='page-card'>
      <header className='page-card__section'>
        <h2>aria-owns</h2>
      </header>

      <section className='page-card__section'>
        <p>
          identifies elements that should be treated as children of the current
          element in the accessibility tree when they are not DOM children
        </p>
      </section>

      <section className='page-card__section'>
        <h3>Examples</h3>
        <h4>Combobox that owns a separately rendered listbox</h4>
        <p>
          Move the active member while the combobox references a listbox that is
          rendered elsewhere in the DOM.
        </p>

        <button type='button' onClick={showNextMember}>
          Show next member
        </button>

        <input
          type='text'
          role='combobox'
          aria-label='Assign reviewer'
          aria-expanded='true'
          aria-controls={listboxId}
          aria-owns={listboxId}
          aria-activedescendant={activeOptionId}
          value={activeMember.label}
          readOnly
        />

        <ul id={listboxId} role='listbox'>
          {teamMembers.map((member, index) => {
            const isActive = index === activeIndex

            return (
              <li
                key={member.id}
                id={`${listboxId}-${member.id}`}
                role='option'
                aria-selected={isActive}
              >
                {isActive ? `${member.label} (active)` : member.label}
              </li>
            )
          })}
        </ul>

        <pre className='code-block'>
          <code>{`<input
  role="combobox"
  aria-controls="reviewer-options"
  aria-owns="reviewer-options"
  aria-activedescendant="reviewer-sofia"
/>

<ul id="reviewer-options" role="listbox">
  <li id="reviewer-sofia" role="option">Sofia Chen</li>
</ul>`}</code>
        </pre>

        <h4>Toolbar that owns controls rendered outside its DOM subtree</h4>
        <pre className='code-block'>
          <code>{`<div role="toolbar" aria-label="Editor tools" aria-owns="extra-tools">
  <button type="button">Bold</button>
</div>

<div id="extra-tools">
  <button type="button">Insert link</button>
</div>`}</code>
        </pre>
      </section>

      <section className='page-card__section'>
        <h3>When to use it</h3>
        <ul className='page-card__list'>
          <li>composite widget children are rendered outside the DOM container</li>
          <li>portaled popup content must be exposed as part of one widget</li>
          <li>`aria-activedescendant` points to an item outside the DOM subtree</li>
          <li>the accessibility tree needs a relationship the DOM cannot express</li>
        </ul>
      </section>

      <section className='page-card__section'>
        <h3>Notes</h3>
        <ul className='page-card__list'>
          <li>
            Prefer real DOM nesting when possible because it is simpler and less
            fragile.
          </li>
          <li>
            Use `aria-owns` only when the owned elements are not already DOM
            children of the owning element.
          </li>
          <li>
            `aria-owns` changes accessibility-tree ownership; `aria-controls`
            only indicates that one element controls another.
          </li>
        </ul>
      </section>
    </article>
  )
}
