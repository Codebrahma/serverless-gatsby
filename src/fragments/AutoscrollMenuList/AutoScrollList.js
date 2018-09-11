import React from 'react'
import ReactDOM from 'react-dom'
import {
  Absolute,
  Box,
  Background,
  Flex,
  Image,
  List,
  ListItem,
  Relative,
  ResponsiveStack,
  Text,
  Transition,
  withBeforeAfter,
} from 'serverless-design-system/src'

import { AppContainer } from 'src/components'
import { TitleWithIcon } from 'src/fragments'
import sidebarBackground from 'src/assets/images/sidebar-background.png'

const TitleWrapperWithLeadingSlash = withBeforeAfter(
  Transition,
  `&`,
  `
    position: absolute;
    content: ' ';
    width: 0;
    height: 0;
    opacity: 0;
    margin-top: -12.5px;
    top: 50%;
    transition: all .2s;
    transition-property: height, width;
  `,
  ``,
  `
    cursor: pointer;
    position: relative;

    &:hover {
      &:before {
        opacity: 1;
        height: 25px;
        width: 5px;
        transform: rotateZ(200deg);
      }
    }
  `
)

class AutoScrollListItem extends React.Component {
  render() {
    const { title, body, image } = this.props

    return (
      <Flex.column
        mb={[4, 4, 5, 8]}
        px={[0, 0, 3]}
      >
        <Box mb={[2, 2, 3 ]}>
          <TitleWithIcon>{title}</TitleWithIcon>
        </Box>
        <Box
          width={1}
          mb={2}
        >
          <Image
            src={image}
            alt={title}
            width={1}
            height='auto'
          />
        </Box>
        { body }
      </Flex.column>
    )
  }
}

class AutoScrollList extends React.Component {
  componentDidMount() {
    document.onscroll = this.fixSidebar
  }

  fixSidebar = () => {
    const container = ReactDOM.findDOMNode(this.container)
    const lastItem = ReactDOM.findDOMNode(this[this.props.listData.length - 1])

    if (container && lastItem) {
      const sidebarNode = ReactDOM.findDOMNode(this.sidebar)
      const sidebarBackgroundNode = ReactDOM.findDOMNode(this.sidebarBackground)
      const lastItemOffsetTop = (container.offsetTop + lastItem.offsetTop + sidebarNode.offsetHeight - 150)
      const crossedHero = (container.offsetTop < window.pageYOffset)
      const crossedLastItem = (lastItemOffsetTop < window.pageYOffset)

      sidebarBackgroundNode.style.position = crossedHero ? 'fixed' : 'absolute'
      sidebarNode.style.position = crossedHero && !crossedLastItem ? 'fixed' : 'relative'
      sidebarNode.style.top = crossedLastItem ? `${lastItemOffsetTop - sidebarNode.offsetHeight - 250}px` : 0
    }
  }

  scrollToListItem = (scrollToIndex) => {
    const { offsetTop: containerOffset } = ReactDOM.findDOMNode(this.container)
    const { offsetTop: topicOffset } = ReactDOM.findDOMNode(this[scrollToIndex])
    window.scrollTo(0, containerOffset + topicOffset - 100)
  }

  render() {
    const { listData } = this.props
    return (
      <Relative width={1} ref={(ref) => { this.container = ref }}>
        <Absolute
          height="100vh"
          width={[0, 0, 0, "34vw", "32vw"]}
          top="0"
          zIndex="-1"
          left={-25}
          ref={(ref) => { this.sidebarBackground = ref }}
        >
          <Background
            height="fullHeight"
            width={1}
            background={`url(${sidebarBackground})`}
            backgroundSize="cover"
          />
        </Absolute>

        <AppContainer>
          <ResponsiveStack>
            <Box
              display={['none', 'none', 'none', 'block']}
              width={1/3}
              pr={2}
            >
              <Relative
                width={1}
                top={0}
                maxWidth="300px"
                ref={(ref) => { this.sidebar = ref }}
              >
                <List
                  my={0}
                  mx={2}
                  py={[4, 4, 6, 8]}
                  px={0}
                >
                  {
                    listData.map(({ title }, index) => (
                      <ListItem
                        key={title}
                        pb={2}
                        px={0}
                        styleType='none'
                        onClick={() => this.scrollToListItem(index)}
                      >
                        <TitleWrapperWithLeadingSlash
                          transition={[
                            'none',
                            'none',
                            'none',
                            'padding 0.5s',
                          ]}
                          beforeBoxBackgroundColor={[
                            'transparent',
                            'transparent',
                            'transparent',
                            'primaryColor',
                          ]}
                          beforeBoxLeft={[0, 0, 0, '-18px']}
                        >
                          <Text.span
                            fontSize={1}
                            lineHeight={1}
                            letterSpacing="0.6px"
                          >
                            {title}
                          </Text.span>
                        </TitleWrapperWithLeadingSlash>
                      </ListItem>
                    ))
                  }
                </List>
              </Relative>
            </Box>
            <Box
              width={[1, 1, 1, 2/3]}
              py={[4, 4, 6, 8]}
            >
              {
                listData.map((item, index) => (
                  <AutoScrollListItem
                    key={index}
                    title={item.title}
                    body={item.body}
                    image={item.image}
                    ref={ ref => { this[index] = ref } }
                  />
                ))
              }
            </Box>
          </ResponsiveStack>
        </AppContainer>
      </Relative>
    )
  }
}

export default AutoScrollList