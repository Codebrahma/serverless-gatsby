import React from 'react'
import {
  Relative,
  ResponsiveStack,
  Flex,
  Background,
  Heading,
  TertiaryButton,
  Card,
} from 'serverless-design-system/src'
import { NewsLetterForm } from 'src/components'
import blogFooterBackground from 'src/assets/images/blog-footer-background.png'

const SubmitButton = (props) => (
  <TertiaryButton
    width={0.4}
    height={60}
    fontSize={1}
    {...props}
  >
    sign up
  </TertiaryButton>
)

const Title = ({ component: HeadingComp, color }) => (
  <HeadingComp
    color={color}
    fontFamily="SoleilLt"
    letterSpacing="0"
    lineHeight={2}
  >
    Join 12,000+ other serverless devs &amp; keep up to speed on the latest serverless trends.
  </HeadingComp>
)

export default () => (
  <React.Fragment>
    <Relative
      display={['none', 'none', 'block']}
      top='-320px'
      mb='-290px'
      id="newsletter-box"
    >
      <Background
        background={`url(${blogFooterBackground})`}
        backgroundSize="cover"
      >
        <ResponsiveStack>
          <Flex
            width={[1, 1, 0.5]}
            p={[1, 1, 5, 7]}
            pr={2}
          >
            <Title component={Heading.h4} color="white" />
          </Flex>
          <Flex
            justifyContent="flex-end"
            alignItems="center"
            width={[1, 1, 0.5]}
            p={[1, 1, 4, 4, 7]}
          >
            <NewsLetterForm
              emailFieldProps={{ width: 0.6,
                height: 60,
                bg: "#ffffff33",
                fontSize: 1,
                placeholder: "enter email address",
                id: "newsletter-emailfield"
              }}
              btnComponent={SubmitButton}
              wrapperProps={{ width: 1, color: 'white' }}
              formStyles={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            />
          </Flex>
        </ResponsiveStack>
      </Background>
    </Relative>

    <Relative
      m={15}
      display={['block', 'block', 'none']}
      top='-360px'
      mb='-290px'
    >
      <Card border="1px solid #fd5750">
        <Background>
          <ResponsiveStack
            bg="#ffffffe6"
            py={2}
          >
            <Flex
              width={1}
              px={2}
              pb={2}
            >
              <Title component={Heading.h5} />
            </Flex>
            <NewsLetterForm
              wrapper={Flex.column}
              wrapperProps={{ alignItems: 'center', width: 1, px: 2 }}
              emailFieldProps={{
                bg: "#8c8c8c33",
                placeholder: "enter email address",
                placeholderColor: "gray.3",
                color: "gray.3",
                id: "newsletter-emailfield"
              }}
            />
          </ResponsiveStack>
        </Background>
      </Card>
    </Relative>
  </React.Fragment>
)
