import React, { useState, useCallback } from 'react'

type UseArrayActions<T> = {
  push: (item: T) => void
  removeByIndex: (index: number) => void
}

export function useArray<T> (
  initialValue: T[]
): { value: T[] } & UseArrayActions<T> {
  const [state, setState] = useState<T[]>(initialValue)

  const handlePush = useCallback((item: T) => {
    setState(prevState => [...prevState, item])
  }, [])

  const handleRemoveByIndex = useCallback((index: number) => {
    setState(prevState => prevState.filter((_, i) => index !== i))
  }, [])

  return {
    value: state,
    push: handlePush,
    removeByIndex: handleRemoveByIndex
  }
}
