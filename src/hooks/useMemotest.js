import { useEffect, useState } from 'react'
import { data } from '../assets/data'
import { sortFunction } from '../utils/sortFunction'

export const useMemotest = ({ time, difficulty }) => {
  const [timer, setTimer] = useState(time)
  const [guessed, setGuessed] = useState([])
  const [selected, setSelected] = useState([])
  const [lastGuessed, setLastGuessed] = useState([])
  const [lost, setLost] = useState(false)
  const [won, setWon] = useState(false)
  const [memotestData, setMemotestData] = useState(() => {
    return sortFunction(difficulty === 'easy' ? data.easy : difficulty === 'medium' ? data.medium : data.hard)
  })

  const handlePlayAgain = () => {
    setGuessed([])
    setSelected([])
    setTimer(time)
    setLastGuessed([])
    setMemotestData(sortFunction)
    setTimeout(() => {
      setLost(false)
      setWon(false)
    }, 1000)
  }

  const handleClick = (el) => {
    if (guessed.includes(el) || selected.includes(el) || selected.length >= 2) return
    setSelected(prev => prev.concat(el))
  }

  useEffect(() => {
    let timeout = null

    if (won) {
      if (timeout) clearTimeout(timeout)
      return
    }
    if (timer <= 0) {
      setLost(true)
      return
    }

    timeout = setTimeout(() => {
      setTimer(prev => prev - 1)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [timer, won, lost])

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
    if (guessed.length === memotestData.length) {
      setTimeout(() => { setWon(true) }, 1500)
    }
  }, [guessed])

  return { guessed, selected, lost, timer, handleClick, lastGuessed, memotestData, handlePlayAgain, won }
}
