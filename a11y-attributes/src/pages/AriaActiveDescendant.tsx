import { useId, useState } from 'react'

const cities = [
  { id: 'atlanta', label: 'Atlanta' },
  { id: 'chicago', label: 'Chicago' },
  { id: 'denver', label: 'Denver' },
  { id: 'seattle', label: 'Seattle' },
] as const

export default function AriaActiveDescendant() {
  const listboxId = useId()
  const [activeIndex, setActiveIndex] = useState(1)
  const activeCity = cities[activeIndex]
  const activeOptionId = `${listboxId}-${activeCity.id}`

  const moveActiveOption = (direction: 'next' | 'previous') => {
    setActiveIndex((currentIndex) => {
      if (direction === 'next') {
        return (currentIndex + 1) % cities.length
      }

      return (currentIndex - 1 + cities.length) % cities.length
    })
  }

  return (
    <article className='page-card'>
      <header className='page-card__section'>
        <h2>aria-activedescendant</h2>
      </header>

      <section className='page-card__section'>
        <p>
          identifies the currently active child element while DOM focus stays on
          a composite widget or input
        </p>
      </section>

      <section className='page-card__section'>
        <h3>Examples</h3>
        <h4>Combobox input with an active listbox option</h4>
        <p>
          Move the active option while focus remains on the combobox input.
        </p>

        <div className='page-card__list'>
          <button type='button' onClick={() => moveActiveOption('previous')}>
            Previous option
          </button>
          <button type='button' onClick={() => moveActiveOption('next')}>
            Next option
          </button>
        </div>

        <input
          type='text'
          role='combobox'
          aria-label='Choose a city'
          aria-expanded='true'
          aria-controls={listboxId}
          aria-activedescendant={activeOptionId}
          value={activeCity.label}
          readOnly
        />

        <ul id={listboxId} role='listbox'>
          {cities.map((city, index) => {
            const isActive = index === activeIndex

            return (
              <li
                key={city.id}
                id={`${listboxId}-${city.id}`}
                role='option'
                aria-selected={isActive}
              >
                {isActive ? `${city.label} (active)` : city.label}
              </li>
            )
          })}
        </ul>

        <pre className='code-block'>
          <code>{`<input
  role="combobox"
  aria-expanded="true"
  aria-controls="city-options"
  aria-activedescendant="city-option-chicago"
/>

<ul id="city-options" role="listbox">
  <li id="city-option-atlanta" role="option">Atlanta</li>
  <li id="city-option-chicago" role="option" aria-selected="true">
    Chicago
  </li>
</ul>`}</code>
        </pre>

        <h4>Listbox that keeps focus on the container</h4>
        <pre className='code-block'>
          <code>{`<div
  role="listbox"
  tabIndex="0"
  aria-activedescendant="priority-high"
>
  <div id="priority-low" role="option">Low</div>
  <div id="priority-high" role="option">High</div>
</div>`}</code>
        </pre>
      </section>

      <section className='page-card__section'>
        <h3>When to use it</h3>
        <ul className='page-card__list'>
          <li>comboboxes keep focus on the input while options are navigated</li>
          <li>listboxes, menus, trees, or grids manage focus from a container</li>
          <li>keyboard navigation changes the active item without moving DOM focus</li>
          <li>custom composite widgets need one clear active descendant</li>
        </ul>
      </section>

      <section className='page-card__section'>
        <h3>Notes</h3>
        <ul className='page-card__list'>
          <li>
            The value must match the `id` of an owned or controlled descendant.
          </li>
          <li>
            Keep the active descendant in sync with visual focus styling and
            keyboard navigation.
          </li>
          <li>
            `aria-activedescendant` is different from moving DOM focus; focus
            remains on the widget that has the attribute.
          </li>
        </ul>
      </section>
    </article>
  )
}
