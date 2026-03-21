
import { Ref, useCallback, useRef, useState } from 'react'

export function useHover<T extends HTMLElement>(): [Ref<T>, boolean] {
  const [isHovered, setIsHovered] = useState(false)
  const currentNode = useRef<T | null>(null)

  const ref = useCallback((node: T | null) => {
    if (currentNode.current) {
      currentNode.current.removeEventListener('mouseenter', handleMouseEnter)
      currentNode.current.removeEventListener('mouseleave', handleMouseLeave)
    }

    if (node) {
      node.addEventListener('mouseenter', handleMouseEnter)
      node.addEventListener('mouseleave', handleMouseLeave)
    }

    currentNode.current = node
  }, [])

  function handleMouseEnter() {
    setIsHovered(true)
  }

  function handleMouseLeave() {
    setIsHovered(false)
  }

  return [ref, isHovered]
}