
module.exports = (obj, key) => {
  const _ = (obj) => {
    const keys = Object.keys(obj)
    const len = keys.length
    for (let i = 0; i < len; i++) {
      const k = keys[i]
      const val = obj[k]
      if (key === k) {
        return val
      } else if (Object.prototype.toString.call(val) === '[object Object]') {
        let res = _(val)
        if (res !== undefined) {
          return res
        }
      }
    }
  }
  return _(obj)
}