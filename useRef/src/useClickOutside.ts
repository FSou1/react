import { useRef, useEffect } from 'react'

function useClickOutside (onClickOutside) {
  const ref = useRef(null)
  const callbackRef = useRef(onClickOutside)

  useEffect(() => {
    callbackRef.current = onClickOutside
  }, [onClickOutside])

  useEffect(() => {
    const handleClick = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        callbackRef.current()
      }
    }

    document.addEventListener('pointerdown', handleClick)

    return () => {
      console.log('clean up')
      document.removeEventListener('pointerdown', handleClick)
    }
  }, [])

  return ref
}

export default useClickOutside
