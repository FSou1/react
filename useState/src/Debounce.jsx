import React from 'react'
import { useState } from 'react'
import { useDebounce } from './useDebounce'

export default function Debounce () {
  const [value, setValue] = useState('')

  const debouncedValue = useDebounce(value, 1000)

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <>
      <h2>Debounce</h2>
      <input type='text' value={value} onChange={handleChange} />
      <p>Debounced value: {debouncedValue}</p>
    </>
  )
}
