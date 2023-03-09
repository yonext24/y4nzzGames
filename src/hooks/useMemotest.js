import { useEffect, useState } from 'react'
import { data } from '../assets/data'

export const useMemotest = ({ time, difficulty }) => {
  const [timer, setTimer] = useState(time)
  const [guessed, setGuessed] = useState([])
  const [selected, setSelected] = useState([])
  const [lastGuessed, setLastGuessed] = useState([])
  const [lost, setLost] = useState(false)

  const memotestData = difficulty === 'easy' ? data.easy : difficulty === 'medium' ? data.medium : data.hard

  const handleClick = (el) => {
    if (guessed.includes(el) || selected.includes(el) || selected.length >= 2) return
    setSelected(prev => prev.concat(el))
  }

  useEffect(() => {
    if (timer <= 0) {
      setLost(true)
      return
    }

    const timeout = setTimeout(() => {
      setTimer(prev => prev - 1)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [timer])

  useEffect(() => {
    if (!selected[1]) return
    if (selected[0].split('|')[1] === selected[1].split('|')[1]) {
      setGuessed(prev => prev.concat(selected))
      setLastGuessed(selected)
      setSelected([])
      return
    }
    const timeout = setTimeout(() => {
      setSelected([])
    }, 1000)

    return () => clearTimeout(timeout)
  }, [selected])

  useEffect(() => {
    if (guessed.length === memotestData) {
      setTimeout(() => { alert('you have won!') }, 1500)
    }
  }, [guessed])

  return { guessed, selected, lost, timer, handleClick, lastGuessed, memotestData }
}
