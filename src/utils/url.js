
/* fix URL encoding */
export function encode(str) {
  return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']')
}

export function cleanURL(url) {
  if (url) {
    return url.replace(/#[^#]*$/, '').replace(/\?[^\?]*$/, '')
  }
  if (typeof window === 'undefined') return false
  const { protocol, hostname, port, pathname } = window.location
  const portString = port ? `:${port}` : ''
  return `${protocol}//${hostname}${portString}${pathname}`
}

export function getParentUrl(url) {
  const arr = url.split('/')
  arr.pop()
  return arr.join('/')
}

export function getCurrentUrl(url) {
  if (url) return url
  if (typeof window !== 'undefined') {
    return window.location.pathname
  }
  // for SSR
  return 'fakeURL'
}

export function getParams(queryString) {
  var pairs = queryString.replace('?', '').split('&');
  var result = {};
  pairs.forEach(function(p) {
      var pair = p.split('=')
      var key = pair[0]
      var value = decodeURIComponent(pair[1] || '')

      if( result[key] ) {
        if( Object.prototype.toString.call( result[key] ) === '[object Array]' ) {
          result[key].push( value )
        } else {
          result[key] = [ result[key], value ]
        }
      } else {
        result[key] = value
      }
  })

  return JSON.parse(JSON.stringify(result))
}
