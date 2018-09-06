import React from 'react'
import {
  Box,
  Background,
  Flex,
  Heading,
  Text,
  Image
} from 'serverless-design-system/src'
import { AppContainer } from 'src/components'
import { withTheme } from 'styled-components';

class Item extends React.Component {
  state = { selected: 0 }

  render() {
    const { theme } = this.props;
    return (
      <Box width={1}>
        <Background
          width={1}
          height={500}
          background={`url(https://raw.githubusercontent.com/adnanrahic/cdn/master/covers/catridingunicorn2.jpg)`}
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Flex.horizontallyCenter
            flexDirection="row"
            height="fullHeight"
            width={1}
            alignItems="flex-end"
            py={45}
          >
            {
              Array.apply(null, { length: this.props.numSlides }).map((_, index) => (
                <Box
                  height={15}
                  width={15}
                  mx={15}
                  bg={index === this.props.currentSlide ? theme.colors.primaryColor : 'white'}
                  key={`selector-${index}`}
                  onClick={() => this.props.goToSlide(index)}
                  style={{ cursor: 'pointer' }}
                />
              ))
            }
          </Flex.horizontallyCenter>
        </Background>
        <AppContainer>
          <Flex.verticallyCenter
            flexDirection="column"
            width={[1, 1, 1, 0.65]}
            m="auto"
          >
            <Box
              width={1}
              pt={3}
              pb={1}
            >
              <Text.p
                fontSize={1}
                opacity={0.4}
                lineHeight={1}
                letterSpacing="text"
                align="center"
              >
                guides & tutorials
              </Text.p>
            </Box>
            <Heading.h2
              fontFamily="SoleilBk"
              fontSize={[4, 4, 5, 7]}
              align="center"
              lineHeight={0}
            >
              Fantastic Serverless security risks, and where to find them
            </Heading.h2>
            <Box
              width={[1, 1, 1, 0.8]}
              px={[0, 0, 0, 4]}
            >
              <Text.p
                fontFamily="SoleilBk"
                color="gray.3"
                lineHeight={1.63}
                mt={[0, 0, 10, 15]}
              >
                A breakdown of the top serverless security risks, and steps you can take to secure your serverless applications.
              </Text.p>
            </Box>
            <Flex alignItems="center">
              <Text
                fontFamily="Soleil"
                fontSize={0}
                color="gray.3"
                lineHeight={2}
              >
                written by &nbsp;
              </Text>
              <Image
                src="https://avatars3.githubusercontent.com/u/15029531?v=4&s=460"
                height={33}
                width={33}
              />
              <Text
                fontFamily="Soleil"
                fontSize={0}
                color="gray.3"
                lineHeight={2}
              >
                &nbsp; Adnan Rahic
              </Text>
            </Flex>
          </Flex.verticallyCenter>
        </AppContainer>
      </Box>
    );
  }
}

export default withTheme(Item);
