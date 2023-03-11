import { useState } from 'react'
import { CountDown } from '../components/CountDown'
import { MemotestGame } from '../components/MemotestGame'
import { DownArrow } from '../icons/DownArrow'
import { UpArrow } from '../icons/UpArrow'
import { DoubleDownArrow } from '../icons/DoubleDownArrow'
import { DoubleUpArrow } from '../icons/DoubleUpArrow'
import { timerParser } from '../utils/timerParser'

export function MemoTest () {
  const [playing, setPlaying] = useState(false)
  const [countDown, setCountDown] = useState(false)
  const [difficulty, setDifficulty] = useState('easy')
  const [timer, setTimer] = useState(90)

  return <main className='mx-auto w-full h-full flex flex-col overflow-hidden'>
    {
      !playing && <h1 className='text-4xl font-bold my-5 text-center'><span className='text-blue-600'>Y4nzz</span> Memotest</h1>
    }
    {
      countDown && <CountDown setPlaying={setPlaying} setCountDown={setCountDown} />
    }
    {
      (!playing && !countDown) && <div className='w-5/6 mx-auto h-5/6 bg-blue-500 rounded-md flex flex-col items-center gap-y-4 text-white'>
        <h2 className='text-3xl font-bold mt-2'>OPTIONS</h2>
        <h2 className='text-3xl font-bold mt-2'>Difficulty</h2>
        <div className='flex border border-white rounded-3xl bg-blue-900 overflow-hidden [&>button]:flex-1 [&>button]:p-4 [&>button]:font-bold'>
          <button onClick={() => { setDifficulty('easy') }} className={`${difficulty === 'easy' ? 'bg-yellow-500 text-black' : ''}`}>Easy</button>
          <button onClick={() => { setDifficulty('medium') }} className={`${difficulty === 'medium' ? 'bg-yellow-500 text-black' : ''}`}>Medium</button>
          <button onClick={() => { setDifficulty('hard') }} className={`${difficulty === 'hard' ? 'bg-yellow-500 text-black' : ''}`}>Hard</button>
        </div>

        <h2 className='text-3xl font-bold mt-2'>Timer</h2>

        <div className='font-bold flex items-center gap-x-4 rounded-md overflow-hidden'>
          <div className='bg-blue-900 px-6 py-4 h-full flex items-center justify-center w-[100px]'><span>{timerParser(timer)}</span></div>
          <div className='flex flex-col bg-blue-900 px-4 py-4'>
            <button onClick={() => setTimer(prev => prev + 1)}><UpArrow /></button>
            <button disabled={timer <= 10} onClick={() => setTimer(prev => prev - 1)}><DownArrow /></button>
          </div>
          <div className='flex flex-col bg-blue-900 px-4 py-4'>
            <button onClick={() => setTimer(prev => prev + 15)}><DoubleUpArrow /></button>
            <button disabled={timer <= 24} onClick={() => setTimer(prev => prev - 15)}><DoubleDownArrow /></button>
          </div>
        </div>

        <button onClick={() => setCountDown(true)} className='bg-yellow-500 text-black py-4 px-6 font-bold rounded-3xl'>Play</button>

      </div>
    }
    {
      playing && <MemotestGame setPlaying={setPlaying} difficulty={difficulty} time={timer} />
    }
  </main>
}
