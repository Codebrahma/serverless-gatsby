import React from 'react'

import {
  Box,
  Column,
  InlineBlock,
  Image,
  P,
} from 'serverless-design-system/src'

import NavLink from '../NavLink'
import NewsLetterForm from '../NewsLetterForm'
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
    <NewsLetterForm emailFieldProps={{ placeholder: 'email address' }} />
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
