import { useEffect } from 'react'
import { useState, useRef } from 'react'

export default function Stopwatch () {
  const [secondsPassed, setSecondsPassed] = useState(0)
  const [status, setStatus] = useState('idle')
  const [log, setLog] = useState([])

  const intervalIdRef = useRef(null)
  const startTimeRef = useRef(null)
  const initialStartTimeRef = useRef(null)

  const handleStart = () => {
    if (status !== 'idle') return

    const now = Date.now()
    startTimeRef.current = now
    initialStartTimeRef.current = now
    setSecondsPassed(0)
    setStatus('running')

    intervalIdRef.current = setInterval(() => {
      setSecondsPassed((Date.now() - startTimeRef.current) / 1000)
    }, 10)
  }

  const handleStop = () => {
    if (status === 'idle') return

    const stoppedTime = Date.now()
    const finalSeconds =
      status === 'running'
        ? (stoppedTime - startTimeRef.current) / 1000
        : secondsPassed

    const startedAt = new Date(initialStartTimeRef.current).toLocaleString()
    const stoppedAt = new Date(stoppedTime).toLocaleString()

    setLog(prevLog => [
      ...prevLog,
      `Started at ${startedAt}, seconds passed ${finalSeconds.toFixed(
        3
      )}, stopped at ${stoppedAt}`
    ])

    clearInterval(intervalIdRef.current)
    intervalIdRef.current = null
    startTimeRef.current = null
    initialStartTimeRef.current = null
    setSecondsPassed(0)
    setStatus('idle')
  }

  const handlePause = () => {
    if (status !== 'running') return

    clearInterval(intervalIdRef.current)
    intervalIdRef.current = null
    setStatus('paused')
  }

  const handleContinue = () => {
    if (status !== 'paused') return

    startTimeRef.current = Date.now() - secondsPassed * 1000
    setStatus('running')

    intervalIdRef.current = setInterval(() => {
      setSecondsPassed((Date.now() - startTimeRef.current) / 1000)
    }, 10)
  }

  useEffect(() => {
    return () => clearInterval(intervalIdRef.current)
  }, [])

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>

      {status === 'idle' && <button onClick={handleStart}>Start</button>}
      {status === 'running' && <button onClick={handlePause}>Pause</button>}
      {status === 'paused' && (
        <button onClick={handleContinue}>Continue</button>
      )}
      {status !== 'idle' && <button onClick={handleStop}>Stop</button>}

      {log.length > 0 && (
        <ul>
          {log.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      )}
    </>
  )
}
