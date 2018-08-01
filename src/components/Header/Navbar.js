import React from 'react';
import styled from 'styled-components';

import {
  Box,
  Image,
  Text,
  List,
  ListItem,
  Button,
  TextWithIcon
} from 'serverless-design-system/src';

const NavListItem = styled(ListItem)`
  list-style-type: none;
  position: relative;

  div > div:nth-child(2) {
    display: none;
  }

  &:hover > div {
    div:nth-child(2) {
      display: inline-block;
    }
  }
`;

const MenuTitle = ({ name }) => (
  <Box px='25px' py='35.5px'>
    <Text.span
      fontFamily='Serverless'
      fontSize={'16px'}
      color={'white'}
      letterSpacing={0.7}
    >
      {name}
    </Text.span>
  </Box>
)

const PlatformDetailedMenu = () => (
  <Box
    pl={4}
    pr={4}
    pt={3}
    pb={4}
    position='absolute'
    zIndex='999'
    top='90px'
    left='-50%'
    bg='black'
  >
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
          <ListItem>
            <Box
              display='flex'
              mb={20}
              position='relative'
            >
              <Image {...imgProps} />
              <Box display='inline-block' minWidth="155px">
                <Text.h6
                  fontFamily='Serverless'
                  fontSize='15px'
                  lineHeight={0.7}
                  letterSpacing='5'
                  m={0}
                  color={'white'}
                >
                  serverless
                </Text.h6>
                <Text.h6
                  fontFamily='Serverless'
                  fontSize='20px'
                  lineHeight={1.7}
                  letterSpacing={0.8}
                  m={0}
                  color={'white'}
                >
                  {text}
                </Text.h6>
              </Box>
            </Box>
          </ListItem>
        ))
      }
    </List>
  </Box>
)

const DeveloperDetailedMenu = () => (
  <Box
    pl={4}
    pr={4}
    pt={3}
    pb={4}
    position='absolute'
    zIndex='999'
    top='90px'
    left='-50%'
    bg='black'
    minWidth='380px'
  >
    <Box width="100%">
      <Box>
        <TextWithIcon
          iconSrc='https://serverless.com/_/src/assets/images/dot-grid.ab343e1fdd716b7b80c667bc9eaeeb0d.png' iconHeight="24px"
          iconWidth="30px"
          iconTop="-5px"
        >
          <Text.h4 m={0} p={0} color={'white'}>documentation</Text.h4>
        </TextWithIcon>
        <List m='0' p='0'>
          <ListItem>
            <Text.h6 color='white' fontSize='2'>framework</Text.h6>
          </ListItem>
          <ListItem>
            <Text.h6 color='white' fontSize='2'>platform</Text.h6>
          </ListItem>
        </List>
      </Box>
      <Box width="50%" display="inline-block">
        <TextWithIcon
          iconSrc='https://serverless.com/_/src/assets/images/dot-grid.ab343e1fdd716b7b80c667bc9eaeeb0d.png' iconHeight="24px"
          iconWidth="30px"
          iconTop="-5px"
        >
          <Text.h4 m={0} p={0} color={'white'}>quick starts</Text.h4>
        </TextWithIcon>
        <List m='0' p='0'>
          <ListItem>
            <Text.h6 color='white' fontSize='2'>aws</Text.h6>
          </ListItem>
          <ListItem>
            <Text.h6 color='white' fontSize='2'>azure</Text.h6>
          </ListItem>
          <ListItem>
            <Text.h6 color='white' fontSize='2'>google cloud</Text.h6>
          </ListItem>
          <ListItem>
            <Text.h6 color='white' fontSize='2'>others</Text.h6>
          </ListItem>
        </List>
      </Box>
      <Box width="50%" display="inline-block">
        <TextWithIcon
          iconSrc='https://serverless.com/_/src/assets/images/dot-grid.ab343e1fdd716b7b80c667bc9eaeeb0d.png' iconHeight="24px"
          iconWidth="30px"
          iconTop="-5px"
        >
          <Text.h4 m={0} p={0} color={'white'}>example & guides</Text.h4>
        </TextWithIcon>
        <List m='0' p='0'>
          <ListItem>
            <Text.h6 color='white' fontSize='2'>api's</Text.h6>
          </ListItem>
          <ListItem>
            <Text.h6 color='white' fontSize='2'>cron jobs</Text.h6>
          </ListItem>
          <ListItem>
            <Text.h6 color='white' fontSize='2'>webhooks</Text.h6>
          </ListItem>
          <ListItem>
            <Text.h6 color='white' fontSize='2'>event processing</Text.h6>
          </ListItem>
        </List>
      </Box>
    </Box>
  </Box>
);

const LearnDetailedMenu = () => (
  <Box
    pl={4}
    pr={4}
    pt={3}
    pb={4}
    position='absolute'
    zIndex='999'
    top='90px'
    left='-50%'
    bg='black'
    minWidth='225px'
  >
    <List m='0' p='0'>
      <ListItem>
        <Text.h6 color='white' fontSize='2'>why?</Text.h6>
      </ListItem>
      <ListItem>
        <Text.h6 color='white' fontSize='2'>use cases</Text.h6>
      </ListItem>
      <ListItem>
        <Text.h6 color='white' fontSize='2'>comparisons</Text.h6>
      </ListItem>
    </List>
  </Box>
);

const ResourceDetailedMenu = () => (
  <Box
    pl={4}
    pr={4}
    pt={3}
    pb={4}
    position='absolute'
    zIndex='999'
    top='90px'
    left='-50%'
    bg='black'
    minWidth='225px'
  >
    <List m='0' p='0'>
      <ListItem>
        <Text.h6 color='white' fontSize='2'>blog</Text.h6>
      </ListItem>
      <ListItem>
        <Text.h6 color='white' fontSize='2'>forum</Text.h6>
      </ListItem>
      <ListItem>
        <Text.h6 color='white' fontSize='2'>meetups</Text.h6>
      </ListItem>
      <ListItem>
        <Text.h6 color='white' fontSize='2'>slack</Text.h6>
      </ListItem>
      <ListItem>
        <Text.h6 color='white' fontSize='2'>workshops</Text.h6>
      </ListItem>
    </List>
  </Box>
)

const Navbar = () => (
  <Box>
    <List m='0' p='0'>
      <NavListItem display={['block', 'block', 'inline-block']}>
        <Box>
          <MenuTitle name={'platform'} />
          <PlatformDetailedMenu />
        </Box>
      </NavListItem>
      <NavListItem display={['block', 'block', 'inline-block']}>
        <Box>
          <MenuTitle name={'developers'} />
          <DeveloperDetailedMenu />
        </Box>
      </NavListItem>
      <NavListItem display={['block', 'block', 'inline-block']}>
        <Box>
          <MenuTitle name={'learn'} />
          <LearnDetailedMenu />
        </Box>
      </NavListItem>
      <NavListItem display={['block', 'block', 'inline-block']}>
        <Box>
          <MenuTitle name={'resources'} />
          <ResourceDetailedMenu />
        </Box>
      </NavListItem>
      <NavListItem
        display={['block', 'block', 'inline-block']}
      >
        <Box>
          <MenuTitle name={'enterprise'} />
        </Box>
      </NavListItem>
      <NavListItem
        display={['block', 'block', 'inline-block']}
      >
        <Box>
          <Button>signup</Button>
        </Box>
      </NavListItem>
    </List>
  </Box>
)

export default Navbar;
