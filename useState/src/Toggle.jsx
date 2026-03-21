import React from 'react'
import useToggle from './useToggle'

export default function Toggle () {
  const [on, toggle] = useToggle()

  return (
    <>
      <h2>Toggle</h2>
      <div>
        <div>{on ? 'on' : 'off'}</div>
        <div>
          <button onClick={toggle}>Toggle</button>
        </div>
      </div>
    </>
  )
}
