import React from 'react'

import { Box, Text, Card, DropDown, TextField, Button, Flex, OptionWrapper, Image, ResponsiveStack } from 'serverless-design-system/src'

import searchIcon from 'src/assets/images/white-search-icon.svg'

export default class Search extends React.Component {
  state = { isSearchBarActive: false }

  toggleSearchBar = () => {
   
  }

  render() { 
    return (
    <Card
      border='1px solid #5b5b5b'
      m={[2]}
      mt={5}
    >
    <ResponsiveStack>

    
    <Box mx={2}>
      <DropDown
        placeholder='platform'
        fieldContainerProps={{
          border: 'none',
        }}
        placeholderProps={{ color: '#5b5b5b' }}
        options={[
            { label: 'AWS', value: 'aws' },
            { label: 'Google Cloud', value: 'gcp' },
            { label: 'Azure', value: 'azure' },
        ]}
        
        />
      </Box>
      <Box mx={2}>
      <DropDown
        placeholder='language'
        fieldContainerProps={{
          border: 'none',
        }}
        placeholderProps={{ color: '#5b5b5b' }}
        options={[
            { label: 'nodeJS', value: 'node' },
            { label: 'Go', value: 'go' },
        ]}
        />
      </Box>
      <Box mx={2}>
      <DropDown
        placeholder='framework'
        fieldContainerProps={{
          border: 'none',
        }}
        placeholderProps={{ color: '#5b5b5b' }}
        options={[

        ]}
        />
      </Box>
      <TextField 
        placeholder='Search for an example'
        height={50}
        width='100%'
        border='none'
        fontSize={2}
        fontFamily='Serverless'
        style={{borderLeft:'1px solid #5b5b5b'}}
        placeholderColor='#8c8c8c'
        px={2}
      />
      </ResponsiveStack>
    </Card>
    
)

      }
    }