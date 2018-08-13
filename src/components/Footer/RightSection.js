import React from 'react'

import {
  Flex,
  Box,
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
import footerFb from 'src/assets/images/footerFb.png'
import footerInsta from 'src/assets/images/footerInst.png'
import footerTwitter from 'src/assets/images/footerTwitter.png'

// Renders the subscribe column
const Subscribe = () => (
  <Flex.column
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
        <Image mr={3} src={footerFb} />
      </NavLink>
      <NavLink to={instagramHandle} crossDomain>
        <Image mr={3} src={footerInsta} />
      </NavLink>
      <NavLink to={twitterHandle} crossDomain>
        <Image mr={3} src={footerTwitter} />
      </NavLink>
    </Box>
  </Flex.column>
)

export default Subscribe
