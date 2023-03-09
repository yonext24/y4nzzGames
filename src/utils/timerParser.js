export function timerParser (timer) {
  let minutes = Math.floor(timer / 60)
  let seconds = Math.floor(timer % 60)

  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }
  return `${minutes}:${seconds}`
}
