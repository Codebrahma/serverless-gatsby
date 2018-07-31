import React from 'react';
import styled from 'styled-components';
import {
  Flex,
  Box,
  Button,
  Image,
  P,
  TextField
} from 'serverless-design-system/src';

const FooterList = ({ header, listItems }) => (
  <Box color="gray.3" width={['50%', '50%', '20%', '20%', '20%']}>
    <Box>
      <P color="white" pt="15px" fontSize="14px" lineHeight="1.14" letterSpacing="0.6px">
        {header}
      </P>
    </Box>
    <Box>
    {
      listItems.map((listItem) => (
        <P pt="15px" fontSize="14px" lineHeight="1.14" letterSpacing="0.6px">
          {listItem}
        </P>  
      ))
    }
    </Box>
  </Box>
);

const CompanyDetails = () => (
  <Flex>
    <Box width={['100%', '100%', '50%', '50%', '50%']}>
      <P fontSize="12px" lineHeight="1.33" opacity="0.5" mb="1rem">
        Made with love in San Francisco + Atlanta, Austria, Germany, Pakistan, Poland, Nebraska & Thailand
      </P>
    </Box>
    <Flex display="flex" alignItems="center">
      <Box>
        <P>Serverless, Inc. © 2018</P>
      </Box>
      <Flex color="gray.3" display="flex" ml="25px">
        <Box ml="25px">terms of service</Box>
        <Box ml="25px">privacy policy</Box>
      </Flex>
    </Flex>
  </Flex>
);

// TODO: Move this to molecule
const FooterWrapper = () => (
  <Flex
    bg="black"
  >
    <Flex
      display="flex"
      width="100%"
      px="15px"
      m="auto"
      flexWrap="wrap"
    >
      <Flex
        width={['100%', '100%', '65%', '65%', '65%']}
      >
        <Flex
          display="flex"
          flexWrap="wrap"
          mb="40px"
        >
          <FooterList
            header="platform"
            listItems={['framework', 'dashboard', 'event gateway', 'enterprise']}
          />
          <FooterList
            header="platform"
            listItems={['developers', 'docs', 'quick starts', 'examples & guides']}
          />
          <FooterList
            header="learn"
            listItems={['why ?', 'use cases', 'comparisions']}
          />
          <FooterList
            header="resources"
            listItems={['blog', 'forum', 'meetups', 'slack', 'workshops']}
          />
          <FooterList
            header="company"
            listItems={['team', 'jobs', 'champions', 'contacts']}
          />
        </Flex>
        <CompanyDetails />
      </Flex>
      <Flex width={['100%', '100%', '35%', '35%', '35%']} order="1">
        <Flex color="white">
          <Box>
            Join our newsletter and get the latest news about Serverless products and happenings. #noSpamWePromise
          </Box>
        </Flex>
        <TextField
          color="dark.blue"
          fontSize={3}
          letterSpacing="textField"
          lineHeight={4}
          opacity="0.2"
          placeholder="email address"
          pb="15px"
          pt="11px"
          px="24px"
        />
        <Button 
          pr="1.5em"
          pl="0"
          width="40%">
          Serverless
        </Button>
        <Flex mt="35px" display="flex">
          <Image mr="10px" src="https://serverless.com/_/src/assets/images/facebook.122045691ad327ec8d9806837bcb915d.png" />
          <Image mr="10px" src="https://serverless.com/_/src/assets/images/instagram.695101eb8303515c136199da23982dd8.png" />
          <Image mr="10px" src="https://serverless.com/_/src/assets/images/twitter.9da0b7cc2b72560a3cbfd4c1c92bbb42.png" />
        </Flex>
      </Flex>
    </Flex>

  </Flex>
);

export default FooterWrapper;