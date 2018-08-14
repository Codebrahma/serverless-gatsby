/* Pick keys that are present in the obj, as per items array */
const pick = (obj, items) => typeof obj === 'object' ? Object.keys(obj)
  .filter(key => items.indexOf(key) !== -1)
  .reduce((accumulator, key) => { 
    accumulator[key] = obj[key]
    return accumulator
  }, {}) : {}

export default pick