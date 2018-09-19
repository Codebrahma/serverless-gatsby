/*
  Copy categories.json and featured-posts.json to the configured place
*/
const path = require('path')
const asyncLib = require('async')
const config = require('./config')
const copyFiles = require('../utils/copy-files')
const blogRepoPath = config.blogRepoPath
const categoryDataDestinationPath = config.categoriesDataPath
const featuredBlogsDataDestinationPath = config.featuredBlogsDataPath
const categoryDataSourcePath = path.join(blogRepoPath, 'categories.json')
const featuredBlogsDataSourcePath = path.join(blogRepoPath, 'featured-blogs.json')

module.exports = function copyCategoriesAndFeaturedBlogsData() {
  asyncLib.waterfall([
    function (next) {
      copyFiles(categoryDataSourcePath, categoryDataDestinationPath, (err) => {
        if (err) return next(err)
        console.log('Copied categories.json file successfully')
        next(null)
      })
    },
    function (next) {
      copyFiles(featuredBlogsDataSourcePath, featuredBlogsDataDestinationPath, (err) => {
        if (err) return next(err)
        console.log('Copied featured-blogs.json file successfully')
        next(null)
      })
    },
  ], (err, result) => {
    if (err) {
      console.log('error', err)
    }
  })
}
