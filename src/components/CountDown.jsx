import { useEffect, useState } from 'react'

export function CountDown ({ setCountDown, setPlaying }) {
  const [timing, setTiming] = useState(1)

  useEffect(() => {
    if (timing <= 0) {
      setCountDown(false)
      setPlaying(true)
    }

    const timeout = setTimeout(() => {
      setTiming(prev => prev - 1)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [timing])

  return <div className="w-full h-full grid place-content-center">
    <span className='text-5xl font-bold'>{ timing }</span>
  </div>
}
