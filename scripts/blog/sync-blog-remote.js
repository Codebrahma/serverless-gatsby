const download = require('../utils/download')
const config = require('./config')
const emptyDirectory = require('../utils/empty-directory')
const blogRepoPath = config.blogRepoPath
const downloadLink = config.downloadLink
const rimraf = require('rimraf')

rimraf(blogRepoPath, () => {
  console.log('empty local blog directory')
  download(downloadLink, blogRepoPath, (error) => {
    if (error) {
      console.log(error)
      console.log('DOWNLOAD ERROR')
      return false
    }
    console.log('Finished downloading latest blog')
    console.log(blogRepoPath)
  })
})
