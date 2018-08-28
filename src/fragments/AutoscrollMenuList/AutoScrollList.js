import React from 'react'
import ReactDOM from 'react-dom'
import {
  Box,
  Flex,
  TextWithIcon,
  Heading,
  Image,
  List,
  ListItem,
  Text
} from 'serverless-design-system/src'
import RedRectangleDots from '../../assets/images/redRectangleDots.png'

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
    const domNode = ReactDOM.findDOMNode(this[scrollToIndex])
    window.scrollTo(0, domNode.offsetTop - 100)
  }

  render() {
    const { listData } = this.props
    return (
      <React.Fragment>
        <Box width={[1, 1, 1/3]}>
          <List m={0}>
            {
              listData.map(({ title }, index) => (
                <ListItem
                  key={title}
                  pb={2}
                  px={3}
                  styleType='none'
                  onClick={() => this.scrollToListItem(index)}
                >
                  <Text.span
                    fontSize={1}
                    lineHeight={1}
                    letterSpacing="0.6px"
                  >
                    {title}
                  </Text.span>
                </ListItem>
              ))
            }
          </List>
        </Box>
        <Box width={[1, 1, 2/3]}>
          {
            listData.map((item, index) => (
              <AutoScrollListItem
                key={index}
                title={item.title}
                body={item.body}
                image={item.image}
                scrollToListItem={this.scrollToListItem}
                ref={ ref => { this[index] = ref } }
              />
            ))
          }
        </Box>
      </React.Fragment>
    )
  }
}

export default AutoScrollList