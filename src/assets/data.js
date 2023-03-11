import { sortFunction } from '../utils/sortFunction'
import { flatMapFunction } from '../utils/flatMapFunction'

const easy = sortFunction(flatMapFunction([
  '/memotest/ok.webp',
  '/memotest/gatotriste.webp',
  '/memotest/gatopikete.webp',
  '/memotest/personatriste.webp',
  '/memotest/personatirada.webp',
  '/memotest/gatoconlentes.webp'
]))

const medium = sortFunction(flatMapFunction([
  '/memotest/ok.webp',
  '/memotest/gatotriste.webp',
  '/memotest/gatopikete.webp',
  '/memotest/personatriste.webp',
  '/memotest/personatirada.webp',
  '/memotest/gatoconlentes.webp',
  '/memotest/patopikete.webp',
  '/memotest/fantasma.webp',
  '/memotest/gatitouwu.webp',
  '/memotest/dino.webp'
]))

const hard = sortFunction(flatMapFunction([
  '/memotest/ok.webp',
  '/memotest/gatotriste.webp',
  '/memotest/gatopikete.webp',
  '/memotest/personatriste.webp',
  '/memotest/personatirada.webp',
  '/memotest/gatoconlentes.webp',
  '/memotest/patopikete.webp',
  '/memotest/fantasma.webp',
  '/memotest/gatitouwu.webp',
  '/memotest/dino.webp',
  '/memotest/dinouwu.webp',
  '/memotest/gatoagua.webp',
  '/memotest/gatitolastimado.webp',
  '/memotest/estirador.webp',
  '/memotest/llama.webp',
  '/memotest/gatoculo.webp'
]))

export const data = {
  easy,
  medium,
  hard
}
