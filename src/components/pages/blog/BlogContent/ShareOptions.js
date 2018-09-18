import React from 'react'
import {
  Column,
  InlineBlock,
  Absolute,
  Card,
  Image,
  Position,
} from 'serverless-design-system/src'
import { getBlogLink } from 'src/utils/blog'
import facebookIcon from 'src/assets/images/facebook-black.svg'
import twitterIcon from 'src/assets/images/twitter-black.svg'
import linkedinIcon from 'src/assets/images/linkedin-black.svg'

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

export default class ShareOptions extends React.Component {
  constructor(props) {
    super(props)
    this.blogLink = `https://serverless.com${getBlogLink(props.id)}`
  }

  render() {
    const { title } = this.props

    return (
      <Position
        position="sticky"
        top="50%"
        height={20}
        width={1}
      >
        <Absolute
          display={['none', 'none', 'none', 'block']}
          right={20}
        >
          <InlineBlock>
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
          </InlineBlock>
        </Absolute>
      </Position>
    )
  }
}
