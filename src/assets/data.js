import { sortFunction } from '../utils/sortFunction'
import { flatMapFunction } from '../utils/flatMapFunction'

const easy = sortFunction(flatMapFunction([
  '/memotest/ok.jpg',
  '/memotest/gatotriste.jpg',
  '/memotest/gatopikete.jpg',
  '/memotest/personatriste.jpg',
  '/memotest/personatirada.jpg',
  '/memotest/gatoconlentes.jpg'
]))

const medium = sortFunction(flatMapFunction([
  '/memotest/ok.jpg',
  '/memotest/gatotriste.jpg',
  '/memotest/gatopikete.jpg',
  '/memotest/personatriste.jpg',
  '/memotest/personatirada.jpg',
  '/memotest/gatoconlentes.jpg',
  '/memotest/patopikete.png',
  '/memotest/fantasma.jpg',
  '/memotest/gatitouwu.jpg',
  '/memotest/dino.jpg'
]))

const hard = sortFunction(flatMapFunction([
  '/memotest/ok.jpg',
  '/memotest/gatotriste.jpg',
  '/memotest/gatopikete.jpg',
  '/memotest/personatriste.jpg',
  '/memotest/personatirada.jpg',
  '/memotest/gatoconlentes.jpg',
  '/memotest/patopikete.png',
  '/memotest/fantasma.jpg',
  '/memotest/gatitouwu.jpg',
  '/memotest/dino.jpg'
]))

export const data = {
  easy,
  medium,
  hard
}
