import React from 'react'
import Helmet from 'react-helmet'

export default class CustomHelmet extends React.Component {
  constructor(props) {
    super(props)
    this.metaData = this.generateMetaData()
  }

  generateMetaData = () => {
    let meta = []
    let link = []

    const { location = {}, description, thumbnail, rss, prefetches } = this.props
    const uri = `https://serverless.com${location.pathname}`
    const metaTitle = this.props.metaTitle || this.props.title

    meta = [
      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: metaTitle },
      { property: 'og:url', content: uri },
      { property: 'og:description', content: description },
      { property: 'og:image', content: `${process.env.GATSBY_S3_BUCKET}logos/Serverless_mark_black_400x400_v3%402x.jpg` },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: metaTitle },
      { name: 'twitter:creator', content: `@${process.env.GATSBY_TWITTER}` },
      { name: 'twitter:description', content: description },
      { name: 'description', content: description },
    ]

    if (thumbnail) {
      meta.push({ property: 'og:image', content: thumbnail })
    }

    if (rss) {
      link.push({ rel: 'alternate', type: 'application/rss+xml', href: rss, title: metaTitle })
    }

    if (prefetches && prefetches instanceof Array) {
      prefetches.forEach(prefetchLink => {
        link.push({ rel: 'prefetch', href: prefetchLink })
      })
    }

    return {
      title: metaTitle,
      meta,
      link
    }
  }

  render() {
    return (
      <Helmet { ...this.metaData } />
    )
  }
}
