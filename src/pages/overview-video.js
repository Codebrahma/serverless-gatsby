import React from 'react'
import styled from 'styled-components'
import { push } from 'gatsby-link'

import DefaultLayout from 'src/layouts/Default'
import Helmet from 'src/fragments/Helmet'
import Modal from 'src/components/Modal/Modal'

const VideoPlayer = styled.iframe`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
`

export default class OverviewVideo extends React.Component {
  loadHome = () => push('/')

  render() {
    return (
      <DefaultLayout>
        <Helmet
          title="Serverless - The Serverless Application Framework powered by AWS Lambda, API Gateway, and more"
          description="Build web, mobile and IoT applications using AWS Lambda and API Gateway, Azure Functions, Google Cloud Functions, and more."
          location={this.props.location}
        />
        <Modal
          active
          onEscKeyDown={this.loadHome}
          onOverlayClick={this.loadHome}
        >
          <VideoPlayer
            src='https://player.vimeo.com/video/282028201?autoplay=1&color=f15953&title=0&byline=0&portrait=0'
            frameBorder='0'
            allowFullScreen
            webkitallowfullscreen='true'
            mozallowfullscreen='true'
          />
        </Modal>
      </DefaultLayout>
    )
  }
}
