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
  <Box 
    color="gray.3"
    width={['50%', '50%', '20%', '20%', '20%']}
    mb={['15px', '15px', '0', '0', '0']}
  >
    <Box>
      <P 
        color="white"
        fontSize="14px"
        lineHeight="1.14"
        letterSpacing="0.6px"
        m="0"
      >
        {header}
      </P>
    </Box>
    <Box>
    {
      listItems.map((listItem) => (
        <P
          pt="15px"
          fontSize="14px"
          lineHeight="1.14"
          letterSpacing="0.6px"
          m="0"
        >
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
      <P fontSize="12px" lineHeight="1.33" opacity="0.5" m="0px">
        Made with love in San Francisco + Atlanta, Austria, Germany, Pakistan, Poland, Nebraska & Thailand
      </P>
    </Box>
    <Flex display="flex" alignItems="center"  pt="40px">
      <Box>
        <P m="0px" fontSize="12px">Serverless, Inc. © 2018</P>
      </Box>
      <Flex color="gray.3" display="flex" ml="25px">
        <Box ml="25px" fontSize="12px">
          <P fontSize="12px">terms of service</P>
        </Box>
        <Box ml="25px" fontSize="12px">
          <P fontSize="12px">privacy policy</P>
        </Box>
      </Flex>
    </Flex>
  </Flex>
);

// TODO: Move this to molecule
const FooterWrapper = () => (
  <Flex
    bg="black"
    py="100px"
  >
    <Flex
      display="flex"
      px="20px"
      m="auto"
      flexWrap="wrap"
      maxWidth="1260px"
    >
      <Flex
        width={['100%', '100%', '65%', '65%', '65%']}
        order={['2', '2', '1', '1', '1']}
      >
        <Flex
          display="flex"
          flexWrap="wrap"
          px={'12px', '12px', '', '', ''}
          mb="40px"
        >
          <FooterList
            header="platform"
            listItems={['framework', 'dashboard', 'event gateway', 'enterprise']}
          />
          <FooterList
            header="developers"
            listItems={['docs', 'quick starts', 'examples & guides']}
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
      <Flex 
        width={['100%', '100%', '28%', '28%', '30%']}
        order={['1', '1', '2', '2', '2']}
        pl={['', '', '35px', '35px', '35px']}
      >
        <Flex color="white" mb="40px">
          <Box>
            Join our newsletter and get the latest news about Serverless products and happenings. #noSpamWePromise
          </Box>
        </Flex>
        <Flex
          display={['block', 'block', 'flex', 'flex', 'flex']}
          flexDirection={['column', 'column', 'row', 'row', 'row']}
          justifyContent="center"
        >
          <TextField
            color="white"
            bg="gray.3"
            border="none"
            fontSize={3}
            letterSpacing="textField"
            lineHeight={4}
            opacity="0.2"
            placeholder="email address"
            px={['0', '0', '13px', '13px', '13px']}
            py="22px"
            width={['100%', '100%', '60%', '60%', '60%']}
            boxSizing="border-box"
          />
          <Button
            width={['35%%', '35%', '40%', '40%', '40%']}
            pr={['7px', '10px', '10px', '12px', '15px']}
            pl={['7px', '10px', '10px', '12px', '15px']}
            py="22px"
            textAlign="center"
            fontSize="16px"
          >
            Sign up
          </Button>
        </Flex>
        <Flex py="35px">
          <Box>
            <Image mr="33px" src="https://serverless.com/_/src/assets/images/facebook.122045691ad327ec8d9806837bcb915d.png" />
            <Image mr="33px" src="https://serverless.com/_/src/assets/images/instagram.695101eb8303515c136199da23982dd8.png" />
            <Image mr="33px" src="https://serverless.com/_/src/assets/images/twitter.9da0b7cc2b72560a3cbfd4c1c92bbb42.png" />
          </Box>
        </Flex>
      </Flex>
    </Flex>

  </Flex>
);

export default FooterWrapper;