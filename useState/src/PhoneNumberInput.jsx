import React from 'react'
import { useState } from 'react'

function isDigit (input) {
  return /^\d*$/.test(input)
}

export default function PhoneNumberInput () {
  const [phoneValue, setPhoneValue] = useState('')

  const handleChange = event => {
    const value = event.target.value
      .replaceAll('(', '')
      .replaceAll(')', '')
      .replaceAll('-', '')
    if (!isDigit(value)) {
      return
    }

    const code = value.slice(0, 3)
    const part1 = value.slice(3, 6)
    const part2 = value.slice(6, 10)

    if (value.length >= 7) {
      setPhoneValue('(' + code + ')' + part1 + '-' + part2)
      return
    }

    if (value.length >= 4) {
      setPhoneValue('(' + code + ')' + part1)
      return
    }

    setPhoneValue(value)
  }

  return (
    <input
      data-testid='phone-number-input'
      value={phoneValue}
      onChange={handleChange}
    />
  )
}
