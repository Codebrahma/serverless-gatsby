import React from 'react'
import ReactDOM from 'react-dom'
import { Position, Card, Column, Image } from 'serverless-design-system/src'
import { getBlogLink } from 'src/utils/blog'
import facebookIcon from 'src/assets/images/facebook-black.svg'
import twitterIcon from 'src/assets/images/twitter-black.svg'
import linkedinIcon from 'src/assets/images/twitter-black.svg'

const Icon = ({ link, icon }) => (
  <Card
    bg="white"
    boxShadow="2px 2px 8px 0 #dfe5e6"
    border="solid 1px #dfe5e6"
    m="5px"
  >
    <a href={link} target="_blank">
      <Column
        height={44}
        width={44}
        p={1}
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={icon}
          maxWidth={20}
          maxHeight={18}
          objectFit="contain"
        />
      </Column>
    </a>
  </Card>
)

export default class SubscribeAndShareIcons extends React.Component {

  constructor(props) {
    super(props)
    this.state = { position: 'absolute' }
    this.blogLink = `https://serverless.com${getBlogLink(props.id)}`
  }

  componentDidMount() {
    // initialize offsets
    this.getBottomOffset()
    this.getLeftOffset()

    document.addEventListener('scroll', this.scrollListener)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollListener)
  }

  scrollListener = () => {
    const { position } = this.state
    const isFixedPosition = position === 'fixed'

    if (isFixedPosition) {
      if ( window.scrollY < 700 || window.scrollY > this.getBottomOffset() ) {
        return this.setState({ position: 'absolute' })
      }
    } else  {
      if ( window.scrollY > 700 && window.scrollY < this.getBottomOffset() ) {
        return this.setState({ position: 'fixed' })
      }
    }
  }

  getLeftOffset = () => {
    if (this.rightOffset) { return this.rightOffset }
    if (this.ref) {
      const parent = ReactDOM.findDOMNode(this.ref).parentNode
      this.rightOffset = parent.offsetLeft + parent.offsetWidth - 65
      return this.rightOffset;
    }
    return 1220
  }

  getBottomOffset = () => {
    if (this.bottomOffset) { return this.bottomOffset }
    if (this.ref) {
      const parent = ReactDOM.findDOMNode(this.ref).parentNode
      this.bottomOffset = parent.offsetTop + parent.offsetHeight - 300
      return this.bottomOffset;
    }
  }

  render() {
    const { title } = this.props
    const { position } = this.state
    const isFixedPosition = position === 'fixed'

    return (
      <React.Fragment>
        <Position
          position={position}
          top={isFixedPosition ? 375 : 850}
          right={isFixedPosition ? '' : 20}
          left={isFixedPosition ? this.getLeftOffset() : ''}
          display={['none', 'none', 'none', 'block']}
          ref={(ref) => { this.ref = ref }}
        >
          <Column>
            <Icon
              icon={facebookIcon}
              link={`http://www.facebook.com/sharer.php?u=${this.blogLink}`}
            />
            <Icon
              icon={twitterIcon}
              link={`https://twitter.com/intent/tweet?url=${this.blogLink}&text=${title}`}
            />
            <Icon
              icon={linkedinIcon}
              link={`https://www.linkedin.com/shareArticle?mini=true&url=${this.blogLink}&title=${title}`}
            />
          </Column>
        </Position>
      </React.Fragment>
    )
  }
}
