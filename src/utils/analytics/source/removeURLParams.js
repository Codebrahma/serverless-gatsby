/*
  Remove all URL Params from a URL
*/
const removeURLParams = () => {
  if (typeof window === 'undefined' || !window.history || !history.replaceState) {
    return false
  }
  history.replaceState({}, '', window.location.href.split('?')[0])
  return Promise.resolve()
}
export default removeURLParams
