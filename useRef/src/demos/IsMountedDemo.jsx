import React, { useEffect } from 'react'
import { useIsMounted } from '../hooks/useIsMounted'

export default function IsMountedDemo () {
  const isMounted = useIsMounted()
  const [userEmail, setUserEmail] = React.useState('')

  useEffect(() => {
    const controller = new AbortController()

    const fetchSomeData = async () => {
      try {
        const res = await fetch('https://dummyjson.com/users/1/?delay=1000', {
          signal: controller.signal
        })
        const data = await res.json()
        setUserEmail(data.email)
      } catch (error) {
        if (error.name === 'AbortError') {
          return
        }

        console.error('Fetch failed', error)
      }
    }

    fetchSomeData()

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <div>
      <p>User Email: {userEmail}</p>
      <p>Mounted ref: {isMounted.current ? 'Yes' : 'No'}</p>
    </div>
  )
}
