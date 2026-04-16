import { useId, useState } from 'react'

const tabs = [
  {
    id: 'details',
    label: 'Details',
    description: 'Review the product summary and key feature notes.',
  },
  {
    id: 'shipping',
    label: 'Shipping',
    description: 'Standard shipping arrives in 3 to 5 business days.',
  },
  {
    id: 'returns',
    label: 'Returns',
    description: 'Returns are accepted within 30 days of delivery.',
  },
] as const

export default function AriaSelected() {
  const panelId = useId()
  const [selectedTab, setSelectedTab] =
    useState<(typeof tabs)[number]['id']>('shipping')

  const activeTab = tabs.find((tab) => tab.id === selectedTab) ?? tabs[0]

  return (
    <article className='page-card'>
      <header className='page-card__section'>
        <h2>aria-selected</h2>
      </header>

      <section className='page-card__section'>
        <p>
          indicates which option in a selectable widget, such as a tab, grid,
          listbox, or tree, is currently selected
        </p>
      </section>

      <section className='page-card__section'>
        <h3>Examples</h3>
        <h4>Tab interface with one selected tab</h4>
        <p>Choose a tab to see which one is selected and which panel it shows.</p>

        <div className='page-card__list' role='tablist' aria-label='Product information'>
          {tabs.map((tab) => {
            const isSelected = tab.id === selectedTab
            const tabId = `${panelId}-${tab.id}-tab`

            return (
              <button
                key={tab.id}
                id={tabId}
                type='button'
                role='tab'
                aria-selected={isSelected}
                aria-controls={panelId}
                onClick={() => setSelectedTab(tab.id)}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        <section
          id={panelId}
          role='tabpanel'
          aria-labelledby={`${panelId}-${activeTab.id}-tab`}
        >
          <p>{activeTab.description}</p>
        </section>

        <pre className='code-block'>
          <code>{`<div role="tablist" aria-label="Product information">
  <button
    type="button"
    role="tab"
    aria-selected="true"
    aria-controls="shipping-panel"
    id="shipping-tab"
  >
    Shipping
  </button>
</div>

<section
  role="tabpanel"
  id="shipping-panel"
  aria-labelledby="shipping-tab"
>
  Standard shipping arrives in 3 to 5 business days.
</section>`}</code>
        </pre>

        <h4>Listbox option selection</h4>
        <pre className='code-block'>
          <code>{`<div role="listbox" aria-label="Sort results">
  <div role="option" aria-selected="false">Newest</div>
  <div role="option" aria-selected="true">Price: Low to High</div>
  <div role="option" aria-selected="false">Top Rated</div>
</div>`}</code>
        </pre>
      </section>

      <section className='page-card__section'>
        <h3>When to use it</h3>
        <ul className='page-card__list'>
          <li>tabs need to identify which tab is currently selected</li>
          <li>listboxes or option lists expose the chosen option</li>
          <li>grids and trees include selectable rows, cells, or items</li>
          <li>custom widgets need to communicate selection state clearly</li>
        </ul>
      </section>

      <section className='page-card__section'>
        <h3>Notes</h3>
        <ul className='page-card__list'>
          <li>
            Use `aria-selected` only on roles that support selection, such as
            `tab`, `option`, `gridcell`, `row`, or `treeitem`.
          </li>
          <li>
            Keep the selected state in sync with the content or option the user
            is actually interacting with.
          </li>
          <li>
            `aria-selected` is different from `aria-current`: selected is a
            widget choice, while current marks the active page, step, or
            location in a set.
          </li>
        </ul>
      </section>
    </article>
  )
}
