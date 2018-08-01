import React from 'react';
import styled from 'styled-components';
import {
  Flex,
  Box,
  Button,
  Heading,
  Image,
  P,
  TextField,
  TextWithIcon,
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
      listItems.map((listItem, index) => (
        <P
          key={index}
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
    <Box
      width={['100%', '100%', '50%', '50%', '50%']}
    >
      <P
        fontSize="12px"
        lineHeight="1.33"
        opacity="0.5"
        m="0px"
      >
        Made with love in San Francisco + Atlanta, Austria, Germany, Pakistan, Poland, Nebraska & Thailand
      </P>
    </Box>
    <Flex
      display="flex"
      alignItems="center"
      pt="40px"
    >
      <Box>
        <P
          m="0px"
          fontSize="12px"
        >
          Serverless, Inc. © 2018
        </P>
      </Box>
      <Flex
        color="gray.3"
        display="flex"
        ml="25px"
      >
        <Box
          ml="25px"
          fontSize="12px"
        >
          <P fontSize="12px">terms of service</P>
        </Box>
        <Box
          ml="25px"
          fontSize="12px"
        >
          <P
            fontSize="12px"
          >
            privacy policy
          </P>
        </Box>
      </Flex>
    </Flex>
  </Flex>
);

const NextSteps = () => (
  <Flex
    bg="serverlessRed"
    width={['', '', '100%', '100%', '100%']}
    display={['block', 'block', 'flex', 'flex', 'flex']}
    flexDirection="row"
    mx={['-20px', '-20px', '0', '0', '0']}
    position="relative"
    top={['0', '0', '-240px', '-240px', '-240px']}
  >
    <Box
      width={['100%', '100%', '50%', '50%', '50%']}
      py={['60px', '60px', '150px', '150px', '150px']}
      px={['30px', '30px', '100px', '100px', '100px']}
      boxSizing="border-box"
      justifyContent="center"
      flexDirection="column"
    >
      <Heading.h2>Next Steps</Heading.h2>
      <P color="white">Check out all the different use cases for serverless applications. Take a peek at how the Serverless Framework compares to other software.</P>
      <P color="white">Or if you're ready, follow our step-by-step guide to start building a Serverless Application with your favorite language.</P>
    </Box>
    <Flex
      width={['100%', '100%', '50%', '50%', '50%']}
      py={['60px', '60px', '150px', '150px', '150px']}
      px={['30px', '30px', '100px', '100px', '100px']}
      boxSizing="border-box"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box pb="25px">
        <Button width="230px" border="2">use cases</Button>
      </Box>
      <Box>
        <Button width="230px" border="2">comparision</Button>
      </Box>
    </Flex>
  </Flex>
);

const Subscribe = () => (
  <Flex
    width={['100%', '100%', '28%', '28%', '30%']}
    order={['1', '1', '2', '2', '2']}
    pl={['', '', '35px', '35px', '35px']}
  >
    <Flex mb="40px">
      <P color="white">
        Join our newsletter and get the latest news about Serverless products and happenings. #noSpamWePromise
      </P>
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
        px={['13px', '13px', '13px', '13px', '13px']}
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
);

const FooterIcon = () => (
  <Box
    pt={['0', '0', '20px', '20px', '20px']}
    pb={['30px', '30px', '100px', '100px', '100px']}
    width="100%"
  >
    <Image
      width={['0', '0', '138px', '138px', '138px']}
      src="https://serverless.com/_/src/assets/images/logo.ce91bef30d19103f7a9be878a9b44465.png"
    />
  </Box>
);

const FooterListItems = () => (
  <Flex
    width={['100%', '100%', '65%', '65%', '65%']}
    order={['2', '2', '1', '1', '1']}
  >
    <Flex
      display="flex"
      flexWrap="wrap"
      px={['12px', '12px', '0', '0', '0']}
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
);

const FooterWrapper = () => (
  <Flex
    bg="black"
    pt={['0px', '0px', '100px']}
    pb="100px"
  >
    <Flex
      display={['flex', 'flex', 'flex', 'flex', 'flex']}
      px="20px"
      m="auto"
      flexWrap="wrap"
      maxWidth="1260px"
    >
      <NextSteps />
      <FooterIcon />
      <FooterListItems />
      <Subscribe />
    </Flex>
  </Flex>
);

export default FooterWrapper;