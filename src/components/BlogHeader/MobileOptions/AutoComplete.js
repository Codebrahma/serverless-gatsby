import React from 'react'
import styled from 'styled-components'
import { push } from 'gatsby-link'
import {
  Card,
  Relative,
  Fixed,
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

const BorderedTextField = styled(TextField)`
  border-bottom: 2px solid #5b5b5b;

  &:focus, &:active {
    outline: none;
  }
`

const ENTER_KEY = 13

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
        <BorderedTextField
          width={1}
          bg="transparent"
          webkitAppearance="none"
          border="none"
          borderRadius="0"
          color="white"
          fontFamily="Serverless"
          height={24}
          onChange={this.onQueryChange}
          onKeyDown={this.onKeyDown}
          autoFocus
        />

        {
          this.state.query && (
            <Fixed
              top={42}
              left={0}
              right={0}
              width="100vw"
              zIndex={2}
              style={{ maxHeight: '100vh', overflowY: 'scroll' }}
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
                          fontSize={1}
                          fontWeight="bold"
                          my="5px"
                        >
                          { title }
                        </Text.p>
                        <Text.p fontSize={0}>
                          { description }
                        </Text.p>
                      </Option>
                    </BlockLink>
                  ))
                }
              </Card>
            </Fixed>
          )
        }
      </Relative>
    )
  }
}

export default connectAutoComplete(AutoComplete);
