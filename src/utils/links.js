import url from 'url'

const getGithubLink = (githubHandle) => (
  `https://github.com/${githubHandle}`
)

const getTwitterLink = (twitterHandle) => (
  `https://twitter.com/${twitterHandle}`
)

const getMediumLink = (mediumHandle) => (
  `https://medium.com/@${mediumHandle}`
)

const getLinkName = (link) => {
  if (!link) { return '' }
  const parsedURL = url.parse(link)
  return `${parsedURL.hostname}${parsedURL.pathname}`
}

export {
  getGithubLink,
  getTwitterLink,
  getMediumLink,
  getLinkName,
}
