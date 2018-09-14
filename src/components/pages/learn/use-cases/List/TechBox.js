import React from 'react'
import {
  Card,
  Flex,
  Column,
  Box,
  Image,
  HorizontalRule,
} from 'serverless-design-system/src'

export default ({ upperImage, lowerImage }) => (
  <Card
    width={[ 1, 1, 1/3 ]}
    maxWidth="250px"
    height="176px"
    my={[1, 1, 0]}
    mr={2}
    boxShadow="2px 2px 8px 0 #dfe5e6"
    border="solid 1px #dfe5e6"
  >
    <Flex.center
      flexDirection="column"
      width={1}
      height="fullHeight"
      px={3}
    >
      <Column
        height="50px"
        justifyContent="flex-end"
      >
        <Image
          src={upperImage}
          maxHeight="48px"
          maxWidth="150px"
          objectFit="contain"
        />
      </Column>
      {
        lowerImage && (
          <React.Fragment>
            <Box
              py={2}
              width={1}
            >
              <HorizontalRule
                height="1px"
                color="#d8d8d8"
              />
            </Box>
            <Column
              height="50px"
              justifyContent="flex-start"
            >
              <Image
                src={lowerImage}
                maxHeight="48px"
                maxWidth="150px"
                objectFit="contain"
              />
            </Column>
          </React.Fragment>
        )
      }
    </Flex.center>
  </Card>
)
