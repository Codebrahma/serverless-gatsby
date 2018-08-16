import React from 'react'
import ReactDOM from 'react-dom'
import { Box, Flex, TextWithIcon, P, Heading, Image, List, ListItem } from 'serverless-design-system/src'
import RedRectangleDots from '../../assets/images/redRectangleDots.png'

class AutoScrollListItem extends React.Component {
  state = {}
  render() {
    const { title, contents, image } = this.props
    
    return (
      <Flex.column mb={5} px={3}>
        <Box mb={5}>
          <TextWithIcon
            iconSrc={RedRectangleDots}
            iconHeight='32px'
            iconWidth='50px'
            iconTop='10px'
            iconLeft='-20px'
          >
            <Heading.h1>{title}</Heading.h1>
          </TextWithIcon>
        </Box>
        <Image
          src={image}
          alt={title}
          mx='auto'
          width={['640px', '480px', '640px', '640px', '800px']}
        />
        {
          contents.map((content, index) => (
            <P key={index} mt={3}>
              {content}
            </P>
          ))
        }
      </Flex.column>
    )
  }
}

class AutoScrollList extends React.Component {
  state = {}

  scrollToListItem = (scrollToIndex) => {
    const domNode = ReactDOM.findDOMNode(this[scrollToIndex])
    window.scrollTo(0, domNode.offsetTop - 100)
  }

  render() {
    const { listData } = this.props
    return (
      <React.Fragment>
        <Box width={[1, 1, 1/3]}>
          <List>
            {listData.map(({ title }, index) => (
              <ListItem 
                key={title}
                m={2}
                styleType='none' onClick={() => this.scrollToListItem(index)}
              >
                {title}
              </ListItem>
            ))}
          </List>
        </Box>
        <Box width={[1, 1, 2/3]}>
          {
            listData.map((item, index) => (
              <AutoScrollListItem
                key={index}
                title={item.title}
                contents={item.contents}
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