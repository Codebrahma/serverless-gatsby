import AuthorData from 'src/constants/generated-authors.json'
import CategoryData from 'src/constants/categories.json'

const getAuthorById = (authorId) => {
  const author = AuthorData[authorId] || {}

  return {
    ...author,
    id: authorId,
  }
}

const getAuthorInfo = ({ frontmatter }) => (
  (frontmatter.authors || []).map(getAuthorById)[0] || {}
)

const getAuthorLink = (id) => `/author/${id}`

const getBlogLink = (id) => `/blog/${id}`

const getCategoryLink = (id) => `/category/${id}`

const getCategoryNameById = (categoryId) => CategoryData[categoryId]

const getCategoryName = ({ frontmatter }) => CategoryData[frontmatter.category]

export {
  getAuthorById,
  getAuthorInfo,
  getBlogLink,
  getCategoryLink,
  getAuthorLink,
  getCategoryNameById,
  getCategoryName,
}
