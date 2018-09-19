const path = require('path')
const fs = require('fs-extra')
const globby = require('globby')
const matter = require('gray-matter')
const config = require('./config')

function getDirectories() {
  const docsPath = config.siteDocsPath + '/**'
  const not = '!**/*.*'
  return globby([docsPath, not]).then(paths => {
    return paths
  })
}

function getMarkdownFiles(dir) {
  const mdFiles = dir + '/*.md'
  return globby.sync([mdFiles])
}

function buildMenuObject() {
  return getDirectories().then((directories) => {
    const flatMenu = {}
    const menuData = {}
    directories.forEach((dir) => {
      const files = fs.readdirSync(dir).filter((f) => {
        return f.match(/\.md/) || f.indexOf('.') === -1
      }).map((f) => {
        return `${dir}/${f}`
      })

      const cleanDirName = cleanPathName(dir)
      const cleanFileNames = files.map(f => cleanPathName(f))
      flatMenu[cleanDirName] = cleanFileNames

      menuData[cleanDirName] = {}

      menuData[cleanDirName].index = files.filter((f) => {
        return f.match('index')
      }).map((f) => {
        return getMarkdownData(f)
      })

      menuData[cleanDirName].children = files.filter((f) => {
        return !f.match('index')
      }).map((f) => {
        return getMarkdownData(f)
      }).sort((a, b) => {
        if (a.order > b.order) {
          return 1
        }
        if (a.order < b.order) {
          return -1
        }
        return 0
      })
    })
    return menuData
  }).then((mData) => {
    // console.log(JSON.stringify(m, null, 2))
    return mData
  }).catch((e) => {
    console.log(e)
  })
}
function getMarkdownData(file) {
  let content
  if (file.match(/\.md/)) {
    content = fs.readFileSync(file, 'utf-8')
  } else {
    content = fs.readFileSync(file + '/index.md', 'utf-8')
    // dir
  }

  // parse yaml frontmatter for title
  const yamlInfo = matter(trimContent(content)).data
  let title = yamlInfo.menuText

  if (!yamlInfo.menuText) {
    console.log(`MISSING TITLE ON ${file}`)
    console.log(`Using this instead: ${title}`)
    title = path.basename(file, '.md').replace(/_/g, ' ')
  }

  let mdData = {
    path: cleanPathName(file),
    title: title
  }

  if (yamlInfo.menuOrder) {
    mdData.order = yamlInfo.menuOrder
    // mdData.isParent = true
  }


  return mdData
}

function cleanPathName(p) {
  const pathSplit = p.split('content')
  if (pathSplit && pathSplit[1]) {
    return p.split('content')[1].replace('.md', '')
  }
  return p
}

function trimContent(content) {
  if (content) {
    return content.replace(/^\s+|\s+$/g, '')
  }
  return content
}

function generateDocMenu() {
  buildMenuObject().then((data) => {
    console.log(data)
    const content = `module.exports = ${JSON.stringify(data, null, 2)}`
    const fileName = 'generated-menu-items.js'
    const p = path.join(config.docsMenuPath, fileName)
    fs.writeFile(p, content, 'utf-8', (err) => {
      if (err) {
        return console.log(err)
      }
      console.log(`${config.docsMenuPath}${fileName} Docs file generated`)
    })
  }).catch((e) => {
    console.log(e)
  })
}

module.exports = generateDocMenu
