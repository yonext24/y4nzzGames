import { useEffect, useState } from 'react'
import { timerParser } from '../utils/timerParser'

export function LostMenu ({ handlePlayAgain, lost, time, timer, difficulty, setPlaying }) {
  const [showing, setShowing] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowing(true)
    }, 100)

    return () => clearTimeout(timeout)
  }, [])

  return <div className='h-full w-full bg-[rgba(0,0,0,.9)] backdrop-blur-md absolute letf-0 top-0 z-20 flex justify-center items-center'>
  <div className={`bg-blue-700 py-6 px-10 transition-transform duration-200 ${!showing ? 'translate-x-[100vw]' : ''} flex flex-col rounded-md text-white
  font-bold gap-12`}>
    <h3 className="text-4xl">You have {lost ? 'lost' : 'won'}!</h3>
    {
      !lost && <div className='flex w-full justify-between'>
        <div className='flex'>
          <span>Initial time:</span>
          <span className='pl-1'>{timerParser(time)}</span>
        </div>
        <div className='flex'>
          <span>Time left: </span>
          <span className='pl-1'>{timerParser(timer)}</span>
        </div>
      </div>
    }
    <h3 className='capitalize'>Difficulty: {difficulty}</h3>
    <div className="flex w-full justify-between">
      <button onClick={handlePlayAgain} className="bg-yellow-500 text-black p-4 rounded-md">Play Again!</button>
      <button className="bg-yellow-500 text-black p-4 rounded-md" onClick={() => setPlaying(false)}>Menu</button>
    </div>
  </div>
</div>
}
