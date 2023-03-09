import { useEffect, useState } from 'react'

export function MemotestCard ({ handleClick, data, showing, lastGuessed }) {
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    if (lastGuessed.includes(data.key)) {
      setTimeout(() => { setAnimating(true) }, 800)
      setTimeout(() => { setAnimating(false) }, 1000)
    }
  }, [lastGuessed])

  useEffect(() => {
    if (showing) {
      setAnimating(true)
      setTimeout(() => {
        setAnimating(false)
      }, 300)
    }
  }, [showing])

  return <div onClick={() => handleClick(data.key)} className={`MEMOTESTFLIP cursor-pointer grid place-content-center text-3xl transition-colors
  ${!showing ? 'bg-gray-200' : 'bg-white FLIPPED'} ${animating ? 'SCALING' : ''} border border-black rounded-md select-none aspect-[12/16]`}>

    <div className='BACKPART h-full flex overflow-hidden rounded-md bg-white'>
    {
      showing && <img draggable={false} src={data.el} className='object-contain my-auto' />
    }
    </div>

    <div className='FRONTPART h-full w-full place-content-center overflow-hidden'>
      <img draggable={false} src='/memotest/backimage.jpg' className='object-cover h-full rounded-md w-full scale-110' />
    </div>
  </div>
}
