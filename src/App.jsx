import React from 'react'
import { Link, Route } from 'wouter'
import { MemoTest } from './pages/MemoTest'

function App () {
  return (
    <div className='h-full w-full'>

      <Route path='/'>
        <Link href="/memotest">
          <a className=''>Memotest</a>
        </Link>
      </Route>

      <Route path='/memotest' component={MemoTest} />
    </div>
  )
}

export default App
