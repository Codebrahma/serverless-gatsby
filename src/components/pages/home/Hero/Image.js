import React from 'react'

import {
  Flex,
  Heading,
  Image,
  Relative,
  withBeforeAfter,
} from 'serverless-design-system/src'
import frameworkIcon from 'src/assets/images/bolt.png'
import dashboardIcon from 'src/assets/images/icon-dashboard.png'
import gatewayIcon from 'src/assets/images/group-6.png'
import bulletLeftMarker from 'src/assets/images/bullet-left-marker.png'
import bulletRightMarker from 'src/assets/images/bullet-right-marker.png'

const bulletMarkerStyle = `
  content: " ";
  position: absolute;
  top: 50%;
  margin-top: -1px;
  background-position: center center;
  background-repeat: no-repeat;
`

const beforeBlockStyle = `
  ${bulletMarkerStyle}
  right: 130%;
  background-image: url(${bulletLeftMarker});
`

const afterBlockStyle = `
  ${bulletMarkerStyle}
  left: 130%;
  background-image: url(${bulletRightMarker});
`

const HeroImageWrapper = withBeforeAfter(
  Flex,
  `& > div:nth-child(2) > div`,
  beforeBlockStyle,
  afterBlockStyle
)

const ImageSection = ({ imgSrc, title, subtitle }) => (
  <Flex.verticallyCenter flexDirection='column' width={[1, 1, 1 / 3]}>
    <Relative>
      <Flex.verticallyCenter height='86px' my={2}>
        <Image src={imgSrc} maxHeight='86px' maxWidth='70px' />
      </Flex.verticallyCenter>
    </Relative>
    <Heading.h5 color='white'>{title}</Heading.h5>
    <Heading.h4
      color='white'
      fontWeight='bold'
      lineHeight={0}
      letterSpacing={"0.13rem"}
    >
      {subtitle}
    </Heading.h4>
  </Flex.verticallyCenter>
)

const HomeHeroImage = () => (
  <HeroImageWrapper
    flexDirection={['column', 'column', 'row']}
    width={[1, 1, 3 / 4]}
    mx='auto'
    mb={[2, 2, 4]}
    beforeBoxHeight={[0, 0, '20px']}
    afterBoxHeight={[0, 0, '20px']}
    beforeBoxWidth={[0, 0, '100px', '180px']}
    afterBoxWidth={[0, 0, '100px', '180px']}
  >
    <ImageSection
      imgSrc={frameworkIcon}
      title='serverless'
      subtitle='framework'
    />
    <ImageSection
      imgSrc={dashboardIcon}
      title='serverless'
      subtitle='dashboard'
    />
    <ImageSection imgSrc={gatewayIcon} title='event' subtitle='gateway' />
  </HeroImageWrapper>
)

export default HomeHeroImage