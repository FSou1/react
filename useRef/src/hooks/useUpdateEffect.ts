import { EffectCallback, DependencyList } from 'react'
import { useRef, useEffect } from 'react'

export function useUpdateEffect (effect: EffectCallback, deps?: DependencyList) {
  const isFirstRender = useRef<boolean>(true)

  return useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    return effect()
  }, deps)
}
