module.exports = {
  siteMetadata: {
    title: 'Serverless - The serverless application framework powered by AWS Lambda, API gateway and more',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-root-import',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/assets/images/favicon.png",
        appName: 'Serverless',
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        version: '1.0',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
        }
      }
    }
  ],
}
