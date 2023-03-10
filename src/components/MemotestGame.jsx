import { useMemotest } from '../hooks/useMemotest'
import { timerParser } from '../utils/timerParser'
import { MemotestCard } from './MemotestCard'

export function MemotestGame ({ time, difficulty }) {
  const { guessed, selected, handleClick, lastGuessed, timer, lost, memotestData } = useMemotest({ time, difficulty })
  console.log(lost)
  return (
    <div className='w-full h-full grid grid-cols-[75%,25%] max-[750px]:grid-cols-none max-[750px]:grid-rows-[90%,10%]'>
      <div className="CUSTOM-SCROLL w-11/12 px-1 py-3 h-screen mx-auto flex flex-wrap justify-center gap-3 overflow-x-hidden overflow-auto max-w-[700px]
      max-[950px]:h-auto max-[950px]:w-full">
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
      <div className='bg-mainGray flex flex-col max-[750px]:flex-row max-[950px]:justify-center max-[950px]:gap-x-4'>
        <h1 className='text-white text-5xl text-center font-bold mt-4 max-[950px]:my-auto'>{ timerParser(timer) }</h1>
        <span className='text-white text-xl text-center font-bold max-[950px]:my-auto capitalize'>{difficulty}</span>
      </div>
    </div>
  )
}
