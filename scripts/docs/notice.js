const config = require('./config')
const fs = require('fs-extra')
const path = require('path')
const warningFile = '.MAKE_EDITS_IN_SERVERLESS_DIRECTORY'

const contents = `-------------
${warningFile}
Notice to anyone working on the docs
-------------

Any local edits in this ${config.siteDocsPath} directory will not be saved.

These doc markdown files are pulled from ./serverless/docs directory

Please make changes to doc files in ${config.blogRepoPostPath}.

Then you can push up those changes to the ${config.repoURL} repo

`

module.exports = function blogNotice() {
  fs.writeFile(path.join(config.siteDocsPath, warningFile), contents, (err) => {
    if (err) {
      console.log(err)
    }
  })
}
