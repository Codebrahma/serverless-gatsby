import React from 'react'
import { Image } from 'serverless-design-system/src'
import OptionWrapper from './OptionWrapper'
import searchIcon from 'src/assets/images/white-search-icon.svg'

export default () => (
  <OptionWrapper
    justifyContent="center"
    mx="5px"
  >
    <Image
      maxHeight="22px"
      src={searchIcon}
      objectFit="contain"
    />
  </OptionWrapper>
)
