import { useState } from 'react'
import useClickOutside from '../hooks/useClickOutside'

export default function ClickOutsideDemo () {
  const [isOpen, setIsOpen] = useState(true)
  const [outsideClicks, setOutsideClicks] = useState(0)

  const ref = useClickOutside(() => {
    setIsOpen(false)
    setOutsideClicks(total => total + 1)
  })

  return (
    <div>
      <p>
        Open the panel, then click anywhere outside it to close it.
      </p>
      <p>Outside clicks detected: {outsideClicks}</p>

      <button onClick={() => setIsOpen(true)}>
        {isOpen ? 'Panel is open' : 'Reopen panel'}
      </button>

      <div
        style={{
          minHeight: 180,
          marginTop: 20,
          padding: 20,
          border: '1px dashed #94a3b8',
          borderRadius: 16,
          background: 'rgba(248, 250, 252, 0.8)'
        }}
      >
        <p style={{ marginTop: 0 }}>
          This outer area represents the rest of the page.
        </p>

        {isOpen ? (
          <div
            ref={ref}
            style={{
              maxWidth: 320,
              padding: 16,
              border: '1px solid #cbd5e1',
              borderRadius: 16,
              background: '#fff',
              boxShadow: '0 12px 30px rgba(15, 23, 42, 0.12)'
            }}
          >
            <strong>Profile menu</strong>
            <p>
              Click inside this card and it stays open. Click outside and
              `useClickOutside` closes it.
            </p>
            <button onClick={() => setIsOpen(false)}>Close from inside</button>
          </div>
        ) : (
          <p style={{ marginBottom: 0 }}>
            The panel is closed. Use the button above, then click outside the
            panel to trigger the hook.
          </p>
        )}
      </div>
    </div>
  )
}
