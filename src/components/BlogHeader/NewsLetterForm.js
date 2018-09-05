import React from 'react'
import { Box, TextField, Button } from 'serverless-design-system/src'

export default () => (
  <Box
    width={[1, 1, 1, 0.35]}
    display={['none', 'none', 'none', 'block']}
  >
    <TextField
      color='white'
      bg='gray.3'
      border='none'
      fontSize={2}
      fontFamily="Serverless"
      letterSpacing='textField'
      placeholder='enter email for weekly updates'
      placeholderColor="white"
      width={0.7}
      p={15}
    />
    <Button
      width={0.3}
      textAlign='center'
      border={0}
      fontSize={2}
      p={15}
    >
      sign up
    </Button>
  </Box>
)
