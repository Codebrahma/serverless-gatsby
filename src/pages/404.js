import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Background } from 'serverless-design-system/src'
import theme from 'serverless-design-system/src/theme'

import { Helmet } from 'src/fragments'
import Prefooter from 'src/components/Prefooter'
import DefaultLayout from 'src/layouts/Default'
import notFoundBackground from 'src/assets/images/404-background.jpg'

const sentences = [
  'It’s ok. You’re not the first one. Try any of the links on this page to get back on the right track.',
]

const actions = [
  {
    name: 'go home',
    navProps: {
      to: '/',
      completed: true,
    },
  },
  {
    name: 'about serverless',
    navProps: {
      to: '/learn/overview',
      completed: true,
    },
  },
  {
    name: 'signup',
    navProps: {
      to: 'https://dashboard.serverless.com',
      crossDomain: true,
    },
  },
]

const prefooter = () => (
  <Prefooter
    heading='It looks like you’re lost.'
    sentences={sentences}
    actions={actions}
  />
)

const NotFoundPage = () => (
  <ThemeProvider theme={theme}>
    <DefaultLayout prefooter={prefooter}>
      <Helmet title="404 - Page not found" />
      <Background
        backgroundImage={`url(${notFoundBackground})`}
        backgroundSize="contain"
        height="850px"
      />
    </DefaultLayout>
  </ThemeProvider>
)

export default NotFoundPage

