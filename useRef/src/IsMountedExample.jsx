import React, { useEffect } from 'react'
import { useIsMounted } from './useIsMounted'

export default function IsMountedExample () {
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
        console.log('ERROR', error)

        if (error.name === 'AbortError') {
          console.log('>>> Request was aborted')
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

  console.log('IsMountedExample render', isMounted.current)

  return (
    <div>
      <p>User Email: {userEmail}</p>
    </div>
  )
}
