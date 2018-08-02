// TODO: REFACTOR THIS FILE
// MAKE THE UI & THEME CONSISTENT

import React from 'react';
import {
  Box,
  Heading,
  Image,
  List,
  ListItem,
  TextWithIcon
} from 'serverless-design-system/src';

const PlatformDetailedMenu = () => (
  <List p={0} m={0}>
    {
      [
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
      ].map(({ imgProps, text }) => (
        <ListItem key={text}>
          <Box
            display='flex'
            mb={20}
            position='relative'
          >
            <Image {...imgProps} />
            <Box display='inline-block' minWidth="155px">
              <Heading.h6
                fontFamily='Serverless'
                fontSize='15px'
                lineHeight={0.7}
                letterSpacing='5'
                m={0}
                color={'white'}
              >
                serverless
              </Heading.h6>
              <Heading.h6
                fontFamily='Serverless'
                fontSize='20px'
                lineHeight={1.7}
                letterSpacing={0.8}
                m={0}
                color={'white'}
              >
                {text}
              </Heading.h6>
            </Box>
          </Box>
        </ListItem>
      ))
    }
  </List>
)

const MenuText = ({ children }) => (
  <Heading.h6
    fontSize={'1.76rem'}
    color='#aaaaaa'
  >
    {children}
  </Heading.h6>
);

const DeveloperDetailedMenu = () => (
  <Box>
    <Box>
      <TextWithIcon
        iconSrc='https://serverless.com/_/src/assets/images/dot-grid.ab343e1fdd716b7b80c667bc9eaeeb0d.png' iconHeight="20px"
        iconWidth="25px"
        iconTop="-5px"
        iconLeft="-10px"
      >
        <Heading.h4 m={0} p={0} color={'white'}>documentation</Heading.h4>
      </TextWithIcon>
      <List m='0' p='0' mt='30px' mb='30px'>
        <ListItem>
          <MenuText>framework</MenuText>
        </ListItem>
        <ListItem>
          <MenuText>platform</MenuText>
        </ListItem>
      </List>
    </Box>
    <Box width={[1, 1, 1/2]} display="inline-block">
      <TextWithIcon
        iconSrc='https://serverless.com/_/src/assets/images/dot-grid.ab343e1fdd716b7b80c667bc9eaeeb0d.png' iconHeight="20px"
        iconWidth="25px"
        iconTop="-5px"
        iconLeft="-10px"
      >
        <Heading.h4 m={0} p={0} color={'white'}>quick starts</Heading.h4>
      </TextWithIcon>
      <List m='0' p='0' mt='30px' mb='30px'>
        <ListItem>
          <MenuText>aws</MenuText>
        </ListItem>
        <ListItem>
          <MenuText>azure</MenuText>
        </ListItem>
        <ListItem>
          <MenuText>google cloud</MenuText>
        </ListItem>
        <ListItem>
          <MenuText>others</MenuText>
        </ListItem>
      </List>
    </Box>
    <Box width={[1, 1, 1/2]} display="inline-block">
      <TextWithIcon
        iconSrc='https://serverless.com/_/src/assets/images/dot-grid.ab343e1fdd716b7b80c667bc9eaeeb0d.png' iconHeight="20px"
        iconWidth="25px"
        iconTop="-5px"
        iconLeft="-10px"
      >
        <Heading.h4 m={0} p={0} color={'white'}>example & guides</Heading.h4>
      </TextWithIcon>
      <List m='0' p='0' mt='30px' mb='30px'>
        <ListItem>
          <MenuText>api's</MenuText>
        </ListItem>
        <ListItem>
          <MenuText>cron jobs</MenuText>
        </ListItem>
        <ListItem>
          <MenuText>webhooks</MenuText>
        </ListItem>
        <ListItem>
          <MenuText>event processing</MenuText>
        </ListItem>
      </List>
    </Box>
  </Box>
);

const LearnDetailedMenu = () => (
  <List m='0' p='0'>
    <ListItem>
      <MenuText>why?</MenuText>
    </ListItem>
    <ListItem>
      <MenuText>use cases</MenuText>
    </ListItem>
    <ListItem>
      <MenuText>comparisons</MenuText>
    </ListItem>
  </List>
);

const ResourceDetailedMenu = () => (
  <List m='0' p='0'>
    <ListItem>
      <MenuText>blog</MenuText>
    </ListItem>
    <ListItem>
      <MenuText>forum</MenuText>
    </ListItem>
    <ListItem>
      <MenuText>meetups</MenuText>
    </ListItem>
    <ListItem>
      <MenuText>slack</MenuText>
    </ListItem>
    <ListItem>
      <MenuText>workshops</MenuText>
    </ListItem>
  </List>
)

export {
  PlatformDetailedMenu,
  DeveloperDetailedMenu,
  LearnDetailedMenu,
  ResourceDetailedMenu
};
