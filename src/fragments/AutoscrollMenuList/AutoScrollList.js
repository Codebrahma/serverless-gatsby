import React from 'react'
import ReactDOM from 'react-dom'
import {
  Absolute,
  Box,
  Background,
  Flex,
  TextWithIcon,
  Heading,
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
import RedRectangleDots from 'src/assets/images/redRectangleDots.png'
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
        mb={[5, 5, 7, 8]}
        px={[0, 0, 3]}
      >
        <Box mb={5}>
          <TextWithIcon
            iconSrc={RedRectangleDots}
            iconHeight="30px"
            iconWidth="70px"
            iconTop="-5px"
            iconLeft="-15px"
            backgroundSize="auto"
          >
            <Heading.h2
              fontFamily="SoleilBk"
              fontSize={[5, 5, 5, 7]}
              lineHeight={0}
              letterSpacing="0.5px"
            >
              {title}
            </Heading.h2>
          </TextWithIcon>
        </Box>
        <Image
          src={image}
          alt={title}
          width={1}
          height='auto'
        />
        { body }
      </Flex.column>
    )
  }
}

class AutoScrollList extends React.Component {
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
          height="fullHeight"
          width={[0, 0, 0, 1/3]}
          left={-25}
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
              pr={8}
            >
              <List
                my={[4, 4, 6, 8]}
                mx={2}
                p={0}
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