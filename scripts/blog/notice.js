const config = require('./config')
const fs = require('fs-extra')
const path = require('path')
const warningFile = '.MAKE_EDITS_IN_SERVERLESS-BLOG_DIRECTORY'

const contents = `-------------
${warningFile}
Notice to anyone working on the blog
-------------

Any local edits in this ${config.siteBlogPath} directory will not be saved

These blog markdown files are pulled from ./serverless-blog directory

Please make changes to blog posts in ${config.blogRepoPostPath}.

Then you can push up those changes to the ${config.repoURL} repo

`

module.exports = function blogNotice() {
  fs.writeFile(path.join(config.siteBlogPath, warningFile), contents, (err) => {
    if (err) {
      console.log(err)
    }
  })
}
