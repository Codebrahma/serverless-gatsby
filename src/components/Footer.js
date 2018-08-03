// TODO: SPLIT & REFACTOR FOOTER CODE
// FIX THEME CONSISTENCY ISSUES

// 1. Rewrite flex component
// 2. Rewrite layouts with arrays .....
// 3. Make lengths more consistent
// 4. Make image load faster
// 5. Don't Use Width in %
import React from 'react';
import {
  Flex,
  Box,
  Button,
  Heading,
  Image,
  P,
  TextField,
} from 'serverless-design-system/src';

const FooterList = ({ header, listItems }) => (
  <Box
    color="gray.3"
    width={['50%', '50%', '20%']}
    mb={[2, 2, 0]}
  >
    <Box>
      <P
        color="white"
        fontSize={1}
        lineHeight={1}
        letterSpacing="letterSpacings.text"
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
          pt={1}
          fontSize={1}
          lineHeight={1}
          letterSpacing="letterSpacings.text"
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
      width={[1, 1, 1/2]}
    >
      <P
        fontSize={0}
        lineHeight={3}
        opacity="0.5"
        m={0}
      >
        Made with love in San Francisco + Atlanta, Austria, Germany, Pakistan, Poland, Nebraska & Thailand
      </P>
    </Box>
    <Flex
      display="flex"
      alignItems="center"
      pt={4}
    >
      <Box>
        <P
          m={0}
          fontSize={0}
        >
          Serverless, Inc. © 2018
        </P>
      </Box>
      <Flex
        color="gray.3"
        display="flex"
        ml={2}
      >
        <Box
          ml={2}
          fontSize={0}
        >
          <P fontSize={0}>terms of service</P>
        </Box>
        <Box
          ml={2}
          fontSize={0}
        >
          <P
            fontSize={0}
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
    width={['', '', 1]}
    display={['block', 'block', 'flex']}
    flexDirection="row"
    mx={['-20px', '-20px', '0']}
    position="relative"
    top={['0', '0', '-240px']}
  >
    <Box
      width={[1, 1, 1/2]}
      py={[3, 5, '150px']}
      px={[3, 5, '100px']}
      boxSizing="border-box"
      justifyContent="center"
      flexDirection="column"
    >
      <Heading.h2>Next Steps</Heading.h2>
      <P color="white">Check out all the different use cases for serverless applications. Take a peek at how the Serverless Framework compares to other software.</P>
      <P color="white">Or if you're ready, follow our step-by-step guide to start building a Serverless Application with your favorite language.</P>
    </Box>
    <Flex
      width={[1, 1, 1/2]}
      py={['60px', '60px', '150px']}
      px={['30px', '30px', '100px']}
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
    width={[1, 1, '28%']}
    order={['1', '1', '2']}
    pl={['', '', '35px']}
  >
    <Flex mb="40px">
      <P color="white">
        Join our newsletter and get the latest news about Serverless products and happenings. #noSpamWePromise
      </P>
    </Flex>
    <Flex
      display={['block', 'block', 'flex']}
      flexDirection={['column', 'column', 'row']}
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
        px={['13px', '13px', '13px']}
        py="22px"
        width={[1, 1, '60%']}
        boxSizing="border-box"
      />
      <Button
        width={['35%%', '35%', '40%']}
        pr={['7px', '10px', '10px']}
        pl={['7px', '10px', '10px']}
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
    pt={['0', '0', '20px']}
    pb={['30px', '30px']}
    width={1}
  >
    <Image
      width={['0', '0', '138px']}
      src="https://serverless.com/_/src/assets/images/logo.ce91bef30d19103f7a9be878a9b44465.png"
    />
  </Box>
);

const FooterListItems = () => (
  <Flex
    width={[1, 1, '65%']}
    order={['2', '2', '1']}
  >
    <Flex
      display="flex"
      flexWrap="wrap"
      px={['12px', '12px', '0']}
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
      display="flex"
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