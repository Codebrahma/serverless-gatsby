import React from 'react'
import PropTypes from 'prop-types'

import { Flex, P, TextWithIcon, Text } from 'serverless-design-system/src'
import redRectangleDots from 'src/assets/images/redRectangleDots.png'

const HeroAdvantage = ({ title, description }) => (
  <Flex width={[1, 1, 1 / 3]} px={2} mt={2} flexDirection="column">
    <Flex justifyContent={['center', 'center', 'left']}>
      <TextWithIcon
        iconSrc={redRectangleDots}
        iconHeight="26px"
        iconWidth="45px"
        iconTop="-5px"
        iconLeft="-10px"
        backgroundSize="initial"
      >
        <Text.span
          color="white"
          fontFamily="SoleilBk"
          fontSize="4"
          align="center"
        >
          {title}
        </Text.span>
      </TextWithIcon>
    </Flex>
    <P color="gray.3">{description}</P>
  </Flex>
)

HeroAdvantage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default HeroAdvantage
