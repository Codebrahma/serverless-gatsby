/**
 * TODO: depricate in favor of local github repo in here
 * Utility for syncing docs on local machine for debugging etc
 */
const config = require('./config')
const path = require('path')
const emptyDirectory = require('../utils/empty-directory')
const copyFiles = require('../utils/copy-files')
const serverlessDocsPath = config.serverlessDocsPath
const localdocsPath = path.join(__dirname, '..', '..', '..', '/serverless/docs/')

emptyDirectory(serverlessDocsPath, () => {
  copyFiles(localdocsPath, serverlessDocsPath, (error) => {
    if (error) {
      console.log(error)
      console.log(`Docs not found at ${localdocsPath}`)
      console.log(`Please git clone ${config.repoURL} into parent directory`)
      return false
    }
    console.log('Local docs sync done.')
    console.log(serverlessDocsPath)
    console.log('Stop and restart site')
  })
})
