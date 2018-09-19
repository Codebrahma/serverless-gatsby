import React from 'react'

export default class SearchBox extends React.Component {
  componentDidMount() {
    initializeSearch()
  }

  render() {
    return (
      <div className='searchBumper'>
        <div className='searchWrapper'>
          <input
            className='searchBox'
            id='algolia-search'
            placeholder='&#9889;  Search docs'
            type='text'
          />
        </div>
      </div>
    )
  }
}

function initializeSearch() {
  if (typeof docsearch !== 'undefined') {
    docsearch({ // eslint-disable-line
      apiKey: 'd5a39b712b86965d93534207ef5423df',
      indexName: 'serverless',
      inputSelector: '#algolia-search',
      debug: false // set to true to style search box
    })
  } else {
    setTimeout(() => {
      initializeSearch()
    }, 50)
  }
}
