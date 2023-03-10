import { Link } from 'wouter'

export function LostMenu ({ showingLost, handlePlayAgain, lost }) {
  return <div className='h-full w-full bg-[rgba(0,0,0,.9)] backdrop-blur-md absolute letf-0 top-0 z-20 flex justify-center items-center'>
  <div className={`bg-blue-700 py-6 px-10 transition-transform ${!showingLost && lost ? 'translate-x-[100vw]' : ''} flex flex-col rounded-md text-white
  font-bold gap-12`}>
    <h3 className="text-4xl">You have {lost ? 'lost' : 'won'}!</h3>
    <div className="flex w-full justify-between">
      <button onClick={handlePlayAgain} className="bg-yellow-500 text-black p-4 rounded-md">Play Again!</button>
      <Link href='/'>
        <a className="bg-yellow-500 text-black p-4 rounded-md">Menu</a>
      </Link>
    </div>
  </div>
</div>
}
