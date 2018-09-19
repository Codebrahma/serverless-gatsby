import React from 'react'

import {
  Box,
  Column,
  InlineBlock,
  TextField,
  Button,
  Image,
  P,
  ResponsiveStack,
} from 'serverless-design-system/src'

import NavLink from '../NavLink'
import {
  facebookHandle,
  instagramHandle,
  twitterHandle,
} from 'src/constants/urls'
import facebookImage from 'src/assets/images/facebook.svg'
import instagramImage from 'src/assets/images/instagram.svg'
import twitterImage from 'src/assets/images/twitter.svg'

// Renders the subscribe column
const Subscribe = () => (
  <Column
    width={[1, 1, 0.35]}
    order={['1', '1', '2']}
    pl={[0, 0, 3]}
  >
    <Box mb={4}>
      <P color='white'>
        Join our newsletter and get the latest news about Serverless products
        and happenings. #noSpamWePromise
      </P>
    </Box>
    <ResponsiveStack.horizontallyCenter>
      <TextField
        color='white'
        bg='gray.3'
        border='none'
        fontSize={3}
        letterSpacing='textField'
        lineHeight={4}
        opacity='0.2'
        placeholder='email address'
        px={[1, 1, 1]}
        py={2}
        width={[1, 1, 0.6]}
        boxSizing='border-box'
      />
      <Button
        width={['35%', '35%', '40%']}
        px={[0, 0, 1]}
        py={2}
        textAlign='center'
        border={0}
        fontSize={2}
      >
        Sign up
      </Button>
    </ResponsiveStack.horizontallyCenter>
    <Box py={3}>
      <NavLink to={facebookHandle} crossDomain>
        <InlineBlock mr={3}>
          <Image src={facebookImage} />
        </InlineBlock>
      </NavLink>
      <NavLink to={instagramHandle} crossDomain>
        <InlineBlock mr={3}>
          <Image src={instagramImage} />
        </InlineBlock>
      </NavLink>
      <NavLink to={twitterHandle} crossDomain>
        <InlineBlock mr={3}>
          <Image src={twitterImage} />
        </InlineBlock>
      </NavLink>
    </Box>
  </Column>
)

export default Subscribe
