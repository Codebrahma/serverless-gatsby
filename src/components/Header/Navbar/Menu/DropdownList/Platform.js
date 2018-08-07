import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
} from 'serverless-design-system/src';

import NavLink from '../../../../Fragments/Common/NavLink';
import { platform } from './navigationPath';

import frameworkIcon from '../../../../../assets/images/bolt.png';
import gatewayIcon from '../../../../../assets/images/group-6.png';
import dashboardIcon from '../../../../../assets/images/icon-dashboard.png';

const platformMenuConfig = [
  {
    imgProps: {
      src: frameworkIcon,
      maxHeight: '52px',
      ml: '8px',
      mr: '43px',
    },
    text: 'framework',
    to: platform.framework,
    crossDomain: false,
    completed: true,
  },
  {
    imgProps: {
      src: gatewayIcon,
      maxHeight: '40px',
      mr: '30px'
    },
    text: 'event gateway',
    to: platform.eventGateway,
    crossDomain: false,
    completed: true,
  },
  {
    imgProps: {
      src: dashboardIcon,
      maxHeight: '40px',
      mr: '30px'
    },
    text: 'dashboard',
    to: platform.dashboard,
    crossDomain: false,
    completed: true,
  }
];

export default () => (
  <List p={0} m={0}>
    {
      platformMenuConfig.map(({ imgProps, text, to, crossDomain, completed }, index) => (
        <NavLink key={index} to={to} crossDomain={crossDomain} completed={completed}>
          <ListItem key={text}>
            <Flex.relative
              mb={(platformMenuConfig.length - 1 === index) ? 0 : 2}
              justifyContent='center'
            >
              <Image {...imgProps} />
              <Box display='inline-block' minWidth="155px">
                <Heading.h6
                  fontFamily='Serverless'
                  fontSize='1.5rem'
                  lineHeight={0.7}
                  letterSpacing='5'
                  m={0}
                  color={'white'}
                >
                  serverless
                </Heading.h6>
                <Heading.h6
                  fontFamily='Serverless'
                  fontSize='2rem'
                  lineHeight={1.7}
                  letterSpacing={0.8}
                  m={0}
                  color={'white'}
                >
                  {text}
                </Heading.h6>
              </Box>
            </Flex.relative>
          </ListItem>
        </NavLink>
      ))
    }
  </List>
)
