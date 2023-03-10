export function flatMapFunction (list) {
  return list.flatMap(el => [`a|${el}`, `b|${el}`])
}
