import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import { getCurrentUrl, getParentUrl } from 'src/utils/url'
import debounce from 'lodash.debounce'
import generatedMenu from 'src/constants/generated-menu-items'
import SearchBox from './SearchBox'

export default class Sidebar extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.sidebarNode = null
    this.sidebarNodeOffset = null
  }

  componentDidMount() {
    if (window.outerWidth > 768) {
      window.addEventListener('scroll', this.getDebouncedHandler)
      window.addEventListener('resize', this.getDebouncedHandler)
      this.sidebarNode = ReactDOM.findDOMNode(this.sidebarRef)
      this.sidebarNodeOffset = this.sidebarNode.offsetTop
      this.handleScroll()
    }
  }

  componentWillUnmount() {
    if (window.outerWidth > 768) {
      window.removeEventListener('scroll', this.getDebouncedHandler)
      window.removeEventListener('resize', this.getDebouncedHandler)
    }
  }

  getDebouncedHandler = () => debounce(this.handleScroll, 10)

  handleScroll = (_event) => {
    const offsetHeight = window.pageYOffset || document.documentElement.scrollTop
    // TODO: refactor hardcoded nav height number to variable
    const stickyNavHeight = 74
    const cachedOffset = this.sidebarNodeOffset - stickyNavHeight
    if (offsetHeight >= cachedOffset) {
      if (this.sidebarNode.style.position !== 'fixed') {
        this.sidebarNode.style.position = 'fixed'
        this.sidebarNode.style.top = `${stickyNavHeight}px`
        // this.sidebarNode.style.background = 'red'
      }
    } else {
      this.sidebarNode.style.position = 'relative'
      this.sidebarNode.style.top = '0px'
      // this.sidebarNode.style.background = 'white'
    }
  }

  renderList() {
    const { __url, head } = this.props
    const url = getCurrentUrl(__url)
    const trimmedURL = url.replace(/\/$/, '')

    let menu = []
    // Check for custom items in head yaml
    if (head && head.menuItems) {
      menu = menu.concat(head.menuItems)
    }

    // Check for items in generated nav menu
    const currentPageMenu = generatedMenu[__url] || generatedMenu[trimmedURL]
    if (currentPageMenu) {
      menu = menu.concat(currentPageMenu.children)
    }

    // Check for items in generated nav menu of parent
    if (menu.length === 0) {
      const parentMenu = generatedMenu[getParentUrl(trimmedURL)]
      if (parentMenu) {
        menu = menu.concat(parentMenu.children)
      }
    }

    // DO sort here
    let items
    const alreadyLinked = {}
    if (menu && menu.length > 0) {
      items = menu.map((item, i) => {
        const currentStyle = (item.path === trimmedURL) ? 'currentURL' : ''
        // check if already linked
        if (alreadyLinked && alreadyLinked[item.path]) {
          return null
        }
        alreadyLinked[item.path.replace(/\/$/, '')] = true
        return (
          <li key={i} className={`subPageLink ${currentStyle}`}>
            <Link to={item.path}>
              {item.title || item.menuText}
            </Link>
          </li>
        )
      })
    }
    return items
  }

  render() {
    const { __url } = this.props
    const items = this.renderList()
    const url = getCurrentUrl(__url)
    const trimmedURL = url.replace(/\/$/, '')
    const parent = trimmedURL.split('/')
    const parentName = parent[parent.length - 1]
    let parentDisplay = parentName
    let parentURL

    let menu = generatedMenu[__url] || generatedMenu[trimmedURL]
    if (!menu) {
      parentURL = getParentUrl(trimmedURL)
      menu = generatedMenu[parentURL]
    }

    if (menu && menu.index) {
      parentDisplay = menu.index[0].title
    }

    let searchBox

    if (typeof window !== 'undefined' && window.outerWidth > 600) {
      searchBox = (<SearchBox />)
    }

    return (
      <div className="sidebar">
        <div className="sidebarInner" ref={(ref) => { this.sidebarRef = ref; }}>
          {searchBox}

          <div className="pageContext">
            {parentDisplay}
          </div>

          <div className="subPages">
            <ul>
              {items}
            </ul>
          </div>

          <div className="forumCta">
            <h2>Have questions?</h2>
            <p>Head over to the <a href="https://forum.serverless.com?utm_source=framework-docs" target="_blank">forums</a> to search for your questions and issues or post a new one.</p>
          </div>
        </div>
      </div>
    )
  }
}