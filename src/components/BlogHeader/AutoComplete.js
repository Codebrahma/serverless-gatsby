import React from 'react'
import styled from 'styled-components'
import { push } from 'gatsby-link'
import {
  Card,
  Relative,
  Absolute,
  TextField,
  Text
} from 'serverless-design-system/src'
import { connectAutoComplete } from 'react-instantsearch-dom'
import { BlockLink } from 'src/components'
import { getBlogLink } from 'src/utils/blog'

const Option = styled(Relative)`
  background: white;
  color: #8c8c8c;
  border: 1px solid #f7f7f7;

  &:hover {
    color: #5b5b5b;
  }
`

const TextFieldWithNoOutline = styled(TextField)`
  &:focus {
    outline: none;
  }
`

const ENTER_KEY = 13 // enter key code.

class AutoComplete extends React.Component {
  state = { query: '' }

  onQueryChange = ({ target: { value: query } }) =>{
    this.props.refine(query)
    this.setState({ query })
  }

  onKeyDown = ({ keyCode }) => {
    if ( keyCode === ENTER_KEY ) {
      const suggestion = this.props.hits[0]
      if (suggestion) {
        push(getBlogLink(suggestion.objectID))
      }
    }
  }

  render () {
    return (
      <Relative width={1}>
        <TextFieldWithNoOutline
          py={17.5}
          px={40}
          border={`1px solid white`}
          bg="transparent"
          width={1}
          fontSize={1}
          fontFamily="Serverless"
          lineHeight={1}
          opacity={0.6}
          color="white"
          onChange={this.onQueryChange}
          onKeyDown={this.onKeyDown}
          autoFocus
        />

        {
          this.state.query && (
            <Absolute
              top={52}
              left={0}
              right={0}
              zIndex={2}
              style={{ maxHeight: '60vh', overflowY: 'scroll', paddingBottom: '5vh' }}
            >
              <Card border="1px solid #f7f7f7">
                {
                  this.props.hits.map(({ title, description, objectID }) => (
                    <BlockLink
                      to={getBlogLink(objectID)}
                      key={objectID}
                    >
                      <Option p={15}>
                        <Text.p
                          fontFamily="SoleilBk"
                          fontSize={3}
                          fontWeight="bold"
                          my="5px"
                        >
                          { title }
                        </Text.p>
                        <Text.p>
                          { description }
                        </Text.p>
                      </Option>
                    </BlockLink>
                  ))
                }
              </Card>
            </Absolute>
          )
        }
      </Relative>
    )
  }
}

AutoComplete.defaultProps = { hits: [] }

export default connectAutoComplete(AutoComplete);
