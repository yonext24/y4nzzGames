const easy = [
  '/memotest/ok.jpg',
  '/memotest/gatotriste.jpg',
  '/memotest/gatopikete.jpg',
  '/memotest/personatriste.jpg',
  '/memotest/personatirada.jpg',
  '/memotest/gatoconlentes.jpg'
].flatMap(el => [`a|${el}`, `b|${el}`]).sort(() => (Math.random() - 0.5))

const medium = [
  '/memotest/ok.jpg',
  '/memotest/gatotriste.jpg',
  '/memotest/gatopikete.jpg',
  '/memotest/personatriste.jpg',
  '/memotest/personatirada.jpg',
  '/memotest/gatoconlentes.jpg',
  '/memotest/patopikete.png',
  '/memotest/fantasma.png',
  '/memotest/gatitouwu.jpg',
  '/memotest/dino.jpg',
  '/memotest/dino.jpg',
  '/memotest/dino.jpg',
  '/memotest/dino.jpg'
].flatMap(el => [`a|${el}`, `b|${el}`]).sort(() => (Math.random() - 0.5))

const hard = [
  '/memotest/ok.jpg',
  '/memotest/gatotriste.jpg',
  '/memotest/gatopikete.jpg',
  '/memotest/personatriste.jpg',
  '/memotest/personatirada.jpg',
  '/memotest/gatoconlentes.jpg',
  '/memotest/patopikete.png',
  '/memotest/fantasma.png',
  '/memotest/gatitouwu.jpg',
  '/memotest/dino.jpg'
].flatMap(el => [`a|${el}`, `b|${el}`]).sort(() => (Math.random() - 0.5))

export const data = {
  easy,
  medium,
  hard
}
