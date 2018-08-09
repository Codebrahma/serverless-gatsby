import React from 'react';

import {
  Box,
  Flex,
  Heading,
  TextWithIcon,
  ResponsiveStack,
  P
} from 'serverless-design-system/src';

import NavLink from '../NavLink';
import WhiteButton from '../WhiteButton';
import RightBoxBg from 'src/assets/images/footerRightBoxBg.png';
import whiteRectangleDots from 'src/assets/images/whiteRectangleDots.png';

const LeftColumn = ({ heading, sentences }) => (
  <Flex.horizontallyCenter
    width={[1, 1, 1/2]}
    py={[3, 5, 8]}
    px={[2, 4, 6]}
    boxSizing="border-box"
    flexDirection="column"
  >
    <TextWithIcon
      iconSrc={whiteRectangleDots}
      iconHeight="100px"
      iconWidth="150px"
      iconTop="-20px"
      iconLeft='-100px'
      backgroundSize={[0, 0, 'initial']}
    >
      <Heading.h2
        color="white"
        fontFamily={'SoleilBk'}
        fontSize={7}
        letterSpacing={0}
      >
        { heading }
      </Heading.h2>
    </TextWithIcon>
    {
      sentences.map((sentence, index) => (
        <P
          color="white"
          mt={0}
          key={index}
        >
          { sentence }
        </P>
      ))
    }
  </Flex.horizontallyCenter>
);

const RightColumn = ({ actions }) => (
  <Flex flexDirection="column">
    {
      actions.map(({ name, navProps }, index) => (
        <Box m={1} key={index}>
          <NavLink {...navProps}>
            <WhiteButton>
              { name }
            </WhiteButton>
          </NavLink>
        </Box>
      ))
    }
  </Flex>
);

export default ({ heading, sentences, actions }) => (
  <ResponsiveStack.relative
    bg="serverlessRed"
    top="-320px"
    mb="-290px"
    o="hidden"
  >
    <LeftColumn
      heading={heading}
      sentences={sentences}
    />
    <Flex.center
      width={[1, 1, 1/2]}
      py={[5, 5, 8]}
      px={[3, 3, 7]}
      boxSizing="border-box"
      flexDirection="column"
      background={`#fd5750 url(${RightBoxBg}) no-repeat`}
      backgroundSize="cover"
    >
      <RightColumn
        actions={actions}
      />
    </Flex.center>
  </ResponsiveStack.relative>
);
