import React from 'react';
import styled from 'styled-components';

import { Flex, Heading, Image } from 'serverless-design-system/src';
import frameworkIcon from '../../../assets/images/bolt.png';
import dashboardIcon from '../../../assets/images/icon-dashboard.png';
import gatewayIcon from '../../../assets/images/group-6.png';
import bulletLeftMarker from '../../../assets/images/bullet-left-marker.png';
import bulletRightMarker from '../../../assets/images/bullet-right-marker.png';

const bulletMarkerStyle = `
  content: " ";
  position: absolute;
  top: 50%;
  margin-top: -1px;
  height: 20px;
  width: 180px;
  background-position: center center;
`;

const HeroImageWrapper = styled(Flex)`
  & > ${Flex}:nth-child(2) > ${Flex} {
    position: relative;

    &:before {
      ${bulletMarkerStyle}
      right: 130%;
      background: url(${bulletLeftMarker}) center center no-repeat;
    }

    &:after {
      ${bulletMarkerStyle}
      left: 130%;
      background: url(${bulletRightMarker}) center center no-repeat;
    }
  }
`;

const ImageSection = ({ imgSrc, title, subtitle }) => (
  <Flex
    display='flex'
    flexDirection='column'
    width={[1, 1, 1/3]}
    alignItems='center'
  >
    <Flex
      height='86px'
      display='flex'
      alignItems='center'
      my='16px'
    >
      <Image
        src={imgSrc}
        maxHeight='86px'
        maxWidth='70px'
      />
    </Flex>
    <Heading.h5 color='white'>{title}</Heading.h5>
    <Heading.h4 color='white' fontWeight='bold'>{subtitle}</Heading.h4>
  </Flex>
);

export default () => (
  <HeroImageWrapper
    flexDirection={['column', 'column', 'row']}
    display='flex'
    width={[1, 1, 3/4]}
    mx='auto'
    my={5}
  >
    <ImageSection imgSrc={frameworkIcon} title='serverless' subtitle='framework' />
    <ImageSection imgSrc={dashboardIcon} title='serverless' subtitle='dashboard' />
    <ImageSection imgSrc={gatewayIcon} title='event' subtitle='gateway' />
  </HeroImageWrapper>
);
