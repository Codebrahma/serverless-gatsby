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
  const url = new URL(link)
  return `${url.hostname}${url.pathname}`
}

export {
  getGithubLink,
  getTwitterLink,
  getMediumLink,
  getLinkName,
}
