import React from 'react';
import { Flex } from 'serverless-design-system/src';
import RightBoxBg from '../../../assets/images/footerRightBoxBg.png';

import * as HomeRenderer from './HomeRenderer';
import * as FrameworkRenderer from './FrameworkRenderer';

const routes = {
  home: '/',
  framework: '/framework',
}

const renderContent = (path) => {
  switch(path) {
    case routes.home: {
      return HomeRenderer
    }
    case routes.framework: {
      return FrameworkRenderer
    }
    default:
      return HomeRenderer;
  }
}

// Renders Next Steps Box
// TODO: Decide on how we can include hardcoded px outside the spaces array
// TODO: Think how to remove hardcoded color from Background property
const DynamicInfo = ({ path }) => {
  const {
    LeftRenderer,
    RightRenderer,
  } = renderContent(path);
  
  return (
    <Flex
      bg="serverlessRed"
      flexDirection={['column', 'column', 'row']}
      position="relative"
      top="-320px"
      mb="-290px"
    >
      <LeftRenderer />
      <Flex
        width={[1, 1, 1/2]}
        py={[5, 5, '150px']}
        px={[3, 3, '100px']}
        boxSizing="border-box"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        background={`#fd5750 url(${RightBoxBg}) no-repeat`}
        backgroundSize="cover"
      >
        <RightRenderer />
      </Flex>
    </Flex>
  )
}

export default DynamicInfo;