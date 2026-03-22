import React from 'react'
import { useEffect, useRef } from 'react'

export function useIsMounted (){
  const isMounted = useRef(false)

  useEffect(() => {
    console.log('is mounted', isMounted.current)

    isMounted.current = true

    return () => {
      isMounted.current = false
    }
  }, [])

  console.log('is mounted', isMounted.current)

  return isMounted
}
