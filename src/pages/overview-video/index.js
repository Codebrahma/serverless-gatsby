import React from 'react';
import styled from 'styled-components';
import { push } from 'gatsby-link';

import Modal from './../../components/Modal/Modal';

const VideoPlayer = styled.iframe`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
`;

export default class OverviewVideo extends React.Component {

  loadHome = () => push('/');

  render() {
    return (
      <Modal
        active
        onEscKeyDown={this.loadHome}
        onOverlayClick={this.loadHome}
      >
        <VideoPlayer
          src="https://player.vimeo.com/video/282028201?autoplay=1&color=f15953&title=0&byline=0&portrait=0"
          frameBorder="0"
          allowFullScreen
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
        />
      </Modal>
    );
  }
}