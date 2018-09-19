const path = require('path')
const fs = require('fs-extra')
const projectRoot = path.join(__dirname, '..')
const siteConfigGenerator = require('./../src/_config')

const envs = [ 'development', 'production' ]

envs.forEach((environment) => {
  const isProdEnv = environment === 'production'
  const siteConfig = siteConfigGenerator(isProdEnv)
  const destPath = path.join(projectRoot, `.env.${environment}`)

  const config = Object.keys(siteConfig)
    .map((key) => `GATSBY_${key}=${siteConfig[key]}`)
    .join("\n")

  try {
    fs.writeFileSync(destPath, config, 'utf-8')
  }
  catch (e) {
    return console.log('error:', e)
  }
  console.log(`${destPath} file generated`)
})

console.log('config generation done!')
