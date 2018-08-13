/* Pick keys that are present in the obj, as per items array */
export default (obj, items) => Object.keys(obj)
  .filter(key => items.indexOf(key) !== -1)
  .reduce((accumulator, key) => { 
    accumulator[key] = obj[key];
    return accumulator; 
  }, {});