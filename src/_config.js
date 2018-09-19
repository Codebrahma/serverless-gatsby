/**
 * Project config
 * NOTE: No private data/keys should be stored here.
 * KEY NAME MUST BE IN CAPITAL LETTERS
 */

const gitBranch = require('git-branch')
const serverlessPkg = require('./../serverless/package.json')

const siteConfig = (isProduction) => {
  return (
    {
      SITENAME: process.env.SITENAME || 'serverless',
      TWITTER: process.env.TWITTER || 'goServerless',
      GITHUB: process.env.GITHUB || 'serverless',
      GOOGLE_ANALYTICS_UA: (isProduction) ? 'UA-79510184-1' : 'dev',
      AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID || 'qaNtBzG1CGp0vYzDGl9O32nsh5VNw20r',
      AUTH0_DOMAIN: process.env.AUTH0_DOMAIN || 'serverlessqa.auth0.com',
      ALGOLIA_ADMIN: process.env.ALGOLIA_ADMIN || '1f21cf7b86876a3ac23e35b2657894aa',
      ALGOLIA_BLOG_INDEX: (isProduction) ? 'prod_BLOG_SEARCH' : 'dev_BLOG_SEARCH',
      ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID || 'V3VM7IN3TH',
      ALGOLIA_SEARCH_KEY: process.env.ALGOLIA_SEARCH_KEY || 'd2dac557d1fd151223e78f3597d59e78',
      // SEGMENT_KEY: process.env.SEGMENT_KEY || 'gNftvcGllpKZTe5PcAxF8pEoenLq32H0',
      CUSTOMER_IO_KEY: process.env.CUSTOMER_IO_KEY || '219fca0102ab3451a96a',
      LOGO_ICON: 'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/logos/serverless-logo.svg',
      S3_BUCKET: 'https://s3-us-west-2.amazonaws.com/assets.site.serverless.com/',

      /* Serverless API Gateway Endpoints */
      ERROR_API: 'https://kuen1ml0f0.execute-api.us-west-2.amazonaws.com/prod/report',
      NEWSLETTER_API: 'https://3upqirwiuc.execute-api.us-west-2.amazonaws.com/dev/subscribe',
      ADD_CONTACT_API: 'https://5kihmnzdb7.execute-api.us-west-2.amazonaws.com/prod/hubspot/add',
      FORMS_API: 'https://d3ul21vxig.execute-api.us-west-2.amazonaws.com/prod/handle-entry',

      BRANCH: process.env.BRANCH || gitBranch.sync(),
      DOCS_VERSION: JSON.stringify(serverlessPkg.version),
    }
  )
}

module.exports = siteConfig
