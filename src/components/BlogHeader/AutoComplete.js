import React from 'react'
import styled from 'styled-components'
import {
  Card,
  Relative,
  Absolute,
  TextField,
  Text
} from 'serverless-design-system/src'
import { connectAutoComplete } from 'react-instantsearch-dom'
import { BlockLink } from 'src/components'

const Option = styled(Relative)`
  background: white;
  color: #8c8c8c;
  border: 1px solid #f7f7f7;

  &:hover {
    color: #5b5b5b;
  }
`

class AutoComplete extends React.Component {
  state = { query: '' }

  onQueryChange = ({ target: { value: query } }) =>{
    this.props.refine(query)
    this.setState({ query })
  }

  render () {
    return (
      <Relative width={1}>
        <TextField
          py={16}
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
          autoFocus
        />

        {
          this.state.query && (
            <Absolute
              top={48}
              width={1}
              zIndex={2}
            >
              <Card border="1px solid #f7f7f7">
                {
                  this.props.hits.map(({ title, description, objectID }) => (
                    <BlockLink
                      to={`/blog/${objectID}`}
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

export default connectAutoComplete(AutoComplete);
