import { useMemotest } from '../hooks/useMemotest'
import { timerParser } from '../utils/timerParser'
import { MemotestCard } from './MemotestCard'

export function MemotestGame ({ time, difficulty }) {
  const { guessed, selected, handleClick, lastGuessed, timer, lost, memotestData } = useMemotest({ time, difficulty })
  console.log(lost)
  return (
    <div className='w-full h-full grid grid-cols-[75%,25%]'>
      <div className="w-11/12 h-screen mx-auto grid place-content-center grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-3 overflow-auto">
          {
            memotestData.map(key => {
              const el = key.split('|')[1]
              const showing = guessed.includes(key) || selected.includes(key)
              return (
                <MemotestCard handleClick={handleClick} key={key} data={{ el, key }} showing={showing} lastGuessed={lastGuessed} />
              )
            })
            }
      </div>
      <div className='bg-mainBlue'>
      <h1>{ timerParser(timer) }</h1>
      </div>
    </div>
  )
}
