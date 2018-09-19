import React from 'react'
import Breadcrumbs from 'src/components/Breadcrumbs'
import SearchBox from './SearchBox'

export default ({ url }) => {
  let searchBox
  if (typeof window !== 'undefined' && window.outerWidth < 600) {
    searchBox = (<SearchBox />)
  }
  const breadCrumbContent = (
    <div className="versionNumber">
      Docs Version: {process.env.GATSBY_DOCS_VERSION}
    </div>
  )
  return (
    <div className="breadCrumbContainer docs-breadcrumbs">
      <Breadcrumbs path={url} rightContent={breadCrumbContent} />
      {searchBox}
    </div>
  )
}
