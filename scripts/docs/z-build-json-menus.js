const config = require('./config')
const dirTree = require('directory-tree')
const filteredTree = dirTree(config.siteDocsPath, ['.md'])
const path = require('path')
const fs = require('fs-extra')
const matter = require('gray-matter')

let count = 1
let level = 1
// console.log('filteredTree', filteredTree)
module.exports = function buildMenus() {
  traverse(filteredTree, 1)
}

function traverse(x) {
  if (isArray(x)) {
    processChildrenArray(x)
  } else if ((typeof x === 'object') && (x !== null)) {
    processChildren(x)
  } else {
    console.log(count)
  }
}

function isArray(o) {
  return Object.prototype.toString.call(o) === '[object Array]'
}

function processChildrenArray(arr) {
  // console.log(level + '<array>')
  arr.forEach((x) => {
    // console.log(x.path)
    count = count + 1
    traverse(x)
  })
}

function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile()
  } catch (err) {
    return false
  }
}

function processChildren(obj) {
  if (obj.hasOwnProperty('children')) {
    // console.log('level', level)
    const filePath = obj.path
    // console.log('path', filePath)
    const subPaths = []
    obj.children.forEach((x, i) => {
      /* TODO: update check here */
      if (fs.lstatSync(x.path).isDirectory()) {
        const fullPath = x.path
        const url = fullPath.split('content')[1].replace('index', '').replace('.md', '')
        subPaths[i] = {
          title: path.basename(x.path),
          url
        }
      } else {
        const content = fs.readFileSync(x.path).toString()
        // parse yaml frontmatter for title
        const yamlInfo = matter(content).data
        const arrayItem = {
          title: yamlInfo.title,
          url: x.path
        }
        subPaths[i] = arrayItem
      }
    })
    writeJSONMenuToDirectory(filePath, JSON.stringify(subPaths))
    // console.log(obj['children'])
    traverse(obj.children, filePath)
    level = level + 1
  }
}


function writeJSONMenuToDirectory(dest, contents) {
  // var finalDest = dest.replace('content/framework', 'dist/framework')
  const p = path.join(dest, 'menu.json')
  // console.log(p)
  fs.writeFileSync(p, contents, 'utf-8', (err) => {
    if (err) {
      return console.log(err)
    }
    console.log(`${dest}/menu.js file generated`)
  })
}
