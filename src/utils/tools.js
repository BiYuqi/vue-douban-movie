export const throttle = (delay, times, callback) => {
  let startTime = (new Date()).getTime()
  let timer = null
  return function () {
    let currTime = (new Date()).getTime()
    let that = this
    let args = arguments
    clearTimeout(timer)
    if (currTime - startTime >= delay) {
      callback.apply(that, args)
      startTime = currTime
    } else {
      timer = setTimeout(function () {
        callback.apply(that, args)
      }, times)
    }
  }
}
