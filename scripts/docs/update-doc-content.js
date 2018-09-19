const fs = require('fs-extra')
const path = require('path')
const dir = require('node-dir')
const matter = require('gray-matter')
const jsonToYaml = require('yamljs')

module.exports = function updateFileContents(filePath, callBack) {
  dir.readFiles(filePath, {
    match: /.md$/,
    //exclude: /^\./
  }, (err, content, filename, next) => {
    if (err) throw err

    const replace = fixYamlContent(content, filename)
    // parse yaml frontmatter for title
    const item = matter(replace).data
    item.gitLink = filename.split('framework')[1]
    const updatedFrontmatter = jsonToYaml.stringify(item)
    // regex patterns to match frontmatter
    // ---(\s*?.*?)*?---
    // ^(---)(\s*?.*?)*?(---)
    // ^---(\s*?.*?)*?---
    const newYamlContent = `---
${updatedFrontmatter}---`

    const docLinkRegex = /<!--.*DOCS-SITE-LINK:START((.|\n)*?END.*-->)/g
    const blankLineRegex = /^\s*\n/gm
    const stripGithubSpecificContent = replace.replace(docLinkRegex, '')
    const replaceBlankLines = stripGithubSpecificContent.replace(blankLineRegex, '\n')
    const updatedYamlContent = replaceBlankLines.replace(/^---(\s*?.*?)*?---/, newYamlContent)
    // replace .md links
    const finalNewContent = updatedYamlContent.replace(/\.md">/gm, '">')
    fs.writeFileSync(filename, finalNewContent)

    if (path.basename(filename) === 'README.md') {
      const newName = path.join(path.dirname(filename), 'index.md')
      fs.renameSync(filename, newName, (error) => {
        if (error) {
          callBack(error)
        }
      })
    }
    next()
  },
    (err, files) => {
      if (err) {
        callBack(err)
      }
      callBack && callBack(null, files)
    }
  )
}

function fixYamlContent(content, filename) {
  // fix links for website
  let fixedContent = content.replace(/([0-9]{2})-/g, '').replace(/.md\)/g, ')')
  // fix Yaml frontmatter
  fixedContent = fixedContent.replace('<!--', '---').replace('-->', '---')
  // replace /README)
  fixedContent = fixedContent.replace(/\/README\)/g, ')')
  // fix paths of links that are not index.md('README.md')
  if (path.basename(filename) !== 'README.md') {
    // replace (.. with (../..
    fixedContent = fixedContent.replace(/\(\.\./g, '(../..')
    // replace (./ with (../
    fixedContent = fixedContent.replace(/\(\.\//g, '(../')
  }
  return fixedContent
}
