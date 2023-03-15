import { useMemotest } from '../hooks/useMemotest'
import { timerParser } from '../utils/timerParser'
import { LostMenu } from './LostMenu'
import { MemotestCard } from './MemotestCard'
import { UpArrow } from '../icons/UpArrow'

export function MemotestGame ({ time, difficulty, setPlaying }) {
  const { guessed, selected, handleClick, handlePlayAgain, lastGuessed, timer, lost, memotestData, won } = useMemotest({ time, difficulty })

  return (
    <div className='w-full h-full relative grid grid-cols-[75%,25%] max-[750px]:grid-cols-none max-[750px]:grid-rows-[90%,10%]'>
      {
        lost && <LostMenu handlePlayAgain={handlePlayAgain} difficulty={difficulty} lost={true} setPlaying={setPlaying} />
      }
      {
        won && <LostMenu handlePlayAgain={handlePlayAgain} difficulty={difficulty} lost={false} timer={timer} time={time} />
      }
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
      <div className='bg-mainGray flex flex-col max-[750px]:flex-row max-[950px]:justify-between max-[750px]:px-2'>
        <h1 className='text-white text-5xl text-center font-bold mt-4 max-[950px]:my-auto max-[400px]:text-2xl'>{ timerParser(timer) }</h1>
        <span className='text-white text-xl text-center font-bold max-[950px]:my-auto capitalize'>{difficulty}</span>
        <button onClick={() => { setPlaying(false) }} className='mt-auto mb-2 max-[750px]:my-auto bg-white font-bold py-2 pr-6 pl-2 self-center flex items-center gap-x-2
        max-[400px]:pr-2 max-[400px]:pl-1 max-[400px]:text-sm ' >
          <UpArrow isLeft={true} /> Back to menu
        </button>
      </div>
    </div>
  )
}
