import React from 'react'
import { useArray } from './useArray'

export default function UseArraySample () {
  const { value, push, removeByIndex } = useArray([1, 2, 3])

  const handlePush = (e: any) => {
    push(Math.floor(Date.now() / 1000))
  }

  const handleRemoveByIndex = (index: number) => {
    return (e: any) => {
      removeByIndex(index)
    }
  }

  return (
    <div>
      <div>{value.join(',')}</div>
      <div>
        <button onClick={handlePush}>Push</button>
        <button onClick={handleRemoveByIndex(0)}>Remove first</button>
        <button onClick={handleRemoveByIndex(value.length - 1)}>
          Remove last
        </button>
      </div>
    </div>
  )
}
