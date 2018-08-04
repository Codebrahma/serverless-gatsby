import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
} from 'serverless-design-system/src';

const platformMenuConfig = [
  {
    imgProps: {
      src: 'https://serverless.com/_/src/assets/images/bolt.be31a2cb237f3c0d40581ecba9efa8d3.png',
      maxHeight: '52px',
      ml: '8px',
      mr: '43px',
    },
    text: 'framework'
  },
  {
    imgProps: {
      src: 'https://serverless.com/_/src/assets/images/group-6.42d1cd534252f3f9b17e6f4d3e3ac818.png',
      maxHeight: '40px',
      mr: '30px'
    },
    text: 'event gateway'
  },
  {
    imgProps: {
      src: 'https://serverless.com/_/src/assets/images/icon-dashboard.670198be7530974cf50d17671215f69f.png',
      maxHeight: '40px',
      mr: '30px'
    },
    text: 'dashboard'
  }
];

export default () => (
  <List p={0} m={0}>
    {
      platformMenuConfig.map(({ imgProps, text }, index) => (
        <ListItem key={text}>
          <Flex
            mb={(platformMenuConfig.length - 1 === index) ? 0 : 2}
            position='relative'
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
          </Flex>
        </ListItem>
      ))
    }
  </List>
)